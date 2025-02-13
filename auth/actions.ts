'use server';

import { db } from '@/drizzle/db';
import { LoginFormSchema, SignupFormSchema } from './definitions';
import { FormState } from '@/auth/definitions';
import { compare_hash_and_password, encode_password } from '@/lib/hash';
import { UsersTable } from '@/drizzle/schemas/users';
import { eq, or } from 'drizzle-orm';
import { createSession, deleteSession } from './stateless-session';

export async function signup(state: FormState, formData: FormData): Promise<FormState> {
  const validateResult = SignupFormSchema.safeParse({
    username: formData.get('username'),
    email: formData.get('email'),
    age: Number(formData.get('age')) || typeof formData.get('age'),
    password: formData.get('password'),
  });

  if (!validateResult.success) {
    return {
      errors: validateResult.error.flatten().fieldErrors,
    };
  }

  const { username, email, age, password } = validateResult.data;

  const existingUser = await db
    .select()
    .from(UsersTable)
    .where(or(eq(UsersTable.email, email), eq(UsersTable.username, username)));

  if (existingUser.length != 0) {
    return {
      message: 'Email or username already exists, please use a different email or username.',
    };
  }

  const data = await db
    .insert(UsersTable)
    .values({
      username,
      email,
      age,
      hashedPassword: await encode_password(password),
      role: 'user',
    })
    .returning({ id: UsersTable.id });

  const user = data[0];

  if (!user) {
    return {
      message: 'An error occurred while creating your account.',
    };
  }
  const userId = user.id;

  await createSession(userId);
}

export async function login(state: FormState, formData: FormData): Promise<FormState> {
  const validateResult = LoginFormSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  });

  if (!validateResult.success) {
    return {
      errors: validateResult.error.flatten().fieldErrors,
    };
  }

  const { email, password } = validateResult.data;

  const UserPassword = await db
    .select({ hashedPassword: UsersTable.hashedPassword })
    .from(UsersTable)
    .where(eq(UsersTable.email, email));

  //1. check if user exists
  if (UserPassword.length == 0) {
    return {
      message: 'User not exists, please use a different email or login',
    };
  }
  //2. check if password is correct
  if (!(await compare_hash_and_password(password, UserPassword[0].hashedPassword))) {
    return {
      message: 'Password is incorrect, please use a different password',
    };
  }
  //3. try to get user data
  const user = (await db.select().from(UsersTable).where(eq(UsersTable.email, email)))[0];

  //4. check if user was correctly found
  if (!user) {
    return {
      message: 'An error occurred while login processed.',
    };
  }

  const userId = user.id;
  await createSession(userId);
}
export async function logout() {
  deleteSession();
}

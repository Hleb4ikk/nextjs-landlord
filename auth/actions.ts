'use server'

import { db } from "@/drizzle/db"
import { SignupFormSchema } from "./definitions"
import { FormState } from "@/auth/definitions"
import { encode_password } from "@/lib/hash"
import { UsersTable } from "@/drizzle/schemas/users"
import { eq } from "drizzle-orm"
import { createSession } from "./stateless-session"

export async function signup(state: FormState, formData: FormData): Promise<FormState>{
    
    const validateResult = SignupFormSchema.safeParse({
        username: formData.get('username'),
        email: formData.get('email'),
        age: Number(formData.get('age')) || typeof(formData.get('age')),
        password: formData.get('password')
    })
    
    if(!validateResult.success){
        return {
            errors: validateResult.error.flatten().fieldErrors,
        }
    }
    
    const {username, email, age, password} = validateResult.data

    const existingUser = await db.select().from(UsersTable).where(eq(UsersTable.email, email))
    if (existingUser.length != 0) {
        return {
            message: 'Email already exists, please use a different email or login.',
        };
    }

    const data = await db
        .insert(UsersTable)
        .values({username, email, age, hashedPassword: await encode_password(password), role: 'user'})
        .returning({id: UsersTable.id})
    
    const user = data[0]

    if (!user) {
        return {
          message: 'An error occurred while creating your account.',
        };
    }
    const userId = user.id;

    await createSession(userId);
}
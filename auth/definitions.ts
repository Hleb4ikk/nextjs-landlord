import { z } from 'zod';

export const SignupFormSchema = z.object({
  username: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters long.' })
    .regex(/^[a-zA-Z0-9_]*$/, { message: 'Username allows only letters, numbers and underscores ' })
    .trim(),
  email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
  age: z.number().min(14, { message: 'Age must be at least 14.' }).max(150, { message: 'Age must be less then 150.' }),
  password: z
    .string()
    .min(8, { message: 'Must be at least 8 characters long.' })
    .regex(/[a-zA-Z]/, { message: 'Must contain at least one letter.' })
    .regex(/[0-9]/, { message: 'Must contain at least one number.' })
    .regex(/[^a-zA-Z0-9]/, {
      message: 'Must contain at least one special character.',
    })
    .trim(),
});

export const LoginFormSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email.' }),
  password: z.string().min(1, { message: 'Password field must not be empty.' }),
});

export type UserDefinition = {
  id: string;
  username: string;
  email: string;
  isAdmin: boolean;
  urlPath: string | null;
  registeredAt: Date | null;
};

export type FormState =
  | {
      errors?: {
        username?: string[];
        email?: string[];
        age?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;

export type SessionPayload = {
  userId: string | number;
  expiresAt: Date;
};

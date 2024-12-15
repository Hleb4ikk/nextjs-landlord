'use server'

import { SignupFormSchema } from "./definitions"
import { FormState } from "react-hook-form"

export async function signup(state: FormState, formData: FormData){

    const vaidateResult = SignupFormSchema.safeParse({
        username: formData.get('username'),
        email: formData.get('email'),
        password: formData.get('password')
    })
    if(!vaidateResult.success){

        return {
            errors: vaidateResult.error.flatten().fieldErrors,
        }

    }

}
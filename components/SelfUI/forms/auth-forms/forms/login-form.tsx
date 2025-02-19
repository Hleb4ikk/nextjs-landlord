'use client';

import { login } from '@/auth/actions';
import { useFormState } from 'react-dom';
import { SubmitButton } from '../../../buttons/submit-button';
import { Button } from '@/components/ui/button';
import FormField from './form-field/form-field';
export function LoginForm({ setHasAccount }: { setHasAccount: (hasAccount: boolean) => void }) {
  const [state, action] = useFormState(login, undefined);
  const errors = state?.errors;
  return (
    <>
      <h1 className="mb-4 text-2xl font-bold">Sign In</h1>
      <form action={action}>
        <div className="flex flex-col gap-2">
          <FormField
            errors={errors?.email}
            title="Email"
            htmlFor="email"
            id="email"
            name="email"
            placeholder="john@example.com"
          />
          <FormField
            errors={errors?.password}
            title="Password"
            htmlFor="password"
            id="password"
            name="password"
            type="password"
          />
          {state?.message && <p className="text-sm text-red-500">{state.message}</p>}
          <div className="flex justify-center">
            <SubmitButton>Sign In</SubmitButton>
          </div>
        </div>
      </form>
      <div className="mt-4 text-[#585858]">
        <span className="mr-1"> If you don&apos;t have an account yet, please</span>
        <Button
          variant={'outline'}
          className="text-md inline border-none bg-opacity-0 p-0 text-[#888888] underline decoration-solid hover:bg-opacity-0 hover:text-[#888888]/90 active:text-[#888888]/80"
          onClick={() => setHasAccount(false)}
        >
          sign up
        </Button>
      </div>
    </>
  );
}

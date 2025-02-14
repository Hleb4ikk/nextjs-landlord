'use client';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { signup } from '@/auth/actions';
import { useFormState } from 'react-dom';
import { SubmitButton } from '../../buttons/submit-button';
import { Button } from '@/components/ui/button';
export function RegistrationForm({ setHasAccount }: { setHasAccount: (hasAccount: boolean) => void }) {
  const [state, action] = useFormState(signup, undefined);

  return (
    <>
      <h1 className="mb-4 text-2xl font-bold">Sign Up</h1>
      <form action={action}>
        <div className="flex flex-col gap-2">
          <div>
            <Label htmlFor="username">Username</Label>
            <Input
              className="border-2 border-[#363636] bg-[#1e1e1e] text-white placeholder:text-slate-600 focus-visible:ring-0 focus-visible:ring-offset-0"
              id="username"
              name="username"
              placeholder="John Doe"
            />
          </div>
          {state?.errors?.username && <p className="text-sm text-red-500">{state.errors.username}</p>}
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              className="border-2 border-[#363636] bg-[#1e1e1e] text-white placeholder:text-slate-600 focus-visible:ring-0 focus-visible:ring-offset-0"
              id="email"
              name="email"
              placeholder="john@example.com"
            />
          </div>
          {state?.errors?.email && <p className="text-sm text-red-500">{state.errors.email}</p>}
          <div>
            <Label htmlFor="age">Age</Label>
            <Input
              className="border-2 border-[#363636] bg-[#1e1e1e] text-white placeholder:text-slate-600 focus-visible:ring-0 focus-visible:ring-offset-0"
              id="age"
              name="age"
              placeholder="18"
            />
          </div>
          {state?.errors?.age && <p className="text-sm text-red-500">{state.errors.age}</p>}
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              className="border-2 border-[#363636] bg-[#1e1e1e] text-white placeholder:text-slate-600 focus-visible:ring-0 focus-visible:ring-offset-0"
              id="password"
              name="password"
              type="password"
            />
          </div>
          {state?.errors?.password && (
            <div className="text-sm text-red-500">
              <p>Password must:</p>
              <ul>
                {state.errors.password.map((error) => (
                  <li key={error}>- {error}</li>
                ))}
              </ul>
            </div>
          )}
          {state?.message && <p className="text-sm text-red-500">{state.message}</p>}
          <div className="flex justify-center">
            <SubmitButton>Sign Up</SubmitButton>
          </div>
        </div>
      </form>
      <div className="mt-4 text-[#585858]">
        If you already have an account, please{' '}
        <Button
          variant={'outline'}
          className="text-md inline border-none bg-opacity-0 p-0 text-[#888888] underline decoration-solid hover:bg-opacity-0 hover:text-[#888888]/90 active:text-[#888888]/80"
          onClick={() => setHasAccount(true)}
        >
          sign in
        </Button>
      </div>
    </>
  );
}

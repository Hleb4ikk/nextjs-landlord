'use client';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { signup } from '@/auth/actions';
import { useFormState } from 'react-dom';
import { SubmitButton } from '../buttons/button';
import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export function RegistrationForm() {
  const [state, action] = useFormState(signup, undefined);
  const router = useRouter();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="relative w-[25em] flex-col gap-2 rounded-xl border-2 border-[#383838] bg-[#222222]">
        <Link href={'/catalog'} className="absolute right-2 top-2">
          <X color="grey" size={20} />
        </Link>
        <div className="p-6">
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
            <Link
              className="text-[#888888] underline decoration-solid hover:text-[#888888]/90 active:text-[#888888]/80"
              href={'/login'}
            >
              sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

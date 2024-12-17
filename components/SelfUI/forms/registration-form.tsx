"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { signup } from "@/auth/actions";
import { useFormState} from "react-dom";
import { FormButton } from "../button/button";

export function RegistrationForm() {
  const [state, action] = useFormState(signup, undefined);
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="flex w-[25em] bg-[#222222] rounded-xl border-[#383838] border-2 flex-col gap-2">
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
          <form action={action}>
            <div className="flex flex-col gap-2">
              <div>
                <Label htmlFor="username">Username</Label>
                <Input
                  className="text-white bg-[#1e1e1e] border-[#363636] border-2 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-slate-600"
                  id="username"
                  name="username"
                  placeholder="John Doe"
                />
              </div>
              {state?.errors?.username && (
                <p className="text-sm text-red-500">{state.errors.username}</p>
              )}
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  className="text-white bg-[#1e1e1e] border-[#363636] border-2 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-slate-600"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                />
              </div>
              {state?.errors?.email && (
                <p className="text-sm text-red-500">{state.errors.email}</p>
              )}
              <div>
                <Label htmlFor="age">Age</Label>
                <Input
                  className="text-white bg-[#1e1e1e] border-[#363636] border-2 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-slate-600"
                  id="age"
                  name="age"
                  placeholder="18"
                />
              </div>
              {state?.errors?.age && (
                <p className="text-sm text-red-500">{state.errors.age}</p>
              )}
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  className="text-white bg-[#1e1e1e] border-[#363636] border-2 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-slate-600"
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
              {state?.message && (
                <p className="text-sm text-red-500">{state.message}</p>
              )}
              <div className="flex justify-center">
                <FormButton/>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}



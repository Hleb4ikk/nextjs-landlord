"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { login } from "@/auth/actions";
import { useFormState } from "react-dom";
import { FormButton } from "../button/button";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import Link from "next/link";

export function LoginForm() {
  const [state, action] = useFormState(login, undefined);
  const router = useRouter();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="relative w-[25em] bg-[#222222] rounded-xl border-[#383838] border-2 flex-col gap-2">
        <button
          onClick={() => router.push("/catalog")}
          className="absolute right-2 top-2"
        >
          <X color="grey" size={20} />
        </button>
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">Sign In</h1>
          <form action={action}>
            <div className="flex flex-col gap-2">
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
                <FormButton buttonText="Sign In" />
              </div>
            </div>
          </form>
          <div className="mt-4 text-[#585858]">If you don&apos;t have an account yet, please <Link className="underline decoration-solid text-[#888888] hover:text-[#888888]/90 active:text-[#888888]/80" href={"/registration"}>sign up</Link></div>
        </div>
      </div>
    </div>
  );
}

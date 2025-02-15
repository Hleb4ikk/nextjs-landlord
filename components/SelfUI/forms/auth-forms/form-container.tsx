'use client';

import { useState } from 'react';

import { X } from 'lucide-react';
import { LoginForm } from './forms/login-form';
import {
  AlertDialog,
  //   AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  //   AlertDialogDescription,
  //   AlertDialogFooter,
  //   AlertDialogHeader,
  //   AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { RegistrationForm } from './forms/registration-form';

export const FormContainer = () => {
  const [hasAccount, setHasAccount] = useState(true);

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="bg-opacity-0" variant={'outline'}>
          Sign In
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent
        onCloseAutoFocus={() => setHasAccount(true)}
        className="w-[25em] flex-col gap-2 rounded-xl border-2 border-[#383838] bg-[#222222] p-0"
      >
        <AlertDialogCancel className="absolute right-2 top-2 mr-4 border-none bg-opacity-0 p-0 hover:bg-opacity-0">
          <X color="grey" size={20} />
        </AlertDialogCancel>
        <div className="p-6">
          {hasAccount && <LoginForm setHasAccount={setHasAccount} />}
          {!hasAccount && <RegistrationForm setHasAccount={setHasAccount} />}
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

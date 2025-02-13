'use client';

import Link from 'next/link';
import React from 'react';
import { Button } from '@/components/ui/button';
import { useFormStatus } from 'react-dom';
interface ButtonProps {
  className?: string;
  url: string;
  children?: React.ReactNode;
}
const HomePageButton = ({ className, url, children }: ButtonProps) => {
  return (
    <Link href={url}>
      <div>
        <button
          className={
            'relative inline-flex items-center justify-center overflow-hidden p-0.5 ' +
            'group rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 font-medium text-white' +
            className
          }
        >
          <span className="relative rounded-md bg-gray-900 px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 group-active:bg-opacity-100">
            {children}
          </span>
        </button>
      </div>
    </Link>
  );
};

const LinkButton = ({ className, url, children }: ButtonProps) => {
  return (
    <Button asChild className={className}>
      <Link href={url}>{children}</Link>
    </Button>
  );
};
const SubmitButton = ({ children }: { children: React.ReactNode }) => {
  const { pending } = useFormStatus();

  return (
    <Button
      aria-disabled={pending}
      type="submit"
      className="mt-2 w-[10em] w-full border-[2px] border-[#393939] bg-[#393939] hover:bg-[#393939]/20 active:bg-[#303030]/0"
    >
      {pending ? 'Submitting...' : children}
    </Button>
  );
};
export { HomePageButton, LinkButton, SubmitButton };

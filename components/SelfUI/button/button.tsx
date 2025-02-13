'use client'

import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";
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
            "relative inline-flex items-center justify-center p-0.5 overflow-hidden " +
            "font-medium text-white rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 " +
            className
          }
        >
          <span
            className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 
      rounded-md group-hover:bg-opacity-0 group-active:bg-opacity-100"
          >
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
        <Link href={url}>
          {children}
        </Link>
      </Button>
  );
};
const FormButton = ({buttonText} : {buttonText: string}) => {
  
  const { pending } = useFormStatus();

  return (
    <Button
      aria-disabled={pending}
      type="submit"
      className= "mt-2 w-full w-[10em] bg-[#393939] border-[#393939] border-[2px] hover:bg-[#393939]/20 active:bg-[#303030]/0"
    >
      {pending ? "Submitting..." : buttonText}
    </Button>
  );
}
export { HomePageButton, LinkButton, FormButton };

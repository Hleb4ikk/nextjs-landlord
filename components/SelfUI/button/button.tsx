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
    <div>
      <Link href={url}>
        <button
          className={
            "relative inline-flex items-center justify-center p-0.5 overflow-hidden " +
            "font-medium text-white rounded-lg group bg-[#363636] " +
            className
          }
        >
          <span
            className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-[#1e1e1e] 
      rounded-md group-hover:bg-opacity-0 group-active:bg-opacity-100"
          >
            {children}
          </span>
        </button>
      </Link>
    </div>
  );
};
const FormButton = () =>{
  
  const { pending } = useFormStatus();

  return (
    <Button
      aria-disabled={pending}
      type="submit"
      className= "mt-2 w-full w-[10em] bg-[#393939] border-[#393939] border-[2px] hover:bg-[#393939]/20 active:bg-[#303030]/0"
    >
      {pending ? "Submitting..." : "Sign Up"}
    </Button>
  );
}
export { HomePageButton, LinkButton, FormButton };

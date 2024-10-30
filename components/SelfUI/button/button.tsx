import Link from "next/link";
import React from "react";

interface ButtonProps {
  className?: string;
  url: string;
  children?: React.ReactNode;
}

export default function HomePageButton({ className, url, children }: ButtonProps) {
  return (
    <Link href={url}>
      <div className={className}>
        <button
          className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden 
    font-medium text-white rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 
    "
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
}

import Link from "next/link";
import React from "react";

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
export { HomePageButton, LinkButton };

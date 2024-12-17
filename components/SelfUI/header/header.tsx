"use client";
import Link from "next/link";
import { DarkThemeTextLogo } from "../logo/landlord-logo";
import { LinkButton } from "../button/button";
import UserMenu from "../user-menu/user-menu";
import GeolocationComponent from "../geolocation/geolocation";
import { Bell } from "lucide-react";
import Search from "../search";
import { Suspense } from "react";

export default function Header({
  searchParams,
  user,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
  user?;
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  console.log(query + currentPage);
  console.log("Header: " + user?.username);
  return (
    <>
      <header className="w-full sticky items-center pl-3 pr-3 md:pl-10 md:pr-10 pt-3">
        <div className="flex w-full">
          <div className="flex items-center gap-10 justify-start w-[50%]">
            <div className="flex items-center">
              <Link href="/catalog">
                <DarkThemeTextLogo className="text-xl" />
              </Link>
            </div>
            <div className="hidden md:block">
              <Suspense>
                <Search
                  placeholder="Search posts..."
                  className="text-white bg-[#1e1e1e] border-[#363636] border-2 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-2 placeholder:text-slate-600"
                />
              </Suspense>
            </div>
          </div>
          <div className="flex items-center gap-7 justify-end w-[50%]">
            <div>
              <GeolocationComponent />
            </div>
            {user && (
              <div className="hidden md:block">
                <LinkButton url="/create">
                  <span className="block min-[832px]:hidden">New</span>
                  <span className="hidden min-[832px]:block">New post</span>
                </LinkButton>
              </div>
            )}
            {user && (
              <div className="hidden md:block">
                <UserMenu user={user} />
              </div>
            )}
            {!user && (
              <LinkButton url="/registration">
                <span>Sign Up</span>
              </LinkButton>
            )}
            <button className="block md:hidden">
              <Bell size={28} />
            </button>
          </div>
        </div>
        <div className="block md:hidden pt-1 pb-1">
          <Suspense>
            <Search
              placeholder="Search posts..."
              className="text-white bg-[#1e1e1e] border-[#363636] border-2 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-slate-600"
            />
          </Suspense>
        </div>
      </header>
    </>
  );
}

'use client';

import Link from 'next/link';
import { DarkThemeTextLogo } from '../logo/landlord-logo';
import { LinkButton } from '../buttons/link-button';
import UserMenu from '../user-menu/user-menu';
import GeolocationComponent from '../geolocation/geolocation';
import { Bell } from 'lucide-react';
import Search from '../search';
import { Suspense } from 'react';
import { useUser } from '@/contexts/user/user-context';
import { FormContainer } from '../forms/auth-forms/form-container';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
export default function Header({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  console.log(query + currentPage);

  const path = usePathname();

  const user = useUser();

  return (
    <>
      <header className="sticky w-full items-center pl-3 pr-3 pt-3 md:pl-10 md:pr-10">
        <div className="flex w-full">
          <div className="flex w-[50%] items-center justify-start gap-10">
            <div className="flex items-center">
              <Link href="/catalog">
                <DarkThemeTextLogo className="text-xl" />
              </Link>
            </div>
            <div className="hidden md:block">
              <Suspense>
                <Search
                  placeholder="Search posts..."
                  className="border-2 border-[#363636] bg-[#1e1e1e] text-white placeholder:text-slate-600 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-2"
                />
              </Suspense>
            </div>
          </div>
          <div className="flex w-[50%] items-center justify-end gap-7">
            <div>
              <GeolocationComponent />
            </div>
            {user && (
              <div className="hidden md:block">
                <LinkButton href="/create">
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
              <FormContainer
                childrenTrigger={
                  <Button
                    className="bg-opacity-0"
                    variant={'outline'}
                  >
                    Sign In
                  </Button>
                }
              ></FormContainer>
            )}
            <button className="block md:hidden">
              <Bell size={28} />
              {/* This button will show new notifications about advertisements */}
            </button>
          </div>
        </div>
        {!(path === '/create') && (
          <div className="block pb-1 pt-1 md:hidden">
            <Suspense>
              <Search
                placeholder="Search posts..."
                className="border-2 border-[#363636] bg-[#1e1e1e] text-white placeholder:text-slate-600 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </Suspense>
          </div>
        )}
      </header>
    </>
  );
}

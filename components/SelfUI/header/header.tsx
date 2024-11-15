import Link from "next/link";
import { DarkThemeTextLogo } from "../logo/landlord-logo";
import { NewPostButton } from "../button/button";
import UserMenu from "../user-menu/user-menu";
import GeolocationComponent from "../geolocation/geolocation";
import { Bell } from "lucide-react";
import Search from "../search";

export default function Header(
  {
    searchParams,
    width,
  }: {
    searchParams?: {
      query?: string;
      page?: string;
    };
    width : number;
  },
) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

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
            {!(width < 768) && (
              <div className="">
                <Search placeholder="Search posts..." className="text-white bg-[#1e1e1e] border-[#363636] border-2 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-2 placeholder:text-slate-600" />
              </div>
            )}
          </div>
          <div className="flex items-center gap-7 justify-end w-[50%]">
            <div>
              <GeolocationComponent />
            </div>
            {!(width < 768) && (
              <NewPostButton url="/create">
                {width < 832 && <span>New</span>}
                {!(width < 832) && <span>New post</span>}
              </NewPostButton>
            )}
            {!(width < 768) && <UserMenu />}
            {width < 768 && (
              <button className="">
                <Bell size={28} />
              </button>
            )}
          </div>
        </div>
        {width < 768 && (
          <div className="pt-1 pb-1">
            <Search placeholder="Search posts..." className="text-white bg-[#1e1e1e] border-[#363636] border-2 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-slate-600" />
          </div>
        )}
      </header>
    </>
  );
}

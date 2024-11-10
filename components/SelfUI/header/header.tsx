import Link from "next/link";
import { DarkThemeTextLogo } from "../logo/landlord-logo";
import { NewPostButton } from "../button/button";
import UserMenu from "../user-menu/user-menu";
import GeolocationComponent from "../geolocation/geolocation";
import { Bell } from "lucide-react";

interface HeaderProps {
  isMobile?: boolean;
}

export default function Header({ isMobile }: HeaderProps) {
  return (
    <>
      <header className="w-full sticky items-center pl-3 pr-3 md:pl-10 md:pr-10 pt-3">
        <div className="flex w-full">
          <div className="flex items-center gap-10 justify-start w-[50%]">
            <div className="flex items-center">
              <Link href="/">
                <DarkThemeTextLogo className="text-xl" />
              </Link>
            </div>
            {!isMobile && <div className="">Search</div>}
          </div>
          <div className="flex items-center gap-7 justify-end w-[50%]">
            <div>
              <GeolocationComponent />
            </div>
            {!isMobile && <NewPostButton url="/create">New Post</NewPostButton>}
            {!isMobile && <UserMenu />}
            {isMobile && (
              <button className="">
                <Bell size={28} />
              </button>
            )}
          </div>
        </div>
        {isMobile && <div className="">Search</div>}
      </header>
    </>
  );
}

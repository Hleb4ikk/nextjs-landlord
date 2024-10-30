import Link from "next/link";
import { DarkThemeTextLogo } from "../logo/landlord-logo";
import {
  NavigationMenu,
  // NavigationMenuContent,
  // NavigationMenuIndicator,
  NavigationMenuItem,
  // NavigationMenuLink,
  NavigationMenuList,
  // NavigationMenuTrigger,
  // NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  return (
    <>
      <header className="grid grid-rows-2 items-center pl-10 pr-10 pt-3 md:pt-2 md:flex">
        <div className="flex items-center gap-16 justify-center order-2 md:justify-start md:w-[50%] md:order-1">
          <div className="hidden md:flex md:items-center">
            <Link href="/">
              <DarkThemeTextLogo className="text-xl" />
            </Link>
          </div>
          <div className="">Search</div>
        </div>
        <div className="flex items-center gap-10 justify-center order-1 md:justify-end md:w-[50%] md:order-2">
          <div className="">
            <NavigationMenu>
              <NavigationMenuList className="gap-10">
                <Link href="/">
                  <NavigationMenuItem>Item One</NavigationMenuItem>
                </Link>
                <Link href="/">
                  <NavigationMenuItem>Item Two</NavigationMenuItem>
                </Link>
                <Link href="/">
                  <NavigationMenuItem>Item Three</NavigationMenuItem>
                </Link>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="">
            <DropdownMenu>
              <DropdownMenuTrigger className="">
                <Avatar>
                  <AvatarImage src=""/>
                  <AvatarFallback>sn</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
    </>
  );
}

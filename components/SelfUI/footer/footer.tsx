import Link from "next/link";

import {
  House,
  Star,
  CirclePlus,
  MessageCircle,
  User
} from "lucide-react";

const MobileBottomMenu = () => {
  return( 
  <footer className="fixed w-[100vw] pt-3 pb-3 flex justify-center gap-[14vw] bottom-0 border-t border-white">

    <Link href="/catalog">
      <House size={28}/>
    </Link>
    {/* <Link href="/favourites"> */}
      <Star size={28}/>
    {/* </Link> */}
    {/* <Link href="/create"> */}
      <CirclePlus size={28}/>
    {/* </Link> */}
    <Link href="/messages">
      <MessageCircle size={28}/>
    </Link>
    <Link href="/profile">
      <User size={28}/>
    </Link>

  </footer>);
};

interface FooterProps {
  isMobile?: boolean;
}

export default function Footer({ isMobile }: FooterProps) {
  return <>
    {isMobile && <MobileBottomMenu />}
  </>;
}
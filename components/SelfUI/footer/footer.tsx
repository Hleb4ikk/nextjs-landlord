import Link from 'next/link';

import { House, Star, CirclePlus, MessageCircle, User } from 'lucide-react';

const MobileBottomMenu = () => {
  return (
    <footer className="fixed bottom-0 flex w-[100vw] justify-center gap-[14vw] border-t border-white pb-3 pt-3">
      {/* links for mobileBottomMenu */}
      <Link href="/catalog">
        <House size={28} />
      </Link>
      {/* <Link href="/favourites"> */}
      <Star size={28} />
      {/* </Link> */}
      <Link href="/create">
        <CirclePlus size={28} />
      </Link>
      <Link href="/messages">
        <MessageCircle size={28} />
      </Link>
      <Link href="/profile">
        <User size={28} />
      </Link>
    </footer>
  );
};

export default function Footer() {
  return (
    <>
      <div className="block md:hidden">
        <MobileBottomMenu />
      </div>
    </>
  );
}

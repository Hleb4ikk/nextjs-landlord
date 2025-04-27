'use client';

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import AvatarImg from '../avatar/avatar-img';
import { useState } from 'react';
import { Separator } from '@/components/ui/separator';
import { LogOut, Settings, User, MessageCircle, Bell, Star } from 'lucide-react';
import Link from 'next/link';
import { UserDefinition } from '@/auth/definitions';
import { logout } from '@/auth/actions';
import { useRouter } from 'next/navigation';

// commented code in this file will be used in future

export default function UserMenu({ user }: { user: UserDefinition }) {
  const [open, setOpen] = useState(false);

  const router = useRouter();
  return (
    <Sheet
      open={open}
      onOpenChange={setOpen}
    >
      <SheetTrigger>
        <AvatarImg
          avatarPath={user.avatarPath}
          username={user?.username}
        />
      </SheetTrigger>
      <SheetContent className="border-none bg-[#222222]">
        <SheetHeader>
          <SheetTitle className="grid grid-cols-2 items-center pt-4 text-white">
            <h1>{user.username}</h1>
            <div className="pr-3">
              <AvatarImg
                username={user.username}
                avatarPath={user.avatarPath}
                className="justify-self-end"
              />
            </div>
          </SheetTitle>
          <Separator />
          <Link
            onClick={() => setOpen(false)}
            href={'/' + user?.username}
          >
            <SheetTitle className="flex items-center gap-2 rounded-md border-white pb-1 pl-2 pt-1 font-normal text-white hover:bg-[#363636]">
              <User />
              <span>Profile</span>
            </SheetTitle>
          </Link>
          <Link
            onClick={() => setOpen(false)}
            href="/messages"
          >
            <SheetTitle className="flex items-center gap-2 rounded-md border-white pb-1 pl-2 pt-1 font-normal text-white hover:bg-[#363636]">
              <MessageCircle />
              <span>Messages</span>
            </SheetTitle>
          </Link>
          {/* <Link href="/profile"> */}
          <SheetTitle className="flex items-center gap-2 rounded-md border-white pb-1 pl-2 pt-1 font-normal text-white hover:bg-[#363636]">
            <Bell />
            <span>Notifications</span>
          </SheetTitle>
          {/* </Link> */}
          {/* <Link onClick={() => setOpen(false)} href="/favourites"> */}
          <SheetTitle className="flex items-center gap-2 rounded-md border-white pb-1 pl-2 pt-1 font-normal text-white hover:bg-[#363636]">
            <Star />
            <span>Favourites</span>
          </SheetTitle>
          {/* </Link> */}
          <Link
            onClick={() => setOpen(false)}
            href="/settings"
          >
            <SheetTitle className="flex items-center gap-2 rounded-md border-white pb-1 pl-2 pt-1 font-normal text-white hover:bg-[#363636]">
              <Settings />
              <span>Settings</span>
            </SheetTitle>
          </Link>
          <Separator />
          {/* <Link href="/profile"> */}
          <button
            onClick={() => {
              logout();
              router.refresh();
            }}
          >
            <SheetTitle className="flex items-center gap-2 rounded-md border-white pb-1 pl-2 pt-1 text-white hover:bg-[#363636]">
              <LogOut />
              Log Out
            </SheetTitle>
          </button>
          {/* </Link> */}
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

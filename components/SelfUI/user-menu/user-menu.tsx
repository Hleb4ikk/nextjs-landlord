'use client'

import {
  Sheet,
  SheetContent,
  //SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
  MessageCircle,
  Bell,
} from "lucide-react";
import Link from "next/link";

export default function UserMenu() {

 const [open, setOpen] = useState(false);
    

  return (
    <div className="">
      <Sheet open = {open} onOpenChange={setOpen}>
        <SheetTrigger>
          <Avatar>
            <AvatarImage src="" />
            <AvatarFallback>sn</AvatarFallback>
          </Avatar>
        </SheetTrigger>
        <SheetContent className="bg-[#222222] border-none">
          <SheetHeader>
            <SheetTitle className="grid grid-cols-2 pt-4 items-center text-white">
              <h1 justify-self-start>My Account Name</h1>
              <div className="pr-3">
                <Avatar className="justify-self-end">
                  <AvatarImage src="" />
                  <AvatarFallback>sn</AvatarFallback>
                </Avatar>
              </div>
            </SheetTitle>
            <Separator />
            <Link onClick={() => setOpen(false)} href="/profile">
              <SheetTitle className="flex items-center gap-2 text-white pl-2 pt-1 pb-1 rounded-md border-white hover:bg-[#363636]">
                <User />
                <span>Profile</span>
              </SheetTitle>
            </Link>
            <Link onClick={() => setOpen(false)} href="/messages">
              <SheetTitle className="flex items-center gap-2 text-white pl-2 pt-1 pb-1 rounded-md border-white hover:bg-[#363636]">
                <MessageCircle />
                <span>Messages</span>
              </SheetTitle>
            </Link>
            {/* <Link href="/profile"> */}
              <SheetTitle className="flex items-center gap-2 text-white pl-2 pt-1 pb-1 rounded-md border-white hover:bg-[#363636]">
                <Bell />
                <span>Notifications</span>
              </SheetTitle>
            {/* </Link> */}
            <Link onClick={() => setOpen(false)} href="/settings">
              <SheetTitle className="flex items-center gap-2 text-white pl-2 pt-1 pb-1 rounded-md border-white hover:bg-[#363636]">
                <Settings />
                <span>Settings</span>
              </SheetTitle>
            </Link>
            <Separator />
            {/* <Link href="/profile"> */}
              <SheetTitle className="flex items-center gap-2 text-white pl-2 pt-1 pb-1 rounded-md border-white hover:bg-[#363636]">
                <LogOut />
                <span>Sign out</span>
              </SheetTitle>
            {/* </Link> */}
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}

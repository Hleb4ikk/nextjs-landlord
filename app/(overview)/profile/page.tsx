"use client";

import { useUser } from "@/contexts/user/user-context";
import AvatarImg from "@/components/SelfUI/avatar/avatar-img";
import { LinkButton } from "@/components/SelfUI/button/button";
export default function Profile() {
  const user = useUser();
  return (
    <div className="grid auto-cols-min grid-cols-3 gap-4">
      <div className="flex flex-col gap-2">
        <AvatarImg className="size-80 text-[100px] " />
        <h1 className="mt-2 text-3xl font-semibold">{user?.username}</h1>
        <div className="flex gap-2">
          <p>1 follower</p> <p>1 following</p>
        </div>
        <LinkButton url="/catalog">Edit Profile</LinkButton>
      </div>
      <div className="col-span-2">
        <h1 className="font-bold text-3xl">Your Advertisements:</h1>
      </div>
    </div>
  );
}

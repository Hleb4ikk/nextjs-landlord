"use client";

import { useUser } from "@/contexts/user/user-context";
import AvatarImg from "@/components/SelfUI/avatar/avatar-img";
import { LinkButton } from "@/components/SelfUI/button/button";

export default function Profile() {
  const user = useUser();
  return (
    <div className="flex flex-col gap-6 md:grid md:grid-cols-3 md:gap-4">
      <div className="grid grid-cols-3 gap-16 justify-items-start md:flex md:flex-col md:gap-2">
        <div>
          <AvatarImg className="size-32 text-[40px] md:size-40 md:text-[50px] lg:size-80 lg:text-[100px] " />
        </div>
        <div className="flex flex-col gap-2 col-span-2 ">
          <h1 className="text-3xl font-semibold">{user?.username}</h1>

          <div className="flex gap-2">
            <p>0 advertisements</p> <p>1 follower</p> <p>1 following</p>
          </div>
          <LinkButton url="/catalog">Edit Profile</LinkButton>
        </div>
      </div>
      <div className="md:col-span-2">
        <h1 className="font-bold text-3xl">Your Advertisements:</h1>
      </div>
    </div>
  );
}

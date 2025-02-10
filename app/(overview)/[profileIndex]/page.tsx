"use client";

import { useUser } from "@/contexts/user/user-context";
import AvatarImg from "@/components/SelfUI/avatar/avatar-img";
import { LinkButton } from "@/components/SelfUI/button/button";
import { notFound } from "next/navigation";

export default function Profile({ params }: { params: { profileIndex: string } }) {
  const user = useUser();

  const isAccountOwner = user?.username === params?.profileIndex;

  //notFound();
  return (
    <div className="flex flex-col gap-6 md:grid md:grid-cols-5 md:gap-5">
      <div className="grid grid-cols-3 gap-2 md:flex md:flex-col md:gap-2 md:col-span-2">
        <AvatarImg className="w-[30vw] h-[30vw] max-h-40 max-w-40 text-[40px] md:size-40 md:text-[50px] lg:max-h-80 lg:max-w-80 lg:size-80 lg:text-[100px]" />
        <div className="flex flex-col gap-2 col-span-2">
          <h1 className="text-lg md:text-3xl md:font-semibold">
            {user?.username}
          </h1>
          <div className="flex gap-2 max-w-full">
            <p>0 advertisements</p> <p>1 follower</p> <p>1 following</p>
          </div>
          {isAccountOwner && (
            <LinkButton url="/catalog">Edit Profile</LinkButton>
          )}
        </div>
      </div>
      <div className="md:col-span-3">
        <h1 className="font-bold text-3xl">Your Advertisements:</h1>
      </div>
    </div>
  );
}

'use client';

import { UserDefinition } from '@/auth/definitions';
import AvatarImg from '../avatar/avatar-img';
import { LinkButton } from '../button/button';
import { ActionButton } from '../button/button';
import { LogOut } from 'lucide-react';
import { logout } from '@/auth/actions';

const ProfileCard = ({ isAccountOwner, profile }: { isAccountOwner: boolean; profile: UserDefinition }) => {
  return (
    <div className="flex flex-col gap-6 md:grid md:grid-cols-5 md:gap-5">
      <div className="grid grid-cols-3 gap-2 md:col-span-2 md:flex md:flex-col md:gap-2">
        <AvatarImg
          username={profile.username}
          className="h-[30vw] max-h-40 w-[30vw] max-w-40 text-[40px] md:size-40 md:text-[50px] lg:size-80 lg:max-h-80 lg:max-w-80 lg:text-[100px]"
        />
        <div className="col-span-2 flex flex-col gap-2">
          <h1 className="text-lg md:text-3xl md:font-semibold">{profile?.username}</h1>
          <div className="flex max-w-full gap-2">
            <p>0 advertisements</p> <p>1 follower</p> <p>1 following</p>
          </div>
          <div>On landlord from {profile?.registeredAt?.toLocaleDateString()}</div>
          {isAccountOwner && (
            <>
              <div className="flex items-center gap-2">
                <LinkButton url="/catalog">Edit Profile</LinkButton>
                <ActionButton className="md:hidden" onClick={() => logout()}>
                  <LogOut />
                </ActionButton>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="md:col-span-3">
        <h1 className="text-3xl font-bold">Your Advertisements:</h1>
      </div>
    </div>
  );
};

export default ProfileCard;

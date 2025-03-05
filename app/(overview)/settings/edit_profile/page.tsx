'use client';

import ContentCard from '@/components/SelfUI/card/settings-card';
import AvatarImg from '@/components/SelfUI/avatar/avatar-img';
import { useUser } from '@/contexts/user/user-context';
import { FileInput } from '@/components/SelfUI/file-input';
import { Input } from '@/components/ui/input';

export default function EditProfile() {
  const user = useUser();

  return (
    <div className="flex flex-col gap-4">
      <ContentCard
        className=""
        title="Profile data"
      >
        {user && (
          <div className="flex gap-20">
            <div className="flex flex-col items-center gap-3">
              <AvatarImg
                username={user?.username}
                avatarPath={user?.avatarKey}
                className="size-32 shadow-md"
              />
              <FileInput />
            </div>
            <div className="flex flex-col gap-3">
              <div className="">
                <h2>Username*</h2>
                <Input
                  className="w-[300px] border-2 border-[#808080] bg-[#DCDCDC] text-white placeholder:text-slate-600 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-2"
                  title="Username"
                />
              </div>
              <div className="">
                <h2>Username*</h2>
                <Input
                  className="w-[300px] border-2 border-[#808080] bg-[#DCDCDC] text-white placeholder:text-slate-600 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-2"
                  title="Username"
                />
              </div>
            </div>
          </div>
        )}

        {!user && <span>error</span>}
      </ContentCard>
      <ContentCard title="Theme">content</ContentCard>
      <ContentCard title="Privacy">content</ContentCard>
      <ContentCard title="Log out">content</ContentCard>
    </div>
  );
}

'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const AvatarImg = ({
  className,
  username,
  avatarPath,
}: {
  className?: string;
  username: string;
  avatarPath: string | null;
}) => {
  return (
    <Avatar className={className}>
      <AvatarImage src={avatarPath !== null ? avatarPath : undefined} />
      <AvatarFallback className="bg-blue-100 antialiased">
        {username[0] + '' + username[username.length - 1]}
      </AvatarFallback>
    </Avatar>
  );
};

export default AvatarImg;

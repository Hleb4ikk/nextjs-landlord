'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const AvatarImg = ({ className, username }: { className?: string; username: string }) => {
  return (
    <Avatar className={className}>
      <AvatarImage src="" />
      <AvatarFallback className="bg-blue-100 antialiased">
        {username[0] + '' + username[username.length - 1]}
      </AvatarFallback>
    </Avatar>
  );
};

export default AvatarImg;

'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

const AvatarImg = ({
  className,
  urlPath,
  username,
}: {
  className?: string;
  urlPath?: string | undefined;
  username: string;
}) => {
  return (
    <Avatar className={className}>
      <AvatarImage src={urlPath} />
      <AvatarFallback className="bg-blue-100 antialiased">
        {username[0] + '' + username[username.length - 1]}
      </AvatarFallback>
    </Avatar>
  );
};

export default AvatarImg;

"use client"

import { useUser } from "@/contexts/user/user-context";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AvatarImg = ({className} : {className? : string}) => {

  const user = useUser()

  return (
    <Avatar className={className}>
      <AvatarImage src=""/>
      <AvatarFallback className="bg-blue-100 antialiased">
        {user?.username[0] + "" + user?.username[user?.username.length - 1]}
      </AvatarFallback>
    </Avatar>
  );
};

export default AvatarImg;

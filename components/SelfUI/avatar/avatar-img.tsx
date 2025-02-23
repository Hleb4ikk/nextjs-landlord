'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const AvatarImg = ({ className, username }: { className?: string; username: string }) => {
  // const [avatarPath, setAvatarPath] = useState('');

  // const { profileIndex } = useParams();
  // const param = params?.profileIndex;
  // useEffect(() => {
  //   async function getUserData() {
  //     await fetchGeneralUserDataByUsername(param);
  //   }
  // }, []);
  return (
    <Avatar className={className}>
      <AvatarImage src={'avatarPath'} />
      <AvatarFallback className="bg-blue-100 antialiased">
        {username[0] + '' + username[username.length - 1]}
      </AvatarFallback>
    </Avatar>
  );
};

export default AvatarImg;

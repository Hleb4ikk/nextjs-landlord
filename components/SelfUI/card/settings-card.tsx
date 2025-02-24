import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import AvatarImg from '../avatar/avatar-img';
import { useUser } from '@/contexts/user/user-context';

export default function SettingsCard({ children }: { children?: React.ReactNode }) {
  const user = useUser();
  if (!user) return <></>;
  if (user)
    return (
      <Card className="w-full border-none bg-[#444444] text-white shadow-md">
        <CardHeader>
          <CardTitle>Profile data</CardTitle>
        </CardHeader>
        <CardContent>
          <AvatarImg
            avatarPath={user.avatarKey}
            username={user?.username}
          />
          {children}
        </CardContent>
        <CardFooter className="flex justify-between"></CardFooter>
      </Card>
    );
  else return <></>;
}

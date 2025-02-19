import AvatarImg from '@/components/SelfUI/avatar/avatar-img';
import { LinkButton } from '@/components/SelfUI/buttons/link-button';
import { notFound } from 'next/navigation';
import { fetchGeneralUserDataByUsername } from '@/data/user';
import { verifySession } from '@/auth/stateless-session';
import { getSessionUser } from '@/data/user';
import Link from 'next/link';
import { FileInput } from '@/components/SelfUI/file-input';

export default async function Profile({ params }: { params: { profileIndex: string } }) {
  let profile = await fetchGeneralUserDataByUsername(params.profileIndex);

  if (!profile) notFound();

  const verifiedUser = await verifySession();

  const isAccountOwner = verifiedUser?.userId === profile.id;

  if (isAccountOwner) profile = await getSessionUser();

  if (!profile)
    return (
      <main className="absolute inset-0 flex items-center justify-center">
        <div className="">
          <h1 className="text-8xl font-bold">404</h1>
          <p className="text-3xl">
            Page <span className="font-semibold">{params?.profileIndex}</span> not found.
          </p>
          <Link href="/catalog">Go to catalog</Link>
        </div>
      </main>
    );

  return (
    <div className="flex flex-col gap-6 md:grid md:grid-cols-5 md:gap-5">
      <div className="grid grid-cols-3 gap-2 md:col-span-2 md:flex md:flex-col md:gap-2">
        <div className="relative">
          {/* TODO: fix avatar image updload */}
          <AvatarImg
            username={profile.username}
            className="h-[30vw] max-h-40 w-[30vw] max-w-40 text-[40px] md:size-40 md:text-[50px] lg:size-80 lg:max-h-80 lg:max-w-80 lg:text-[100px]"
          />
          <FileInput className="relative bottom-10 left-[100px] bg-opacity-0 lg:left-[210px]" />
        </div>
        <div className="col-span-2 flex flex-col gap-2">
          <h1 className="text-lg md:text-3xl md:font-semibold">{profile?.username}</h1>
          <div className="flex max-w-full gap-2">
            <p>0 advertisements</p> <p>1 follower</p> <p>1 following</p>
          </div>
          <div>On landlord from {profile?.registeredAt?.toLocaleDateString()}</div>
          {isAccountOwner && (
            <LinkButton
              href="/catalog"
              className="max-w-24"
            >
              Edit Profile
            </LinkButton>
          )}
        </div>
      </div>
      <div className="md:col-span-3">
        <h1 className="text-3xl font-bold">Your Advertisements:</h1>
      </div>
    </div>
  );
}

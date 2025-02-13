//new branch
import { DarkThemeLogo } from '@/components/SelfUI/logo/landlord-logo';
import { HomePageButton } from '@/components/SelfUI/buttons/home-page-button';
import { Video } from '../components/SelfUI/video';
import { MoveUpRight } from 'lucide-react';
export default function Home() {
  return (
    <>
      <main>
        <Video
          className="absolute -z-10 hidden h-full w-full object-cover opacity-[50%] xl:block"
          src="/Videos/HomeVideoSrc.mp4"
          width="1280"
          height="720"
          type="video/mp4"
          autoPlay
          loop
          muted
        />

        <div className="flex min-h-screen items-center justify-center md:justify-start">
          <div className="m-3 flex flex-col gap-3 rounded-lg border-2 p-3 md:place-items-start md:rounded-none md:border-0">
            <DarkThemeLogo className="size-40 md:size-60" />
            <div className="flex max-w-96 flex-col gap-3">
              <h1 className="text-3xl font-medium md:text-6xl">Welcome to LandLord!</h1>
              <p className="text-base md:text-xl">
                Looking for the perfect home to rent or buy? You’re in the right place! We offer a wide selection of
                apartments and houses to meet all your needs. Whether you’re searching for a cozy studio or a spacious
                family home, we’ll help you find the ideal property.
              </p>
              <p className="text-base md:text-xl">Start your search now and find your dream home with Land Lord!</p>
            </div>
            <HomePageButton href="/catalog" className="md:text-xl">
              To catalog{' '}
              <span>
                <MoveUpRight className="inline" size={22} />
              </span>
            </HomePageButton>
          </div>
        </div>
      </main>
    </>
  );
}

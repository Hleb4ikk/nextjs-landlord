import { DarkThemeLogo } from "@/components/SelfUI/logo/landlord-logo";
import { HomePageButton } from "../components/SelfUI/button/button";
import { Video } from "../components/SelfUI/video";

export default function Home() {
  return (
    <>
      <main>
        <Video
          className="hidden xl:block absolute w-full h-full object-cover -z-10  opacity-[50%]"
          src="/Videos/HomeVideoSrc.mp4"
          width="1280"
          height="720"
          type="video/mp4"
          autoPlay
          loop
          muted
        />

        <div className="flex justify-center items-center min-h-screen md:justify-start">
          <div className="flex flex-col m-3 p-3 gap-3 border-2 rounded-lg md:rounded-none md:border-0 md:place-items-start">
            <DarkThemeLogo className="size-40 md:size-60" />
            <div className="flex flex-col max-w-96 gap-3">
              <h1 className="md:text-6xl text-3xl font-medium">
                Welcome to LandLord!
              </h1>
              <p className="md:text-xl text-base">
                Looking for the perfect home to rent or buy? You’re in the right
                place! We offer a wide selection of apartments and houses to
                meet all your needs. Whether you’re searching for a cozy studio
                or a spacious family home, we’ll help you find the ideal
                property.
              </p>
              <p className="md:text-xl text-base">
                Start your search now and find your dream home with Land Lord!
              </p>
            </div>
            <HomePageButton url="/catalog" className="md:text-xl">
              To catalog ↗
            </HomePageButton>
          </div>
        </div>
      </main>
    </>
  );
}

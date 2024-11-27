import { HeroSvg } from "../assets/hero.svg";
import { Border } from "../components/border";

export default function Home() {
  const isSafari = () => {
    return (
      /^((?!chrome|android).)*safari/i.test(navigator.userAgent) &&
      !/CriOS/i.test(navigator.userAgent)
    );
  };

  return (
    <div className="relative h-dvh w-screen overflow-hidden">
      <Border />

      <main className="gradient-overlay absolute inset-0 overflow-y-auto">
        <div className="flex w-full flex-col items-center">
          <div className="mt-20 flex h-[60dvh] w-3/4 items-center justify-center md:w-1/2">
            <HeroSvg />
          </div>
          <div className="flex w-full items-center justify-center p-8">
            {isSafari() ? (
              <object
                type="image/svg+xml"
                data="/mountains.svg"
                className="h-full w-full"
                aria-label="Mountain illustration with cowboys roaming the landscape"
                role="img"
              />
            ) : (
              <img
                src="/mountains.svg"
                className="h-full w-full"
                alt="Mountain illustration with cowboys roaming the landscape"
              />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

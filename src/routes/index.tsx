import { HeroSvg } from "../assets/hero.svg";
import { Border } from "../components/border";

export default function Home() {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <Border />

      <main className="absolute inset-0 overflow-y-auto gradient-overlay">
        <div className="flex w-full flex-col items-center">
          <div className="flex h-[70dvh] w-3/4 items-center justify-center md:w-1/2">
            <HeroSvg />
          </div>
          <div className="flex w-full items-center justify-center p-8">
            <img
              src="/mountains.svg"
              className="h-full w-full"
              alt="Mountain illustration with cowboys roaming the landscape"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

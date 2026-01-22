import { Link } from "@tanstack/react-router";

import { HeroSvg } from "../assets/hero.svg";
import { Border } from "../components/border";
import { Svg } from "../components/svg";
import useDynamicFavicon from "../hooks/use-dynamic-favicon";

export default function Home() {
  useDynamicFavicon();

  return (
    <div className="relative h-dvh w-screen overflow-hidden">
      <Border />

      <main className="gradient-overlay no-scrollbar absolute inset-0 overflow-y-auto">
        <div className="flex w-full flex-col items-center">
          <div className="mt-20 flex h-[60dvh] w-3/4 items-center justify-center md:w-1/2">
            <HeroSvg />
          </div>

          <Link
            to="/resume"
            className="font-camino-slim text-xl transition-opacity hover:opacity-70"
          >
            View his resume &rarr;
          </Link>

          <div className="flex w-full items-center justify-center p-8">
            <Svg
              src="/mountains.svg"
              alt="Mountain illustration with cowboys roaming the landscape"
            />
          </div>

          <div className="font-camino flex flex-col items-center gap-2 px-8 py-16 text-2xl lg:flex-row lg:gap-8">
            <p className="font-camino-slim">Software Engineer</p>
            <div className="flex gap-4">
              <Link to="/resume">Resume</Link>
              <a href="https://github.com/hexcowboy">GitHub</a>
              <a href="https://x.com/hexcowboy">Twitter</a>
            </div>
          </div>

          <div className="w-screen overflow-hidden">
            <div className="cowboy-ticker flex w-max">
              <div className="mr-4 mb-16 flex h-12 gap-4 lg:h-24">
                <Svg src="/no-use-running-away.svg" alt="No use running away" />
                <Svg src="/we-all-die.svg" alt="We all die" />
                <Svg
                  src="/some-like-it-violent.svg"
                  alt="Some like it violent"
                />
                <Svg src="/shoot-shoot-shoot.svg" alt="Shoot shoot shoot" />
                <Svg src="/long-lost.svg" alt="Long lost" />
                <Svg src="/zing.svg" alt="Zing" />
                <Svg src="/happy-valley.svg" alt="Happy Valley" />
                <Svg src="/thank-you.svg" alt="Thank you" />
              </div>

              <div
                className="mr-4 mb-16 flex h-12 gap-4 lg:h-24"
                aria-hidden="true"
              >
                <Svg src="/no-use-running-away.svg" alt="" />
                <Svg src="/we-all-die.svg" alt="" />
                <Svg src="/some-like-it-violent.svg" alt="" />
                <Svg src="/shoot-shoot-shoot.svg" alt="" />
                <Svg src="/long-lost.svg" alt="" />
                <Svg src="/zing.svg" alt="" />
                <Svg src="/happy-valley.svg" alt="" />
                <Svg src="/thank-you.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

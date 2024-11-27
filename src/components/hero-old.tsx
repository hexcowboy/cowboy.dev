import { useRef } from "react";

import { useFullWidthText } from "../hooks/use-full-width-text";
import { useWaitForFontReady } from "../hooks/use-wait-for-font-ready";

export const HeroOld = () => {
  const isFontLoaded = useWaitForFontReady();

  const heroBlock = useRef<HTMLDivElement | null>(null);
  const heroBlockMyNameIs = useRef<SVGSVGElement | null>(null);
  const heroBlockHex = useRef<HTMLHeadingElement | null>(null);
  const heroBlockAka = useRef<SVGSVGElement | null>(null);
  useFullWidthText({ containerRef: heroBlock, targetRef: heroBlockMyNameIs });
  useFullWidthText({ containerRef: heroBlock, targetRef: heroBlockHex });
  useFullWidthText({ containerRef: heroBlock, targetRef: heroBlockAka });

  return (
    <div className="mx-12 my-10 grid grid-cols-1 grid-rows-2 items-center md:grid-cols-2 md:grid-rows-1">
      <div
        className="flex w-full flex-col items-center"
        ref={heroBlock}
        style={isFontLoaded ? {} : { visibility: "hidden" }}
      >
        <svg
          viewBox="0 0 400 70"
          className="font-camino-slim w-full text-nowrap leading-none"
          ref={heroBlockMyNameIs}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="curve"
            d="M50,80 Q200,0 350,80"
            fill="transparent"
            stroke="transparent"
          />
          <text className="fill-current text-4xl leading-none">
            <textPath href="#curve" startOffset="50%" textAnchor="middle">
              my name is
            </textPath>
          </text>
        </svg>
        <h1 className="w-auto leading-none" ref={heroBlockHex}>
          Hex
        </h1>
        <svg
          viewBox="0 0 400 70"
          className="font-camino-slim w-full text-nowrap leading-none"
          ref={heroBlockAka}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="inverted-curve"
            d="M50,20 Q200,100 350,20"
            fill="transparent"
            stroke="transparent"
          />
          <text className="fill-current text-3xl leading-none">
            <textPath
              href="#inverted-curve"
              startOffset="50%"
              textAnchor="middle"
            >
              some call me Jack
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
};

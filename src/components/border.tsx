import { CSSProperties, useEffect, useState } from "react";

import { BorderSvg } from "../assets/border.svg.tsx";

const borderWidth = 155.95;
const borderHeight = 23.77;

export const Border = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth - 16,
    height: window.innerHeight - 16,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth - 16,
        height: window.innerHeight - 16,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const numImagesHorizontal = Math.ceil(windowDimensions.width / borderWidth);
  const scaleX = windowDimensions.width / (numImagesHorizontal * borderWidth);

  const numImagesVertical = Math.ceil(windowDimensions.height / borderWidth);
  const scaleY = windowDimensions.height / (numImagesVertical * borderWidth);

  return (
    <>
      {/* Top Border */}
      <div
        className="absolute left-2 top-2 flex h-[--border-height] w-full z-50"
        style={{ "--border-height": `${borderHeight}px` } as CSSProperties}
      >
        {Array.from({ length: numImagesHorizontal }).map((_, idx) => (
          <BorderSvg
            key={`top-${idx}`}
            style={{
              width: `${borderWidth * scaleX}px`,
              height: `${borderHeight}px`,
            }}
          />
        ))}
      </div>

      {/* Bottom Border */}
      <div
        className="absolute bottom-2 right-2 flex h-[--border-height] w-full rotate-180 z-50"
        style={{ "--border-height": `${borderHeight}px` } as CSSProperties}
      >
        {Array.from({ length: numImagesHorizontal }).map((_, idx) => (
          <BorderSvg
            key={`bottom-${idx}`}
            style={{
              width: `${borderWidth * scaleX}px`,
              height: `${borderHeight}px`,
            }}
          />
        ))}
      </div>

      {/* Left Border */}
      <div
        className="absolute left-2 top-2 flex h-[--border-height] w-[--border-width] origin-bottom-left rotate-90 z-50"
        style={
          {
            "--border-height": `${borderHeight}px`,
            "--border-width": `${
              numImagesVertical * borderWidth * scaleY - 2 * borderHeight
            }px`,
          } as CSSProperties
        }
      >
        {Array.from({ length: numImagesVertical }).map((_, idx) => (
          <BorderSvg
            key={`left-${idx}`}
            style={{
              width: `${borderWidth * scaleY}px`,
              height: `${borderHeight}px`,
            }}
          />
        ))}
      </div>

      {/* Right Border */}
      <div
        className="absolute right-2 top-2 flex h-[--border-height] w-[--border-width] origin-bottom-right -rotate-90 z-50"
        style={
          {
            "--border-height": `${borderHeight}px`,
            "--border-width": `${
              numImagesVertical * borderWidth * scaleY - 2 * borderHeight
            }px`,
          } as CSSProperties
        }
      >
        {Array.from({ length: numImagesVertical }).map((_, idx) => (
          <BorderSvg
            key={`right-${idx}`}
            style={{
              width: `${borderWidth * scaleY}px`,
              height: `${borderHeight}px`,
            }}
          />
        ))}
      </div>
    </>
  );
};

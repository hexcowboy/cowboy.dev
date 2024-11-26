import { CSSProperties, useEffect, useState } from "react";

import { BorderSvg } from "../assets/border.svg.tsx";

// Import the reusable component

const borderWidth = 155.95;
const borderHeight = 23.77;

export const Border = ({
  containerRef,
}: {
  containerRef: React.RefObject<HTMLDivElement>;
}) => {
  const [dimensions, setDimensions] = useState<{
    width: number;
    height: number;
  }>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { offsetWidth, offsetHeight } = containerRef.current;
        setDimensions({ width: offsetWidth, height: offsetHeight });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, [containerRef]);

  const numImagesHorizontal = Math.ceil(dimensions.width / borderWidth);
  const scaleX = dimensions.width / (numImagesHorizontal * borderWidth);

  const numImagesVertical = Math.ceil(dimensions.height / borderWidth);
  const scaleY = dimensions.height / (numImagesVertical * borderWidth);

  return (
    <>
      {/* Top Border */}
      <div
        className="absolute left-0 top-0 flex h-[--border-height] w-full overflow-hidden"
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
        className="absolute bottom-0 left-0 flex h-[--border-height] w-full rotate-180 overflow-hidden"
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
        className="absolute left-0 top-0 flex h-[--border-height] w-[--border-width] origin-bottom-left rotate-90 overflow-hidden"
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
        className="absolute right-0 top-0 flex h-[--border-height] w-[--border-width] origin-bottom-right -rotate-90 overflow-hidden"
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

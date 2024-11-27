import { MutableRefObject, RefObject, useEffect, useState } from "react";

type ElementRef<T> = RefObject<T> | MutableRefObject<T | null>;

type UseFullWidthTextProps<
  ContainerType extends HTMLElement | SVGSVGElement,
  TargetType extends HTMLElement | SVGSVGElement,
> = {
  containerRef: ElementRef<ContainerType>;
  targetRef: ElementRef<TargetType>;
  scale?: number;
};

const defaultScale = 1;

export const useFullWidthText = <
  ContainerType extends HTMLElement | SVGSVGElement,
  TargetType extends HTMLElement | SVGSVGElement,
>({
  containerRef,
  targetRef,
  scale = defaultScale,
}: UseFullWidthTextProps<ContainerType, TargetType>) => {
  const [containerWidth, setContainerWidth] = useState<number | undefined>(
    undefined,
  );
  const [targetWidth, setTargetWidth] = useState<number | undefined>(undefined);

  // Observe container width changes
  useEffect(() => {
    if (!containerRef.current) return;

    const containerObserver = new ResizeObserver(([entry]) => {
      setContainerWidth(entry.contentRect.width);
    });

    containerObserver.observe(containerRef.current);

    return () => {
      containerObserver.disconnect();
    };
  }, [containerRef]);

  // Observe target element width changes
  useEffect(() => {
    if (!targetRef.current) return;

    const targetObserver = new ResizeObserver(([entry]) => {
      setTargetWidth(entry.contentRect.width);
    });

    targetObserver.observe(targetRef.current);

    return () => {
      targetObserver.disconnect();
    };
  }, [targetRef]);

  // Adjust font size of targetRef whenever containerWidth or targetWidth changes
  useEffect(() => {
    if (
      !containerWidth ||
      !targetWidth ||
      !targetRef.current ||
      scale <= 0 ||
      scale > 1
    )
      return;

    const targetElement = targetRef.current;

    // Get current font size of the target element
    const computedStyle = window.getComputedStyle(targetElement);
    const currentFontSize = parseFloat(computedStyle.fontSize);

    if (targetWidth === 0) return; // Prevent division by zero

    // Calculate adjustment factor
    const adjustmentFactor = (containerWidth / targetWidth) * scale;

    // Update the font size
    targetElement.style.fontSize = `${currentFontSize * adjustmentFactor}px`;
  }, [containerWidth, targetWidth, targetRef, scale]);
};

export default useFullWidthText;

import { useEffect, useState } from "react";

export const useWaitForFontReady = (): boolean => {
  const [fontsReady, setFontsReady] = useState(false);

  useEffect(() => {
    const checkFontsReady = async () => {
      try {
        await document.fonts.ready;
        setFontsReady(true);
      } catch (error) {
        console.error("Error waiting for fonts to load:", error);
      }
    };

    checkFontsReady();
  }, []);

  return fontsReady;
};

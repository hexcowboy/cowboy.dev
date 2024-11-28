import { useEffect } from "react";

const useDynamicFavicon = () => {
  useEffect(() => {
    const setFavicon = (theme: "light" | "dark") => {
      const favicon =
        document.querySelector("link[rel='icon']") ||
        document.createElement("link");
      favicon.setAttribute("rel", "icon");
      favicon.setAttribute(
        "href",
        theme === "dark"
          ? "/favicons-dark/favicon-96x96.png"
          : "/favicons-light/favicon-96x96.png",
      );
      document.head.appendChild(favicon);
    };

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const updateFavicon = (event: MediaQueryListEvent) => {
      setFavicon(event.matches ? "dark" : "light");
    };

    // Set the initial favicon
    setFavicon(mediaQuery.matches ? "dark" : "light");

    // Listen for changes in the color scheme
    mediaQuery.addEventListener("change", updateFavicon);

    // Cleanup listener on unmount
    return () => {
      mediaQuery.removeEventListener("change", updateFavicon);
    };
  }, []);
};

export default useDynamicFavicon;

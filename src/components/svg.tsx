export const Svg = ({ src, alt }: { src: string; alt: string }) => {
  const isSafari = () => {
    return (
      /^((?!chrome|android).)*safari/i.test(navigator.userAgent) &&
      !/CriOS/i.test(navigator.userAgent)
    );
  };

  if (isSafari()) {
    return (
      <object
        type="image/svg+xml"
        data={src}
        className="h-full w-full"
        aria-label={alt}
        role="img"
      />
    );
  } else {
    return <img src={src} className="h-full w-full" alt={alt} />;
  }
};

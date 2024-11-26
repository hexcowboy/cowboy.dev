import { useRef } from "react";

import { Border } from "../components/border";

export default function Home() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="flex h-dvh w-screen flex-col overflow-hidden overscroll-contain">
      <div className="relative m-4 h-full" ref={containerRef}>
        <Border containerRef={containerRef} />

        <div className="mx-12 my-10">My content</div>
      </div>
    </div>
  );
}

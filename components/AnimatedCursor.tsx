"use client";

import dynamic from "next/dynamic";

const Cursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

const AnimatedCursor = () => {
  return (
    <Cursor
      innerSize={8}
      outerSize={35}
      innerScale={1}
      outerScale={2}
      outerAlpha={0}
      innerStyle={{
        backgroundColor: "white",
        zIndex: 999999,
        mixBlendMode: "difference",
      }}
      outerStyle={{
        border: "3px solid white",
        mixBlendMode: "difference",
        zIndex: 999999,
      }}
    />
  );
};

export default AnimatedCursor;

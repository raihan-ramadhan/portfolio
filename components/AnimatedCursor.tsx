"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Cursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

const AnimatedCursor = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkTouchDevice = () => {
      if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
        setIsTouchDevice(true);
      }
    };

    checkTouchDevice();
  }, []);

  if (isTouchDevice) return null;

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

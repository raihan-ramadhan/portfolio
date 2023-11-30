"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Carousel as ResponsiveCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface CarouselProps {
  carouselItems: Array<{ label: string; url: string }>;
}

const Carousel: React.FC<CarouselProps> = ({ carouselItems }) => {
  // state for track current screen size
  const [screenSize, setScreenSize] = useState<{
    width: number;
    height: number;
  }>({
    width: 0,
    height: 0,
  });

  // function handler for track current screen size
  const handleResize = () => {
    setScreenSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  // initial value for screenSize
  useEffect(() => {
    handleResize();
  }, []);

  // give window an eventListener for track current screen size
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full pl-4 sm:pl-8 md:px-6 lg:px-[200px] xl:px-0 xl:mx-auto xl:max-w-[1128px]">
      <ResponsiveCarousel
        showIndicators={false}
        showStatus={false}
        centerMode
        centerSlidePercentage={75}
        axis="horizontal"
        showThumbs={false}
        preventMovementUntilSwipeScrollTolerance
        swipeScrollTolerance={50}
        className="[&_ul_li]:pr-[10px] last:[&_ul_li]:pr-4 sm:[&_ul_li]:pr-[20px] sm:last:[&_ul_li]:pr-8 md:[&_ul_li]:pr-[40px] md:last:[&_ul_li]:pr-0 "
        showArrows={screenSize.width >= 905}
        emulateTouch
      >
        {carouselItems.map(({ label, url }, index) => (
          <div
            key={index}
            className={cn(
              "flex flex-col w-full justify-between h-full gap-[5px] sm:gap-[15px] lg:text-[20px] "
            )}
          >
            <div className="text-left font-bold md:text-[18px] xl:text-[26px]">
              <span>{label}</span>
            </div>
            <div className="aspect-video relative">
              <Image className="w-full h-full" src={url} fill alt={label} />
            </div>
          </div>
        ))}
      </ResponsiveCarousel>
    </div>
  );
};

export default Carousel;

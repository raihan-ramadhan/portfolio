"use client";

import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";

interface CarouselProps {
  carouselItems: Array<{ label: string; url: string }>;
}

const Carousel: React.FC<CarouselProps> = ({ carouselItems }) => {
  return (
    <section className="w-full xl:mx-auto xl:max-w-[1128px] md:!px-6 lg:!px-[200px] xl:!px-0 pb-[40px] lg:pb-[80px] xl:pb-[100px]">
      <Swiper
        loop
        slidesPerView={"auto"}
        grabCursor
        pagination={{ clickable: true }}
        spaceBetween={15}
        modules={[Pagination]}
        className={`!px-4 sm:!px-8 md:!px-0 [&_span.swiper-pagination-bullet-active]:bg-cream`}
      >
        {carouselItems.map(({ label, url }, index) => (
          <SwiperSlide key={index} className="!w-10/12 space-y-2">
            <div className="text-left font-bold h-12 md:text-[18px] xl:text-[26px] line-clamp-2">
              <span>{label}</span>
            </div>
            <div className="aspect-video relative align-bottom justify-end content-end">
              <Image className="w-full h-full" src={url} fill alt={label} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Carousel;

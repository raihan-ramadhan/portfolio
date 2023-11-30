import Image from "next/image";
import SectionHeading from "../SectionHeading";

interface BannerProps {
  title: string;
  imageUrl: string;
  imageUrlMobile: string;
  link: string;
}

const Banner: React.FC<BannerProps> = ({
  title,
  imageUrl,
  imageUrlMobile,
  link,
}) => {
  return (
    <section className="px-4 pt-20 flex flex-col w-full justify-center gap-[15px] sm:px-8 md:px-6 lg:px-[200px] xl:px-0 xl:mx-auto xl:max-w-[1128px] xl:pt-[100px]">
      <SectionHeading className="text-center py-5">{title}</SectionHeading>

      {/* Image on mobile view */}
      <div className="relative aspect-square w-full rounded-[25px] overflow-hidden sm:hidden">
        <Image
          priority
          src={imageUrlMobile}
          fill
          alt={title}
          className="w-full h-full"
        />
      </div>

      {/* Image on tablet or bigger screen */}
      <div className="relative flex justify-center w-full items-center overflow-hidden">
        <a
          href={link}
          className="relative aspect-video w-full hidden sm:block max-w-[600px] z-50 outline outline-[20px] outline-black md:max-w-[640px] lg:max-w-[unset]"
          target="_blank"
        >
          <Image
            priority
            src={imageUrl}
            fill
            alt={title}
            className="w-full h-full"
          />
        </a>

        {/* Blur Background */}
        <div className="absolute aspect-video w-full hidden sm:block max-w-[600px] left-0 inset-y-0 z-0 md:max-w-[640px] lg:hidden">
          <div className="absolute inset-0 bg-black/30 z-10 backdrop-blur-sm" />
          <Image src={imageUrl} fill alt={title} className="w-full h-full" />
        </div>
        <div className="absolute aspect-video w-full hidden sm:block max-w-[600px] right-0 inset-y-0 z-0 md:max-w-[640px] lg:hidden">
          <div className="absolute inset-0 bg-black/30 z-10 backdrop-blur-sm" />
          <Image src={imageUrl} fill alt={title} className="w-full h-full" />
        </div>
      </div>
    </section>
  );
};

export default Banner;

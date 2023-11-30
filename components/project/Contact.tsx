import Link from "next/link";
import { Icons } from "../Icons";

const Contact: React.FC = () => {
  return (
    <div className="px-4 pt-[50px] pb-[80px] text-center flex flex-col gap-[25px] sm:flex-row sm:pt-0 sm:pb-16 sm:px-8 lg:px-[200px] xl:px-0 xl:mx-auto xl:max-w-[1128px]">
      <Link
        href={"/#contact"}
        className="font-heading mx-auto text-[32px] font-bold underline sm:flex-1 sm:text-left sm:font-default sm:text-[24px] md:text-[28px] lg:text-[30px] xl:text-[40px]"
      >
        Let's talk
      </Link>
      <div className="flex w-full justify-center items-center gap-[25px] sm:w-fit">
        <a href="mailto:raihanramadhan.rn22@gmail.com" className="sm:hidden">
          <Icons.roundMail className="w-[26px] h-[26px] fill-cream" />
          <span className="sr-only">Mail</span>
        </a>

        <a href="https://github.com/raihan-ramadhan" target="_blank">
          <Icons.roundGithub className="w-[26px] h-[26px] fill-cream sm:hidden" />
          <span className="sr-only sm:not-sr-only sm:underline md:text-[18px] lg:text-[20px] xl:text-[26px]">
            Github
          </span>
        </a>

        <a
          href="https://www.linkedin.com/in/raihan-ramadhan-baab69227/"
          target="_blank"
        >
          <Icons.roundLinkedin className="w-[26px] h-[26px] fill-cream sm:hidden" />
          <span className="sr-only sm:not-sr-only sm:underline md:text-[18px] lg:text-[20px] xl:text-[26px]">
            Linkedin
          </span>
        </a>
      </div>
    </div>
  );
};

export default Contact;

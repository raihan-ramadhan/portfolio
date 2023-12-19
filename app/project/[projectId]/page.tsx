import { MotionDecoration } from "@/components/Decoration";
import Banner from "@/components/project/Banner";
import Carousel from "@/components/project/Carousel";
import Contact from "@/components/project/Contact";
import Details from "@/components/project/Details";
import Features from "@/components/project/Features";
import Header from "@/components/project/Header";
import Preview from "@/components/project/Preview";
import { projectsData } from "@/lib/data";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    projectId: string;
  };
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    projectId: project.id,
  }));
}
const Variants = {
  initial: {
    opacity: 0,
    scale: 0.75,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3 },
  },
};

const Page: React.FC<PageProps> = ({ params }) => {
  const { projectId } = params;

  const project = projectsData.find((project) => project.id == projectId);

  if (!project) notFound();

  const {
    category,
    id,
    carouselItems,
    features,
    imageUrl,
    imageUrlMobile,
    repo,
    tech,
    title,
    url,
    year,
  } = project;

  return (
    <div className="flex-1 text-cream space-y-[15px] first-of-type:[&>section]:!mt-0 sm:space-y-[35px] lg:space-y-[50px] selection:text-black selection:bg-cream relative overflow-hidden">
      <Header projectId={projectId} />
      <Banner
        title={title}
        imageUrl={imageUrl}
        link={url}
        imageUrlMobile={imageUrlMobile}
      />
      <Details year={year} tech={tech} repo={repo} link={url} />
      <Features features={features} />
      <div className="h-[2px] bg-blue-foreground !my-[35px] mx-4 sm:mx-8 md:mx-6 lg:mx-[200px] lg:!my-[50px]  xl:mx-auto xl:max-w-[1128px]" />
      <Carousel carouselItems={carouselItems} />
      <Preview />
      <Contact />

      {/* Decoration Background */}
      <MotionDecoration
        motionStyles="absolute -right-[35px] top-[35px] sm:-right-5 sm:-top-5 xl:-right-[35px] xl:-top-[35px] !m-0"
        decorStyles="stroke-cream/75 mask-0-60-45deg w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] lg:w-[300px] lg:h-[300px]"
        variant="andromeda"
        motionVariants={Variants}
      />
      <MotionDecoration
        motionStyles="absolute -left-[200px] top-[500px] !m-0 sm:-left-[100px] md:-left-[75px] lg:top-[800px]"
        decorStyles="stroke-cream/30 -mask-0-80-45deg w-[275px] lg:w-[500px]"
        variant="reverseItalicEllipse"
        motionVariants={Variants}
      />
      <MotionDecoration
        decorStyles="stroke-cream/50 mask-10-70-135deg lg:mask-10-60-135deg w-[275px] hidden sm:block sm:w-[150px] lg:w-[350px] xl:w-[400px]"
        motionStyles="absolute -right-[50px] -bottom-[50px] lg:bottom-[-65px] lg:right-[-75px] xl:bottom-[-100px] xl:right-[-100px]"
        variant="asterisk"
        motionVariants={Variants}
      />
    </div>
  );
};

export default Page;

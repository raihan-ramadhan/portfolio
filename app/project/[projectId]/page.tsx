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
    <div className="flex-1 text-cream space-y-[15px] first-of-type:[&>section]:!mt-0 sm:space-y-[35px] lg:space-y-[50px] selection:text-black selection:bg-cream">
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
    </div>
  );
};

export default Page;

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

  return (
    <div className="flex-1">
      <h1>Coming Soon</h1>
      <div>{project.title}</div>
      <p>
        <a href={project.repo} className="underline" target="_blank">
          Link Repo
        </a>
      </p>
      <p>
        <a href={project.url} className="underline" target="_blank">
          Link Website
        </a>
      </p>
    </div>
  );
};

export default Page;

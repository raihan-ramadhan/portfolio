"use client";

import { useParams, notFound } from "next/navigation";
import { projectsData } from "@/lib/data";

const Page: React.FC = () => {
  const { projectId } = useParams();

  const project = projectsData.find((project) => project.id == projectId);

  if (!project) notFound();

  return (
    <div className="flex-1">
      <h1>Coming Soon</h1>
      <div>{project.title}</div>
      <a href={project.url} className="underline" target="_blank">
        Link Repo
      </a>
    </div>
  );
};

export default Page;

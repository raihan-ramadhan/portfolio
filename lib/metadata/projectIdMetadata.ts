import { Metadata } from "next";
import { projectsData } from "./../data";

export async function projectIdMetadata({
  params,
}: {
  params: { projectId: string };
}): Promise<Metadata> {
  const project = projectsData.find((p) => p.id === params.projectId);

  if (!project) {
    return {
      title: "Project Not Found | Raihan Ramadhan",
      description: "This project does not exist.",
    };
  }

  return {
    title: `${project.title} | Raihan Ramadhan`,
    description: `Discover ${project.title}, a ${
      project.category
    } built with ${project.tech.join(
      ", "
    )}. Features include: ${project.features.join(", ")}.`,
    openGraph: {
      title: project.title,
      description: `Check out ${project.title}, a ${
        project.category
      } using ${project.tech.join(", ")}.`,
      url: project.url,
      images: [
        {
          url: project.imageMetadata,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
      siteName: "Raihan Ramadhan Portfolio",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: `Explore ${project.title}, built with ${project.tech.join(
        ", "
      )}.`,
      images: [project.imageMetadata],
    },
    keywords: [
      project.title,
      project.category,
      ...project.tech,
      "Raihan Ramadhan",
      "Portfolio",
      "Indonesia",
      "Pekanbaru",
    ],
  };
}

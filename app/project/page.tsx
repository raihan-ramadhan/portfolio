import { projectsData } from "@/lib/data";
import Link from "next/link";

const Page: React.FC = () => {
  return (
    <div>
      <h1>Coming Soon</h1>
      {projectsData.map(({ id, year, title }, index) => (
        <Link href={`/project/${id}`} key={id} className="inline-block w-full">
          {index + 1}. {title}
        </Link>
      ))}
    </div>
  );
};

export default Page;

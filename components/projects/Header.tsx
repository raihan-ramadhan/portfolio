import { projectsData } from "@/lib/data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Icons } from "../Icons";
import SectionHeading from "../SectionHeading";

export default function Header({
  projectId,
  title,
}: {
  projectId?: string;
  title: string;
}) {
  return (
    <header>
      <nav>
        <ul
          className={cn(
            "px-4 w-fit lg:w-full mx-auto justify-center sm:px-8 md:px-6 lg:px-[200px] xl:px-0 xl:mx-auto xl:max-w-[1128px] items-center relative flex flex-wrap gap-x-4 lg:gap-x-6 pt-10"
          )}
        >
          <li className="min-h-5">
            <Link href={"/"} className="text-cream ">
              Home
            </Link>
          </li>

          <PrevNext projectId={projectId} />

          <li className="mx-auto w-full text-center min-h-5">
            <SectionHeading className="text-center w-fit mx-auto">
              {title}
            </SectionHeading>
          </li>
        </ul>
      </nav>
    </header>
  );
}

const PrevNext = ({ projectId }: { projectId?: string }) => {
  if (typeof projectId === "undefined") return null;

  const prevRoute = parseInt(projectId) == 0 ? "0" : parseInt(projectId) - 1;
  const nextRoute =
    parseInt(projectId) == projectsData.length - 1
      ? projectId
      : parseInt(projectId) + 1;
  return (
    <>
      {/* SEPARATOR */}
      <li>
        <div className="w-[1.5px] h-5 bg-cream" />
      </li>

      <li className="min-h-5">
        <Link className={cn()} href={"/projects"}>
          All
        </Link>
      </li>

      {/* SEPARATOR */}
      <li>
        <div className="w-[1.5px] h-5 bg-cream" />
      </li>

      <li className="min-h-5">
        <Link
          className={cn(
            `flex items-center justify-center overflow-hidden h-5 shrink-0 md:h-[unset] md:w-[unset]`,
            prevRoute == projectId && "opacity-40 pointer-events-none"
          )}
          href={"/projects/" + prevRoute}
        >
          <Icons.arrow className="fill-cream w-[10px] h-[16px] sm:hidden scale-x-[-1]" />
          <span className="sr-only sm:not-sr-only">Prev</span>
        </Link>
      </li>

      {/* SEPARATOR */}
      <li>
        <div className="w-[1.5px] h-5 bg-cream" />
      </li>

      <li className="">
        <Link
          className={cn(
            `flex items-center justify-center overflow-hidden h-5 shrink-0 md:h-[unset] md:w-[unset] md:px-[5px]`,
            nextRoute == projectId &&
              "opacity-40 pointer-events-none select-none"
          )}
          href={"/projects/" + nextRoute}
        >
          <Icons.arrow className="fill-cream w-[10px] h-[16px] sm:hidden" />
          <span className="sr-only sm:not-sr-only">Next</span>
        </Link>
      </li>
    </>
  );
};

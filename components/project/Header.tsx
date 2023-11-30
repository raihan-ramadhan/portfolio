import { projectsData } from "@/lib/data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Icons } from "../Icons";

export default function Header({ projectId }: { projectId: string }) {
  const prevRoute = parseInt(projectId) == 0 ? "0" : parseInt(projectId) - 1;
  const nextRoute =
    parseInt(projectId) == projectsData.length - 1
      ? projectId
      : parseInt(projectId) + 1;

  return (
    <header>
      <nav>
        <ul
          className={
            "min-w-fit w-[calc(100%_-_32px)] max-w-[550px] h-[60px] fixed z-[999] top-5 left-1/2 -translate-x-1/2 flex items-center rounded-full justify-between bg-black/40 backdrop-blur-sm px-4 overflow-hidden sm:w-[calc(100%_-_64px)] md:gap-[10px] text-[14px] sm:text-[18px]"
          }
        >
          <li className="flex-1">
            <Link
              className={cn(`text-cream sm:px-2 sm:py-1 `)}
              href={"/#projects"}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={cn(
                `flex items-center justify-center overflow-hidden h-[30px] w-[30px] rotate-180 shrink-0 grow-0 md:h-[unset] md:w-[unset] md:rotate-0 md:px-[5px]`,
                prevRoute == projectId && "opacity-40 pointer-events-none"
              )}
              href={"/project/" + prevRoute}
            >
              <Icons.arrow className="fill-cream w-[10px] h-[16px] md:hidden" />
              <span className="sr-only md:not-sr-only">Prev</span>
            </Link>
          </li>
          <div className="hidden w-[2px] h-[18px] md:block bg-cream" />

          <li>
            <Link
              className={cn(
                `flex items-center justify-center overflow-hidden h-[30px] w-[30px] shrink-0 grow-0 md:h-[unset] md:w-[unset] md:px-[5px]`,
                nextRoute == projectId && "opacity-40 pointer-events-none"
              )}
              href={"/project/" + nextRoute}
            >
              <Icons.arrow className="fill-cream w-[10px] h-[16px] md:hidden" />
              <span className="sr-only md:not-sr-only">Next</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

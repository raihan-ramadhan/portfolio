import { SkillsData } from "@/lib/data";
import { cn } from "@/lib/utils";

interface ProjectDetailProps {
  year: string;
  tech: Array<SkillsData>;
  link: string;
  repo: string;
}

const Details: React.FC<ProjectDetailProps> = ({ year, link, repo, tech }) => {
  const array = [{ year }, { tech }, { repo }, { link }];

  type ArrayKeys = keyof (typeof array)[number];

  return (
    <section className="px-4 py-5 space-y-[5px] sm:px-8 md:px-6 md:space-y-[15px] lg:px-[200px] xl:px-0 xl:mx-auto xl:max-w-[1128px]">
      {array.map((item, index) => {
        const key = Object.keys(item)[0] as ArrayKeys;
        const currentValue = item[key];

        const Value = () => {
          if (typeof currentValue == "string") {
            return key == "link" || key == "repo" ? (
              <a href={currentValue} target="_blank" className="underline">
                {currentValue.slice("https://".length)}
              </a>
            ) : (
              <span>{currentValue}</span>
            );
          } else if (Array.isArray(currentValue)) {
            // @ts-ignore
            return <span>{currentValue?.join(", ")}</span>;
          }

          return null;
        };

        // cameCase
        const keyCamelCase = key[0].toUpperCase() + key.slice(1).toLowerCase();

        return (
          <p
            className={cn(
              "flex w-full gap-[5px] md:text-[18px] md:gap-[10px] lg:text-[20px] xl:text-[26px]",
              key == "link" && "md:hidden"
            )}
            key={index}
          >
            <span className="font-bold shrink-0 inline-block sm:w-[70px] md:w-[150px] lg:w-[220px]">
              {keyCamelCase}
            </span>
            <span>:</span>
            <Value />
          </p>
        );
      })}
    </section>
  );
};

export default Details;

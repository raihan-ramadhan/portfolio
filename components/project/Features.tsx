interface FeaturesProps {
  features: String[];
}

const Features: React.FC<FeaturesProps> = ({ features }) => {
  return (
    <section className="flex flex-col w-full px-4 gap-[10px] sm:px-8 md:px-6 lg:px-[200px] xl:px-0 xl:mx-auto xl:max-w-[1128px]">
      <div className="text-center bg-cream text-black rounded-full sm:rounded-none sm:text-[18px] md:text-cream md:bg-transparent md:text-left md:flex md:gap-[10px] lg:text-[20px] xl:text-[26px] ">
        <span className="shrink-0 font-bold md:w-[150px] lg:w-[220px]">
          Main Features
        </span>
        <span className="hidden md:inline">:</span>
      </div>
      <div>
        <ul className="list-disc list-ouside pl-5 text-[14px] space-y-[10px] sm:text-[15px] lg:text-[16px] xl:text-[20px]">
          {features.map((feat, index) => (
            <li key={index}>{feat}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Features;

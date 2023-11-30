const Preview: React.FC = () => {
  return (
    <div className="px-4 flex flex-col w-full gap-[10px] sm:px-8 md:px-6 lg:px-[200px] xl:px-0 xl:mx-auto xl:max-w-[1128px]">
      <div>
        <span className="font-bold md:text-[18px] lg:text-[20px] xl:text-[26px]">
          Video Preview
        </span>
      </div>
      <div className="w-full aspect-video relative flex justify-center items-center">
        <span className="font-heading font-black text-cream text-xl z-10 ">
          Coming Soon
        </span>
        <div className="absolute inset-0 bg-blue-secondary/30 animate-pulse z-0" />
      </div>
    </div>
  );
};

export default Preview;

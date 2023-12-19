const Preview: React.FC = () => {
  return (
    <section className="px-4 flex flex-col w-full gap-[10px] sm:px-8 md:px-6 lg:px-[200px] xl:px-0 xl:mx-auto xl:max-w-[1128px] relative z-10">
      <div>
        <span className="font-bold md:text-[18px] lg:text-[20px] xl:text-[26px]">
          Video Preview
        </span>
      </div>
      <div className="w-full aspect-video relative flex justify-center items-center">
        <div className="absolute inset-0 bg-gray-700 z-0" />
      </div>
    </section>
  );
};

export default Preview;

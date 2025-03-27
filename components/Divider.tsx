const Divider: React.FC = () => {
  return (
    <div className="flex justify-center items-center overflow-hidden h-10 bg-blue-foreground md:h-[60px] lg:h-[70px] xl:h-[80px]">
      <div className="w-[100vw] whitespace-nowrap text-[8px] text-cream font-bold md:text-[10px] lg:text-[12px] selection:bg-cream selection:text-black text-center">
        separator - separator - separator - separator - separator - separator -
        separator - separator - separator - separator - separator - separator -
        separator - separator - separator - separator - separator - separator -
        separator - separator - separator - separator - separator - separator -
        separator - separator - separator - separator - separator - separator -
        separator - separator
      </div>
    </div>
  );
};

export default Divider;

import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";

interface LinkProps {
  setCursorPosition: React.Dispatch<
    React.SetStateAction<{
      x: number;
      y: number;
    }>
  >;
  href: string;
  setHoveredItem: React.Dispatch<React.SetStateAction<string | null>>;
  heading: string;
  containerRef: React.RefObject<HTMLDivElement>;
  id: string;
  year: string;
  category: string;
  handleClick: (e: any) => void;
}

const MyLink = ({
  containerRef,
  heading,
  setHoveredItem,
  setCursorPosition,
  href,
  id,
  category,
  year,
  handleClick,
}: LinkProps) => {
  const ref = useRef<HTMLAnchorElement>(null);

  const mouseOverHandler = useCallback(() => {
    setHoveredItem(id);
  }, [id, setHoveredItem]);

  const mouseLeaveContainerHandler = useCallback(() => {
    setHoveredItem(null);
  }, [setHoveredItem]);

  const mouseMoveHandler = useCallback(
    (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const left = e.clientX - rect.left;
        const top = e.clientY - rect.top;

        setCursorPosition({ x: left, y: top });
      }
    },
    [containerRef, setCursorPosition]
  );

  useEffect(() => {
    if (ref.current && containerRef.current) {
      ref.current.addEventListener("mouseover", mouseOverHandler);
      ref.current.addEventListener("mousemove", mouseMoveHandler);
      containerRef.current.addEventListener(
        "mouseleave",
        mouseLeaveContainerHandler
      );
    }

    return () => {
      if (ref.current && containerRef.current) {
        ref.current.removeEventListener("mouseover", mouseOverHandler);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        ref.current.removeEventListener("mousemove", mouseMoveHandler);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        containerRef.current.removeEventListener(
          "mouseleave",
          mouseLeaveContainerHandler
        );
      }
    };
  }, [
    containerRef,
    setHoveredItem,
    mouseMoveHandler,
    mouseOverHandler,
    setCursorPosition,
    mouseLeaveContainerHandler,
  ]);

  return (
    <Link
      ref={ref}
      href={href}
      onClick={handleClick}
      className="h-[75px] px-[10px] sm:px-[25px] xl:px-[50px] md:h-[100px] lg:h-[120px] xl:h-[150px] flex w-full items-center text-blue transition-colors duration-500 text-[14px] sm:text-[20px] md:text-[24px] lg:text-[26px] text-left border-b border-blue/60 gap-3"
    >
      <span className="pointer-events-none flex-1 grow">{heading}</span>
      <span className="pointer-events-none flex-1 grow">{category}</span>
      <span className="pointer-events-none shrink-0">{year}</span>
    </Link>
  );
};

export default MyLink;

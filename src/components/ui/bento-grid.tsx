"use client";
import { cn } from "@/utils/cn";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[10rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bent hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4  dark:border-white/[0.2] bg-yellow-200 border border-transparent justify-between flex flex-col space-y-10",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-black  mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-black text-xs ">
          {description}
        </div>
      </div>
    </div>
  );
};

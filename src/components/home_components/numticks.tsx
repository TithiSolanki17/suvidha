"use client";
import NumberTicker from "@/components/ui/home_ui/numberticker";

const NumberTickerDemo = () => {
  return (
    <p className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-white dark:text-white">
      <NumberTicker value={100} />
    </p>
  );
};

export default NumberTickerDemo;

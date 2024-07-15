"use client";
import React, { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn"; // Assuming cn is a utility function for class names

export const TextGenerateEffect = ({
  words = "",
  className = "",
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      { opacity: 1 },
      { duration: 1, delay: stagger(0.1) }
    );
  }, [animate]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className="dark:text-grey text-black opacity-0"
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-extralight", className)}>
      <div className="mt-4">
        <div className="dark:text-grey text-black leading-snug tracking-wide m-6">
          <b>{renderWords()}</b>
        </div>
      </div>
    </div>
  );
};

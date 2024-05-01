"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

function Animation({
  data,
  index,
  isOdd,
}: {
  data: any;
  index: number;
  isOdd: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      variants={{
        hidden: { x: isOdd ? 200 : -200, opacity: 0 },
        visible: { x: 0, opacity: 1 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.7 }}
      className={`flex ${isOdd ? "md:justify-end" : "justify-start"}`}
    >
      <div
        className={`w-full md:w-1/2 ${
          isOdd
            ? "md:border-l-2 md:before:-left-[9px]"
            : "md:border-r-2 before:-right-[9px]"
        } text-white 
              px-6 md:relative pb-6  
              md:before:w-4 md:before:h-4 md:before:rounded-full md:before:border-2 
               md:before:bg-white md:before:absolute md:before:top-0 text-sm md:text-base`}
        ref={ref}
      >
        <p className="font-bold text-lg md:text-xl md:text-center pb-2 md:pb-5 text-neutral-300">
          {data.title}
        </p>
        {data.description}
      </div>
    </motion.div>
  );
}

export default Animation;

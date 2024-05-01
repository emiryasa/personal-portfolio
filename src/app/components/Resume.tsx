"use client";
import { motion, useInView, useAnimation } from "framer-motion";
import { aboutData } from "@/utils/data/aboutData";
import { useEffect, useRef } from "react";

function About() {
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
    <div className="md:container md:mx-auto lg:px-20">
      <div className="py-10 text-2xl font-bold text-neutral-300 text-center">
        Resume
      </div>
      <div className="flex flex-col">
        <motion.div
          variants={{
            hidden: { x: 200, opacity: 0 },
            visible: { x: 0, opacity: 1 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.7 }}
          className="flex justify-end"
        >
          <div
            className="w-1/2 border-l-2 text-white 
              px-6 relative pb-6 border-primary 
              before:w-4 before:h-4 before:rounded-full before:border-2 before:border-primary
               before:bg-white before:absolute before:top-0 before:-left-[9px]"
            ref={ref}
          >
            <p className="font-bold text-xl text-center pb-5 text-neutral-300">
              {aboutData[0].title}
            </p>
            {aboutData[0].description}
          </div>
        </motion.div>
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className=""
        >
          <div
            className="w-1/2 border-r-2 text-white
              px-6 relative pb-6 border-primary
              before:w-4 before:h-4 before:rounded-full before:border-2 before:border-primary
              before:bg-white before:absolute before:top-0 before:-right-[9px]"
          >
            <p className="font-bold text-xl text-center pb-5 text-neutral-300">
              {aboutData[1].title}
            </p>
            {aboutData[1].description}
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-end"
        >
          <div
            className="w-1/2 border-l-2 text-white 
              px-6 relative pb-6 border-primary 
              before:w-4 before:h-4 before:rounded-full before:border-2 before:border-white
               before:bg-white before:absolute before:top-0 before:-left-[9px]"
          >
            <p className="font-bold text-xl text-center pb-5 text-neutral-300">
              {aboutData[2].title}
            </p>
            {aboutData[2].description}
          </div>
        </motion.div>
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className=""
        >
          <div
            className="w-1/2 border-r-2 text-white
              px-6 relative pb-6 border-primary
              before:w-4 before:h-4 before:rounded-full before:border-2 before:border-primary
              before:bg-white before:absolute before:top-0 before:-right-[9px]"
          >
            <p className="font-bold text-xl text-center pb-5 text-neutral-300">
              {aboutData[3].title}
            </p>
            {aboutData[3].description}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;

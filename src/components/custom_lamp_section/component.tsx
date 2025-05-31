import React from "react";
import { LampContainer } from "./ui";
import { motion } from "motion/react";
import { cn } from "../../utils/cn";

type props = {
  children: React.ReactNode;
  className?: string;
};

const CustomLampSection = ({ ...props }: props) => {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className={cn(
          "mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-8 md:py-6 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl",
          props.className
        )}
      >
        {props.children}
      </motion.h1>
    </LampContainer>
  );
};

export default CustomLampSection;

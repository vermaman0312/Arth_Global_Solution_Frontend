import React from "react";
import CustomLabel from "../../../components/custom_label/component";
import { TypewriterEffect } from "../../../components/custom_typewriter/component";

const words = [
  {
    text: "WHERE",
    className: "text-[#DAC5A7] text-2xl md:text-4xl text-center",
  },
  {
    text: "BUSINESS",
    className: "text-[#DAC5A7] text-2xl md:text-4xl text-center",
  },
  {
    text: "MEETS",
    className: "text-[#DAC5A7] text-2xl md:text-4xl text-center",
  },
  {
    text: "LEGAL",
    className: "text-[#DAC5A7] text-2xl md:text-4xl text-center",
  },
  {
    text: "SIMPLICITY",
    className:
      "text-blue-500 dark:text-blue-500 text-2xl md:text-4xl text-center",
  },
  {
    text: "WITH",
    className:
      "text-blue-500 dark:text-blue-500 text-2xl md:text-4xl text-center",
  },
  {
    text: "ARTH",
    className:
      "text-blue-500 dark:text-blue-500 text-2xl md:text-4xl text-center",
  },
  {
    text: "GLOBAL",
    className:
      "text-blue-500 dark:text-blue-500 text-2xl md:text-4xl text-center",
  },
  {
    text: "SOLUTIONS",
    className:
      "text-blue-500 dark:text-blue-500 text-2xl md:text-4xl text-center",
  },
];

const HomeLayoutTemplate = () => {
  return (
    <div className="">
      <div className="h-[30rem] bg-black bg-opacity-40 rounded-3xl flex flex-col items-center justify-center gap-8">
        <div className="w-full md:w-[70%]">
          <TypewriterEffect words={words} />
        </div>
        <div className="w-full md:w-[70%] flex items-center justify-center">
          <CustomLabel className="text-center text-foreground-primary font-light">
            We bridge the gap between business ambition and legal clarity,
            offering seamless solutions for compliance, finance, and growth.
          </CustomLabel>
        </div>
      </div>
      <CustomLabel className="text-center text-foreground-primary font-light">
        We bridge the gap between business ambition and legal clarity, offering
        seamless solutions for compliance, finance, and growth.
      </CustomLabel>
    </div>
  );
};

export default HomeLayoutTemplate;

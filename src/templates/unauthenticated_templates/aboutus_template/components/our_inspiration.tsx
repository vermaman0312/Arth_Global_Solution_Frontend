import React from "react";
import CustomLabel from "../../../../components/custom_label/component";

const OurInspiration = () => {
  return (
    <div className="flex flex-col md:flex-row w-full items-start justify-between gap-4">
      <div className="bg-red-400 w-96 h-96 flex-shrink-0"></div>
      <div className="w-full h-full">
        <div className="w-full relative">
          <div className="bg-background-secondary w-10 h-9 absolute left-1.5 top-0 -z-10" />
          <CustomLabel className="max-w-7xl pl-4 mx-auto text-xl md:text-4xl font-bold text-foreground-primary font-sans z-10">
            <span className="text-foreground-secondary">O</span>ur Inspiration
          </CustomLabel>
        </div>
        <div className="w-full relative mt-5 pl-4">
          <CustomLabel className="text-md font-normal text-foreground-primary font-sans z-10">
            We acknowledge our inspiration, a genius, a visionary, an innovator
            with revolutionary thoughts, rarely seen on the world podium,
            someone who has facilitated thousands of successful Entrepreneurs
            globally.
          </CustomLabel>
        </div>
        <div className="w-full relative mt-5 pl-4">
          <CustomLabel className="mt-5 text-md font-normal text-foreground-primary font-sans z-10">
            Today, Gateway Group of Companies is defining new paradigms of
            technological excellence in every sector we are represented and our
            Organization acknowledges this ‘can do’ ethos and the urge ‘to
            excel’ to ‘always in our heart’, Prof. M.S. Pillai.
          </CustomLabel>
        </div>
        <div className="w-full relative mt-5 pl-4">
          <CustomLabel className="mt-5 text-md font-normal text-foreground-primary font-sans z-10">
            A lion’s share of our success as an organization is inspired by his
            teachings. Our organizational DNA is derived largely from the
            all-inclusive management principles that he propagated while
            ensuring a triple-bottom line criteria to balance people, planet &
            profits.
          </CustomLabel>
        </div>
        <div className="w-full flex flex-col items-end justify-end relative mt-5 pl-4">
          <CustomLabel className="mt-5 text-xl font-bold font-handwritten text-foreground-primary font-sans z-10">
            Rajat Verma
          </CustomLabel>
          <CustomLabel className="text-md font-normal text-foreground-primary font-sans z-10">
            Founder & Chairman of Board, Group CEO
          </CustomLabel>
        </div>
      </div>
    </div>
  );
};

export default OurInspiration;

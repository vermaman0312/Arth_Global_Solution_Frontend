import React from "react";
import OurInspiration from "./components/our_inspiration";

const AboutUsLayoutTemplate = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="w-full">
        <OurInspiration />
      </div>
    </div>
  );
};

export default AboutUsLayoutTemplate;

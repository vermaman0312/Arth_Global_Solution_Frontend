import React from "react";
import OurInspiration from "./components/our_inspiration";
import OurDna from "./components/our_dna";
import OurMotivation from "./components/our_motivation";
import OurMission from "./components/our_mission";
import OurVision from "./components/our_vision";
import OurValues from "./components/our_values";

const AboutUsLayoutTemplate = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="w-full">
        <OurInspiration />
      </div>
      <div className="py-8 md:py-10 flex flex-col md:flex-row items-start justify-between gap-8">
        <OurDna />
        <OurMotivation />
      </div>
      <div className="md:py-10 flex flex-col md:flex-row items-start justify-between gap-8">
        <OurMission />
        <OurVision />
      </div>
      <div className="md:py-10 flex flex-col md:flex-row items-start justify-between gap-8">
        <OurValues />
      </div>
    </div>
  );
};

export default AboutUsLayoutTemplate;

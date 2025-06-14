import React from "react";
import OurInspiration from "./components/our_inspiration";
import OurDna from "./components/our_dna";
import OurMotivation from "./components/our_motivation";
import OurMission from "./components/our_mission";
import OurVision from "./components/our_vision";

const AboutUsLayoutTemplate = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="w-full">
        <OurInspiration />
      </div>
      <div className="py-10 flex items-start justify-between gap-4">
        <OurDna />
        <OurMotivation />
      </div>
      <div className="py-10 flex items-start justify-between gap-4">
        <OurMission />
        <OurVision />
      </div>
    </div>
  );
};

export default AboutUsLayoutTemplate;

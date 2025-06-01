import React from "react";
import MainBody from "./components/main_body";
import OurServiceCard from "./components/our_services";
import CustomWorldMap from "../../../components/custom_world_map/component";
import WhoWeAre from "./components/who_we_are";
import Support from "./components/support";
import WhatWeDo from "./components/what_We_do";

const HomeLayoutTemplate = () => {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <MainBody />
      </div>
      <div>
        <OurServiceCard />
      </div>
      <div className="w-full mt-5">
        <WhoWeAre />
      </div>
      <div>
        <Support />
      </div>
      <div>
        <WhatWeDo />
      </div>
      <div className="w-full mt-5">
        <CustomWorldMap />
      </div>
    </div>
  );
};

export default HomeLayoutTemplate;

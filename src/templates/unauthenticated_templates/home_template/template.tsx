import React from "react";
import MainBody from "./components/main_body";
import OurServiceCard from "./components/our_services";
import CustomWorldMap from "../../../components/custom_world_map/component";
import WhoWeAre from "./components/who_we_are";

const HomeLayoutTemplate = () => {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <MainBody />
      </div>
      <div>
        <OurServiceCard />
      </div>
      <div>
        <WhoWeAre />
      </div>
      <div>
        <CustomWorldMap />
      </div>
    </div>
  );
};

export default HomeLayoutTemplate;

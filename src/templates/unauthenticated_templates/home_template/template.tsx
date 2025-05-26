import React from "react";
import MainBody from "./components/main_body";
import OurServiceCard from "./components/our_services";

const HomeLayoutTemplate = () => {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <MainBody />
      </div>
      <div>
        <OurServiceCard />
      </div>
    </div>
  );
};

export default HomeLayoutTemplate;

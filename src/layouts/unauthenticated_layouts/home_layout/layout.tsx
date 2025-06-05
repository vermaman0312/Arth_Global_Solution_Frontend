import React from "react";
import HomeLayoutTemplate from "../../../templates/unauthenticated_templates/home_template/template";
import CustomFooter from "../../../components/custom_footer/component";

const HomePageLayout = () => {
  return (
    <div className="w-full">
      <HomeLayoutTemplate />
      <div className="mt-5">
        <CustomFooter />
      </div>
    </div>
  );
};

export default HomePageLayout;

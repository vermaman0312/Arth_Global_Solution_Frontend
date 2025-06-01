import React from "react";
import HomeLayoutTemplate from "../../../templates/unauthenticated_templates/home_template/template";
import CustomFooter from "../../../components/custom_footer/component";

const HomePageLayout = () => {
  return (
    <div className="w-full">
      <HomeLayoutTemplate />
      <CustomFooter />
    </div>
  );
};

export default HomePageLayout;

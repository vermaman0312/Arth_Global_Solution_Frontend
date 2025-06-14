import React from "react";
import CustomFooter from "../../../components/custom_footer/component";
import AboutUsLayoutTemplate from "../../../templates/unauthenticated_templates/aboutus_template/template";

const AboutUsPageLayout = () => {
  return (
    <div className="w-full">
      <AboutUsLayoutTemplate />
      <div className="mt-5">
        <CustomFooter />
      </div>
    </div>
  );
};

export default AboutUsPageLayout;

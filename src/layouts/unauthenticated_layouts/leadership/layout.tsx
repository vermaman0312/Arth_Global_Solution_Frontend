import React from "react";
import CustomFooter from "../../../components/custom_footer/component";
import LeadershipLayoutTemplate from "../../../templates/unauthenticated_templates/leadership/template";

const LeadershipPageLayout = () => {
  return (
    <div className="w-full">
      <LeadershipLayoutTemplate />
      <div className="mt-5">
        <CustomFooter />
      </div>
    </div>
  );
};

export default LeadershipPageLayout;

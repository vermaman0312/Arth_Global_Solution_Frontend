import React from "react";
import CustomStickyScrollReveal from "../../../../components/custom_sticky_scroll_reveal/component";
import CustomLabel from "../../../../components/custom_label/component";

const WhoWeAre = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <CustomLabel className="text-4xl text-foreground-primary font-semibold">
          Who We Are
        </CustomLabel>
      </div>
      <CustomStickyScrollReveal />
    </div>
  );
};

export default WhoWeAre;

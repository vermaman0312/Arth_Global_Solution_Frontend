import React from "react";
import CustomStickyScrollReveal from "../../../../components/custom_sticky_scroll_reveal/component";
import CustomLabel from "../../../../components/custom_label/component";

const WhoWeAre = () => {
  return (
    <div>
      <div className="w-full py-10">
        <CustomLabel className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-foreground-primary font-sans">
          Who we are
        </CustomLabel>
      </div>
      <CustomStickyScrollReveal />
    </div>
  );
};

export default WhoWeAre;

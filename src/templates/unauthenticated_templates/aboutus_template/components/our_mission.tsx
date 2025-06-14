import React from "react";
import CustomLabel from "../../../../components/custom_label/component";

const OurMission = () => {
  return (
    <div className="w-full flex flex-col items-start justify-start gap-4">
      <div className="w-full overflow-hidden">
        <CustomLabel className="max-w-7xl mx-auto text-xl md:text-4xl font-bold text-foreground-primary font-sans z-10">
          <span className="text-foreground-secondary bg-background-secondary p-2 rounded-tr-lg">
            O
          </span>
          ur Mission
        </CustomLabel>
      </div>
      <CustomLabel className="text-md font-normal text-foreground-primary font-sans z-10">
        Skillfully applying the most sought-after, fast-growing pertinent
        technology to yield total solutions in the most critical business areas.
      </CustomLabel>
    </div>
  );
};

export default OurMission;

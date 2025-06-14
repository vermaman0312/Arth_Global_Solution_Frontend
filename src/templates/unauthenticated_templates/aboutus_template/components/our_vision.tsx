import React from "react";
import CustomLabel from "../../../../components/custom_label/component";

const OurVision = () => {
  return (
    <div className="w-full flex flex-col items-start justify-start gap-4">
      <div className="w-full overflow-hidden">
        <CustomLabel className="max-w-7xl mx-auto text-xl md:text-4xl font-bold text-foreground-primary font-sans z-10">
          <span className="text-foreground-secondary bg-background-secondary p-2 rounded-tr-lg">
            O
          </span>
          ur Vision
        </CustomLabel>
      </div>
      <CustomLabel className="text-md font-normal text-foreground-primary font-sans z-10">
        Consistently deliver ingenious, comprehensive, efficient, cost-effective
        business solutions through IT for the global market by creating a
        professionally stimulating and happy environment for our team where
        professionals thrive alongside the growth of our company.
      </CustomLabel>
    </div>
  );
};

export default OurVision;

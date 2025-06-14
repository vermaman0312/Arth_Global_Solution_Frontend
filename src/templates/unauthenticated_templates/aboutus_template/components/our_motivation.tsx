import React from "react";
import CustomLabel from "../../../../components/custom_label/component";

const OurMotivation = () => {
  return (
    <div className="w-full flex flex-col items-start justify-start gap-4">
      <div className="w-full overflow-hidden">
        <CustomLabel className="max-w-7xl mx-auto text-xl md:text-4xl font-bold text-foreground-primary font-sans z-10">
          <span className="text-foreground-secondary bg-background-secondary p-2 rounded-tr-lg">
            O
          </span>
          ur Motivation
        </CustomLabel>
      </div>
      <CustomLabel className="text-md font-normal text-foreground-primary font-sans z-10">
        Gateway Group’s entrepreneurial genome is its key differentiation. Our
        customers globally have experienced the founding principles of
        integrity, ethics, and commitment that has inspired the group to
        outperform challenges over the past two decades. On an equitable
        landscape of skills, expertise and track record and a strong belief in
        our value system, empowers the group, in all its ventures and brands to
        succeed.
      </CustomLabel>
    </div>
  );
};

export default OurMotivation;

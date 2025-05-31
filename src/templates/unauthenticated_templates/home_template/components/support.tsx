import React from "react";
import CustomLabel from "../../../../components/custom_label/component";
import CustomLampSection from "../../../../components/custom_lamp_section/component";

const Support = () => {
  return (
    <div className="p-4 rounded-3xl flex flex-col items-center justify-center gap-2">
      <CustomLampSection className="flex flex-col items-center justify-center gap-2">
        <CustomLabel className="text-[#DAC5A7] text-center text-4xl font-medium tracking-tight">
          ✅ 360° Support
        </CustomLabel>
        <CustomLabel className="text-[#DAC5A7] text-center text-4xl font-medium tracking-tight">
          🤝 Reliable & Transparent
        </CustomLabel>
        <CustomLabel className="text-[#DAC5A7] text-center text-4xl font-medium tracking-tight">
          📈 Practical, Scalable Solutions
        </CustomLabel>
      </CustomLampSection>
    </div>
  );
};

export default Support;

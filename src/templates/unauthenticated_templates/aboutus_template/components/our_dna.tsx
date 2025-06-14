import React from "react";
import CustomLabel from "../../../../components/custom_label/component";

const OurDna = () => {
  return (
    <div className="w-full flex flex-col items-start justify-start gap-4">
      <div className="w-full overflow-hidden">
        <CustomLabel className="max-w-7xl mx-auto text-xl md:text-4xl font-bold text-foreground-primary font-sans z-10">
          <span className="text-foreground-secondary bg-background-secondary p-2 rounded-tr-lg">
            O
          </span>
          ur DNA
        </CustomLabel>
      </div>
      <CustomLabel className="text-md font-normal text-foreground-primary font-sans z-10">
        The inherent DNA of each Gateway Group company is to deliver tangible
        and measurable business value to our global clients. We have ingrained
        it across all our strategic initiatives and brands. The guiding values
        and principles are sustained across all our enterprises by building an
        environment that integrates cutting edge technologies, scalable
        infrastructure and culture across our global offices.
      </CustomLabel>
    </div>
  );
};

export default OurDna;

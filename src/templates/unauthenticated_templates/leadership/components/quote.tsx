import React from "react";
import CustomLabel from "../../../../components/custom_label/component";

const Quotes = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-around gap-4">
      <CustomLabel className="text-4xl font-bold text-center">
        IT'S ALL ABOUT <span className="text-orange-600">PEOPLE</span>
      </CustomLabel>
      <CustomLabel className="md:w-[60%] text-md font-normal text-center">
        ❝I didn’t set out to build just a company I set out to build a
        movement. A movement that simplifies complexity, uplifts those who dare
        to dream, and empowers change-makers across every corner of society.
        Because I believe that true leadership is not in control it's in
        contribution. And when we contribute with purpose, passion, and
        integrity, we don’t just build businesses we build a better nation.❞
      </CustomLabel>
    </div>
  );
};

export default Quotes;

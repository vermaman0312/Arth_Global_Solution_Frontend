import React from "react";
import { TypewriterEffect } from "../../../../components/custom_typewriter/component";
import CustomLabel from "../../../../components/custom_label/component";
import CustomMovieBorderButton from "../../../../components/custo_moving_border_button/component";

const words = [
  {
    text: "EMPOWERING",
    className: "text-[#DAC5A7] text-2xl md:text-4xl text-center",
  },
  {
    text: "GROWTH",
    className: "text-[#DAC5A7] text-2xl md:text-4xl text-center",
  },
  {
    text: "WITH",
    className: "text-[#DAC5A7] text-2xl md:text-4xl text-center",
  },
  {
    text: "SMART,",
    className: "text-[#DAC5A7] text-2xl md:text-4xl text-center",
  },
  {
    text: "AFFORDABLE,",
    className:
      "text-blue-500 dark:text-blue-500 text-2xl md:text-4xl text-center",
  },
  {
    text: "AND",
    className:
      "text-blue-500 dark:text-blue-500 text-2xl md:text-4xl text-center",
  },
  {
    text: "EXPERT",
    className:
      "text-blue-500 dark:text-blue-500 text-2xl md:text-4xl text-center",
  },
  {
    text: "SOLUTIONS",
    className:
      "text-blue-500 dark:text-blue-500 text-2xl md:text-4xl text-center",
  },
];

const MainBody = () => {
  const phoneNumber = "+916205240414";
  const whatsappMessage = "Hi, I would like to connect with you!";

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.me/${phoneNumber.replace(
      "+",
      ""
    )}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="h-[30rem] bg-gray-700 bg-opacity-30 rounded-3xl flex flex-col items-center justify-center gap-8">
      <div className="w-full md:w-[70%] px-4 md:px-0">
        <TypewriterEffect words={words} />
      </div>
      <div className="w-full md:w-[70%] px-4 md:px-0 flex items-center justify-center">
        <CustomLabel className="text-center text-foreground-primary font-light">
          Your trusted partner for NGO, MSME, Compliance, Legal & IT services.
        </CustomLabel>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <CustomMovieBorderButton onClick={handleCallClick}>
          📞 Book Free Consultation
        </CustomMovieBorderButton>
        <CustomMovieBorderButton onClick={handleWhatsAppClick}>
          💬 WhatsApp Now
        </CustomMovieBorderButton>
      </div>
    </div>
  );
};

export default MainBody;

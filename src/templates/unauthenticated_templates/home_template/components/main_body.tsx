import { useEffect, useRef, useState } from "react";
import { TypewriterEffect } from "../../../../components/custom_typewriter/component";
import CustomLabel from "../../../../components/custom_label/component";
import iconWhatsapp from "../../../../assets/icons/whatsapp.svg";
import iconCall from "../../../../assets/icons/call.svg";
import CustomInputField from "../../../../components/custom_input_field/component";
import CustomTextarea from "../../../../components/custom_textarea/component";
import { LanguageSelector } from "../../../../react-intl/languageSelector";

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
  const formRef = useRef<HTMLDivElement>(null);
  const phoneNumber = "+916205240414";
  const whatsappMessage = "Hi, I would like to connect with you!";
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.me/${phoneNumber.replace(
      "+",
      ""
    )}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="h-[30rem] bg-background-secondary bg-opacity-30 rounded-3xl flex flex-col items-center justify-center gap-8 relative">
      <div className="w-full md:w-[70%] px-4 md:px-0">
        <TypewriterEffect words={words} />
      </div>
      <div className="w-full md:w-[70%] px-4 md:px-0 flex items-center justify-center">
        <CustomLabel className="text-center text-foreground-secondary font-light">
          Your trusted partner for NGO, MSME, Compliance, Legal & IT services.
        </CustomLabel>
      </div>

      <div className="absolute top-4 right-4">
        <LanguageSelector />
      </div>

      <div className="p-2 absolute right-4 bottom-4 flex flex-row md:flex-col items-center justify-center gap-4">
        <div
          onClick={() => setIsOpen(true)}
          className={`w-8 h-8 overflow-hidden bg-background-primary rounded-full p-2 shadow-lg shadow-black ${
            isOpen ? "animate-ping" : "animate-bounce md:animate-pulse"
          } hover:animate-none cursor-pointer`}
        >
          <img src={iconCall} className="w-full h-full cursor-pointer" />
        </div>
        <div
          onClick={handleWhatsAppClick}
          className={`w-8 h-8 overflow-hidden bg-background-primary rounded-full p-2 shadow-lg shadow-black animate-bounce md:animate-pulse hover:animate-none cursor-pointer`}
        >
          <img src={iconWhatsapp} className="w-full h-full cursor-pointer" />
        </div>
      </div>

      {isOpen && (
        <div
          ref={formRef}
          className="w-[95%] md:w-[25rem] absolute left-1/2 transform -translate-x-1/2 bg-gray-200 rounded-3xl shadow-lg shadow-gray-900"
        >
          <div className="w-full h-12 bg-red-500 rounded-t-3xl flex items-center justify-center">
            <CustomLabel className="text-xl font-semibold text-foreground-secondary">
              Contact Form
            </CustomLabel>
          </div>
          <div className="w-full p-4 flex flex-col items-center justify-center gap-2">
            <div className="w-full">
              <CustomInputField
                label="Email Address"
                type="email"
                placeholder="example@example.com"
              />
            </div>
            <div className="w-full">
              <CustomInputField
                label="Phone Number"
                type="cell"
                placeholder="+91-XXXXXXXXXX"
              />
            </div>
            <div className="w-full">
              <CustomTextarea
                label="Message:"
                placeholder="write a message here..."
              />
            </div>
            <div className="w-full mt-5">
              <button
                onClick={() => setIsOpen(false)}
                className="bg-background-secondary py-3 text-foreground-secondary p-2 rounded-3xl w-full text-xs"
              >
                Send request
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainBody;

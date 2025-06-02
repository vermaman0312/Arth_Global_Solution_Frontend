import React from "react";
import CustomLabel from "../custom_label/component";
import {
  ArrowBigRight,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";

const CustomFooter = () => {
  return (
    <div className="h-[36rem] md:h-[18.5rem] flex flex-col items-end justify-end relative">
      <div
        className="w-[90%] h-12 absolute top-0 left-1/2 transform -translate-x-1/2 z-10 rounded-xl shadow-md shadow-black flex items-center justify-around gap-4"
        style={{
          backgroundImage: "linear-gradient(to right, #A1FFCE, #FAFFD1)",
        }}
      >
        <CustomLabel className="text-foreground-primary cursor-pointer text-md font-semibold">
          Take a call today
        </CustomLabel>
        <button className="text-xs bg-orange-600 p-2 rounded-3xl px-4">Get started</button>
      </div>
      <div className="w-full md:h-[17rem] bg-background-secondary bg-opacity-30 rounded-t-3xl flex flex-col items-center justify-center gap-8 relative p-4">
        <div className="w-full h-full mt-5 flex flex-col items-center justify-center">
          <div className="w-full h-full flex md:flex-row flex-col items-center justify-center md:justify-between gap-4">
            <div className="w-full h-full flex flex-col items-center justify-center gap-4">
              <CustomLabel className="text-foreground-secondary cursor-pointer font-bold text-xl">
                ARTH GLOBAL SOLUTION
              </CustomLabel>
              <div className="flex flex-wrap items-center justify-start gap-4">
                <Instagram className="w-6 h-6 text-foreground-secondary cursor-pointer" />
                <Facebook className="w-6 h-6 text-foreground-secondary cursor-pointer" />
                <Youtube className="w-6 h-6 text-foreground-secondary cursor-pointer" />
                <Twitter className="w-6 h-6 text-foreground-secondary cursor-pointer" />
              </div>
            </div>
            <div className="w-full h-full">
              <div>
                <CustomLabel className="text-foreground-secondary cursor-pointer font-semibold text-xl">
                  Our Company
                </CustomLabel>
              </div>
              <div className="w-full flex flex-col items-start justify-start gap-2 text-foreground-secondary overflow-x-auto scrollbar-hidden">
                <div className="flex items-center justify-center gap-2 cursor-pointer">
                  <ArrowBigRight className="flex-shrink-0 w-5 h-5" />
                  <CustomLabel className="flex-shrink-0 text-foreground-secondary cursor-pointer font-light">
                    About us
                  </CustomLabel>
                </div>
                <div className="flex items-center justify-center gap-2 cursor-pointer">
                  <ArrowBigRight className="flex-shrink-0 w-5 h-5" />
                  <CustomLabel className="flex-shrink-0 text-foreground-secondary cursor-pointer font-light">
                    Career
                  </CustomLabel>
                </div>
                <div className="flex items-center justify-center gap-2 cursor-pointer">
                  <ArrowBigRight className="flex-shrink-0 w-5 h-5" />
                  <CustomLabel className="flex-shrink-0 text-foreground-secondary cursor-pointer font-light">
                    FAQs
                  </CustomLabel>
                </div>
                <div className="flex items-center justify-center gap-2 cursor-pointer">
                  <ArrowBigRight className="flex-shrink-0 w-5 h-5" />
                  <CustomLabel className="flex-shrink-0 text-foreground-secondary cursor-pointer font-light">
                    Teams
                  </CustomLabel>
                </div>
                <div className="flex items-center justify-center gap-2 cursor-pointer">
                  <ArrowBigRight className="flex-shrink-0 w-5 h-5" />
                  <CustomLabel className="flex-shrink-0 text-foreground-secondary cursor-pointer font-light">
                    Contact us
                  </CustomLabel>
                </div>
              </div>
            </div>
            <div className="w-full h-full flex flex-col items-center justify-start gap-3">
              <div className="w-full flex flex-col items-start justify-start gap-2">
                <CustomLabel className="text-foreground-secondary cursor-pointer text-md font-semibold">
                  Let's Do It.
                </CustomLabel>
                <div className="flex flex-wrap items-center justify-start gap-4">
                  <Instagram className="w-6 h-6 text-foreground-secondary cursor-pointer" />
                  <Facebook className="w-6 h-6 text-foreground-secondary cursor-pointer" />
                  <Youtube className="w-6 h-6 text-foreground-secondary cursor-pointer" />
                  <Twitter className="w-6 h-6 text-foreground-secondary cursor-pointer" />
                </div>
              </div>
              <div className="w-full flex flex-col items-start justify-start gap-2">
                <div className="flex flex-col">
                  <CustomLabel className="text-foreground-secondary cursor-pointer text-md font-semibold">
                    Suscribe
                  </CustomLabel>
                  <CustomLabel className="text-foreground-secondary cursor-pointer text-xs font-light">
                    Subscribe to stay tuned for new web design and latest
                    updates. Let's do it!
                  </CustomLabel>
                </div>
                <div className="w-full flex items-center justify-start gap-[2px]">
                  <input
                    placeholder="example@example.com"
                    type="email"
                    className="p-2 text-xs w-full outline-none focus:outline-none rounded-tl-md rounded-bl-md"
                  />
                  <button className="bg-gray-500 p-2 text-xs text-foreground-secondary px-4 rounded-tr-md rounded-br-md">
                    Suscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full border-t flex flex-wrap items-center justify-center md:justify-between gap-2 mt-5 md:mt-0">
            <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
              <CustomLabel className="text-foreground-secondary cursor-pointer font-light">
                Privacy Policy
              </CustomLabel>
              <CustomLabel className="text-foreground-secondary cursor-pointer font-light">
                Terms of Use
              </CustomLabel>
              <CustomLabel className="text-foreground-secondary cursor-pointer font-light">
                Legal
              </CustomLabel>
              <CustomLabel className="text-foreground-secondary cursor-pointer font-light">
                Site Map
              </CustomLabel>
            </div>
            <div>
              <CustomLabel className="text-foreground-secondary">
                © 2021 All Rights Reserved
              </CustomLabel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomFooter;

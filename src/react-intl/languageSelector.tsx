import { useContext, useState } from "react";
import { Languages } from "lucide-react";
import { LanguageContext } from "./languageContext";
import CustomLabel from "../components/custom_label/component";

export function LanguageSelector() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("LanguageSelector must be used within a LanguageProvider");
  }

  const { language, setLanguage } = context;

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
  };

  return (
    <div className="flex items-center flex-col justify-center gap-1">
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="border-2 p-2 rounded-full h-8 w-8 bg-background-primary flex items-center justify-center cursor-pointer text-xs font-semibold text-foreground-primary select-none"
      >
        {language ? (
          language === "en-GB" ? (
            "EN"
          ) : (
            "HI"
          )
        ) : (
          <Languages className="w-5 h-5 text-foreground-primary select-none" />
        )}
      </div>
      {isOpen && (
        <div className="border p-2 w-8 h-20 bg-background-primary flex flex-col items-center justify-center gap-2 rounded-full select-none">
          <CustomLabel
            onClick={() => {
              handleLanguageChange("en-GB");
              setIsOpen(false);
            }}
            className="border-b border-secondary font-semibold text-foreground-primary cursor-pointer select-none"
          >
            EN
          </CustomLabel>
          <CustomLabel
            onClick={() => {
              handleLanguageChange("hi-IN");
              setIsOpen(false);
            }}
            className="border-b border-secondary font-semibold text-foreground-primary cursor-pointer select-none"
          >
            HI
          </CustomLabel>
        </div>
      )}
    </div>
  );
}

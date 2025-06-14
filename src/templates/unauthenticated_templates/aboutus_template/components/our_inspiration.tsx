import CustomLabel from "../../../../components/custom_label/component";
import { useTranslation } from "../../../../react-intl/useTranslation";

const OurInspiration = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col md:flex-row w-full items-start justify-between gap-4">
      <div className="bg-red-400 w-full md:w-96 h-[27rem] flex-shrink-0"></div>
      <div className="w-full h-full">
        <div className="w-full overflow-hidden">
          <CustomLabel className="max-w-7xl pl-4 mx-auto text-xl md:text-4xl font-bold text-foreground-primary font-sans z-10">
            <span className="text-foreground-secondary bg-background-secondary p-2 rounded-tr-lg">
              {t("unauthenticated_page.about_us_page.our_inspiration_title")[0]}
            </span>
            {t(
              "unauthenticated_page.about_us_page.our_inspiration_title"
            ).slice(1)}
          </CustomLabel>
        </div>
        <div className="w-full relative mt-5 pl-4">
          <CustomLabel className="text-md font-normal text-foreground-primary font-sans z-10">
            {t(
              "unauthenticated_page.about_us_page.our_inspiration_description_1"
            )}
          </CustomLabel>
        </div>
        <div className="w-full relative mt-5 pl-4">
          <CustomLabel className="mt-5 text-md font-normal text-foreground-primary font-sans z-10">
            {t(
              "unauthenticated_page.about_us_page.our_inspiration_description_2"
            )}
          </CustomLabel>
        </div>
        <div className="w-full relative mt-5 pl-4">
          <CustomLabel className="mt-5 text-md font-normal text-foreground-primary font-sans z-10">
            {t(
              "unauthenticated_page.about_us_page.our_inspiration_description_3"
            )}
          </CustomLabel>
        </div>
        <div className="w-full flex flex-col items-end justify-end relative mt-5 pl-4">
          <CustomLabel className="mt-5 text-xl font-bold font-handwritten text-foreground-primary font-sans z-10">
            {t("unauthenticated_page.about_us_page.founder_name")}
          </CustomLabel>
          <CustomLabel className="text-md font-normal text-foreground-primary font-sans z-10">
            {t("unauthenticated_page.about_us_page.founder_post")}
          </CustomLabel>
        </div>
      </div>
    </div>
  );
};

export default OurInspiration;

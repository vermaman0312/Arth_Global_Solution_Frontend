import React from "react";
import CustomLabel from "../../../../components/custom_label/component";
import { useTranslation } from "../../../../react-intl/useTranslation";

const MainFounder = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col md:flex-row w-full items-start justify-between gap-4">
      <div className="w-full md:w-96 h-[30rem] flex-shrink-0 flex flex-col items-center justify-between">
        <div className="bg-red-400 w-full md:w-96 h-[25rem] flex-shrink-0"></div>
        <CustomLabel className="text-center text-md font-semibold py-2">
          ❝Building a better tomorrow begins with the courage to challenge
          today.❞
        </CustomLabel>
      </div>
      <div className="w-full h-full">
        <div className="w-full relative mt-5 pl-4">
          <CustomLabel className="text-md text-justify font-normal text-foreground-primary font-sans">
            When I started this journey, it was never just about creating a
            company — it was about creating a platform where dreams get the
            direction they deserve. Whether it's a grassroots NGO struggling
            with compliance or a startup with a brilliant idea but no support,
            our mission has always been clear: simplify the path so others can
            move forward faster and with confidence. At every step, I have
            believed in people — their ideas, their passion, and their ability
            to bring change. Through ethical governance, inclusive growth, and
            technology-led solutions, we aim to become more than just a service
            provider — we aim to be your long-term partner in purpose and
            progress.
          </CustomLabel>
        </div>
        <div className="w-full relative mt-5 pl-4">
          <CustomLabel className="mt-5 text-md text-justify font-normal text-foreground-primary font-sans">
            Atal Verma is a visionary leader and entrepreneur with a passion for
            nation-building through innovation, impact, and inclusive growth.
            With a deep understanding of India’s regulatory ecosystem and the
            challenges faced by early-stage ventures and social initiatives, he
            founded the company with a clear mission — to simplify complexity
            and empower those working on the ground. His leadership blends
            strategic clarity with empathetic execution, making him a trusted
            advisor to startups, NGOs, and emerging businesses. Known for his
            grounded thinking and ambitious vision, Atal Verma continues to
            inspire a culture of integrity, innovation, and purpose across the
            organization.
          </CustomLabel>
        </div>
        <div className="w-full flex flex-col items-end justify-end relative mt-5 pl-4">
          <CustomLabel className="mt-5 text-xl font-bold font-handwritten text-foreground-primary font-sans">
            {t("unauthenticated_page.about_us_page.founder_name")}
          </CustomLabel>
          <CustomLabel className="text-md font-normal text-foreground-primary font-sans">
            {t("unauthenticated_page.about_us_page.founder_post")}
          </CustomLabel>
        </div>
      </div>
    </div>
  );
};

export default MainFounder;

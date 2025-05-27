import React from "react";
import CustomLabel from "../../../../components/custom_label/component";
import { HoverEffect } from "../../../../components/custom_hover_card/ui";

const projects = [
  {
    title: "NGO SUPPORT",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "MSME & STARTUP ASSISTANCE",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "LEGAL & COMPLIANCE",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "FINANCE & AUDITING",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "IT & DIGITAL SETUP",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "PROJECT EXECUTION & FUNDRAISING",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];

const OurServiceCard = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-8">
      <div className="flex items-center justify-center">
        <CustomLabel className="text-4xl text-[#DAC5A7]">Our Services</CustomLabel>
      </div>
      <div className="flex items-center justify-center flex-wrap gap-4">
        <HoverEffect items={projects} />
      </div>
    </div>
  );
};

export default OurServiceCard;

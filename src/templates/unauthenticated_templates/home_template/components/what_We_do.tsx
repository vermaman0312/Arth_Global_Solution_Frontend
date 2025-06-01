import React from "react";
import CustomHeroParallex from "../../../../components/custom_hero_parallex/component";

export const products = [
  {
    title: "NGO SUPPORT",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "MSME & STARTUP ASSISTANCE",
    link: "https://cursor.so",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  {
    title: "LEGAL & COMPLIANCE",
    link: "https://userogue.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/rogue.png",
  },

  {
    title: "FUNCDING & AUDITING",
    link: "https://editorially.org",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "IT & DIGITAL SETUP",
    link: "https://editrix.ai",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "PROJECT EXECUTION & FUNDRAISING",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },
  {
    title: "NGO SUPPORT",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "MSME & STARTUP ASSISTANCE",
    link: "https://cursor.so",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  {
    title: "LEGAL & COMPLIANCE",
    link: "https://userogue.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/rogue.png",
  },

  {
    title: "FUNCDING & AUDITING",
    link: "https://editorially.org",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "IT & DIGITAL SETUP",
    link: "https://editrix.ai",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "FUNCDING & AUDITING",
    link: "https://editorially.org",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "IT & DIGITAL SETUP",
    link: "https://editrix.ai",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "MSME & STARTUP ASSISTANCE",
    link: "https://cursor.so",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  {
    title: "LEGAL & COMPLIANCE",
    link: "https://userogue.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/rogue.png",
  },
];

const WhatWeDo = () => {
  return (
    <div className="w-full">
      <CustomHeroParallex
        items={products}
        title="What We Do!"
        description="We empower NGOs, startups, and businesses with end-to-end support across
              compliance, funding, digital solutions, and project execution. From
              legal registrations to audits, websites to fundraising, our expert
              services help turn ideas into impact."
      />
      <div className="w-full flex items-center justify-end">
        <button className="mt-5 bg-background-secondary text-foreground-secondary p-2 px-4 rounded-3xl text-xs">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default WhatWeDo;

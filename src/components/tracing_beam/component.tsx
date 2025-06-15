import React from "react";
import { TracingBeam } from "./ui";
import { twMerge } from "tailwind-merge";
import CustomLabel from "../custom_label/component";

interface ContentType {
  title: string;
  description: React.ReactNode;
  badge: string;
  image?: string;
}

type props = {
  items: ContentType[];
};

const CustomTracingBeam = ({ ...props }: props) => {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative grid grid-cols-1 md:grid-cols-3 gap-10">
        {props.items.map((item, index) => (
          <div key={`content-${index}`} className="mb-10 flex-shrink-0">
            <h2 className="bg-background-secondary text-foreground-secondary rounded-full text-sm w-fit px-6 py-2 mb-2">
              {item.badge}
            </h2>

            <CustomLabel className={twMerge("text-lg mb-4")}>
              {item.title}
            </CustomLabel>

            <div className="text-sm  prose prose-sm dark:prose-invert mt-5">
              {item?.image && (
                <img
                  src={item.image}
                  alt="blog thumbnail"
                  className="rounded-lg mb-10 object-cover w-[20rem] h-[20rem] flex-shrink-0 mx-auto"
                />
              )}
              <CustomLabel>{item.description}</CustomLabel>
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
};

export default CustomTracingBeam;

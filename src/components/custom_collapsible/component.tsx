import React from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui";
import { ChevronsUpDown } from "lucide-react";

interface TItemsType {
  name: string;
  link: string;
}

type props = {
  title: string;
  items?: Array<string | TItemsType>;
};

const CustomCollapsible = ({ ...props }: props) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="flex w-full flex-col gap-0"
    >
      <div className="flex items-center justify-between">
        <h4 className="relative text-foreground-secondary">{props.title}</h4>
        <CollapsibleTrigger asChild>
          <div className="flex items-center justify-between">
            <ChevronsUpDown className="w-5 h-5 text-foreground-secondary" />
            <span className="sr-only">Toggle</span>
          </div>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="flex flex-col gap-2 overflow-y-auto scrollbar-hidden">
        {props.items?.map((item, index) => {
          const isString = typeof item === "string";
          const label = isString ? item : item.name;
          return (
            <div
              key={index}
              className="rounded-md border border-gray-500 px-4 py-2 font-poppins text-sm mt-2 text-foreground-secondary"
            >
              {label}
            </div>
          );
        })}
      </CollapsibleContent>
    </Collapsible>
  );
};

export default CustomCollapsible;

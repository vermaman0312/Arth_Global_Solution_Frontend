import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui";
import { cn } from "../../utils/cn";

interface TItemsType {
  name: string | number;
  value: string | number;
}

type props = {
  title?: string;
  contentTitle?: string;
  className?: string;
  onError?: boolean;
  items: Array<TItemsType>;
};

const CustomSelect = ({ ...props }: props) => {
  return (
    <Select>
      <SelectTrigger
        className={cn(
          `w-full h-12 border ${
            props.onError
              ? "border-input-border-danger placeholder:text-input-placeholder-foreground-danger"
              : "border-input-border-primary placeholder:text-input-placeholder-foreground-primary"
          } bg-input-background-primary rounded-xl placeholder:text-xs text-foreground text-xs py-2 active:border-none focus:border-none focus:ring-0 focus:border-transparent`,
          props.className
        )}
      >
        <SelectValue
          className={`text-xs ${
            props.onError
              ? "text-input-placeholder-foreground-danger"
              : "text-input-placeholder-foreground-primary"
          }`}
          placeholder={props.title}
        />
      </SelectTrigger>
      {props.items.length > 0 && (
        <SelectContent className="bg-white">
          <SelectGroup>
            {props.contentTitle && (
              <SelectLabel>{props.contentTitle}</SelectLabel>
            )}
            {props.items.map((item, index) => {
              return (
                <SelectItem
                  key={index}
                  className="text-xs text-input-placeholder-foreground-primary"
                  value={item.value as string}
                >
                  {item.name}
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      )}
    </Select>
  );
};

export default CustomSelect;

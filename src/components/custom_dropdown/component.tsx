import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "./ui";
import { cn } from "../../utils/cn";
import { useTranslation } from "../../react-intl/useTranslation";

interface TItemsType {
  name: string;
  link: string;
}

type Props = {
  component?: React.ReactNode;
  className?: string;
  title?: string;
  items?: Array<string | TItemsType>;
};

const CustomDropdown = ({ component, className, title, items }: Props) => {
  const { t } = useTranslation();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          className={cn(
            "border-none bg-transparent p-0 focus:border-none active:border-none cursor-pointer",
            className
          )}
        >
          {component}
        </div>
      </DropdownMenuTrigger>
      {items && items.length > 0 && (
        <DropdownMenuContent className="w-56 bg-background-secondary rounded-2xl p-2 mt-5 border-none">
          {title && (
            <DropdownMenuLabel className="text-white">
              {t(title)}
            </DropdownMenuLabel>
          )}
          <div className="my-1 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
          <DropdownMenuGroup>
            {items.map((item, index) => {
              const isString = typeof item === "string";
              const label = isString ? item : item.name;

              return (
                <DropdownMenuItem
                  className="w-full hover:bg-gray-500 bg-opacity-30 rounded-xl cursor-pointer text-white"
                  key={index}
                  onClick={() => {
                    if (!isString && item.link) {
                      window.location.href = item.link;
                    }
                  }}
                >
                  {t(label)}
                  <DropdownMenuShortcut>{`⇧⌘${
                    label.split("")[0]
                  }`}</DropdownMenuShortcut>
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
        </DropdownMenuContent>
      )}
    </DropdownMenu>
  );
};

export default CustomDropdown;

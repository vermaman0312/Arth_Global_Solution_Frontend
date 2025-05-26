import React from "react";
import { Label } from "./ui";
import { cn } from "../../utils/cn";

type props = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

const CustomLabel = ({ ...props }: props) => {
  return (
    <Label
      onClick={props.onClick}
      className={cn(
        "text-xs font-normal text-foreground-primary",
        props.className
      )}
    >
      {props.children}
    </Label>
  );
};

export default CustomLabel;

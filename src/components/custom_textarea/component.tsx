import React from "react";
import { Textarea } from "./ui";
import LabelInputContainer from "../custom_input_field/input_label_container";
import { cn } from "../../utils/cn";
import { Label } from "../custom_label/ui";

type props = {
  id?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onError?: boolean;
  className?: string;
  labelClassName?: string;
  disabled?: boolean;
};

const CustomTextarea = ({ ...props }: props) => {
  return (
    <LabelInputContainer className={cn("", props.className)}>
      {props.label && (
        <Label
          className={cn("text-foreground-primary", props.labelClassName)}
          htmlFor={props.id}
        >
          {`${props.label}`}
        </Label>
      )}
      <Textarea
        disabled={props.disabled}
        id={props.id}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        rows={4}
        className={`${
          props.onError
            ? "placeholder:text-foreground-danger bg-background-danger bg-opacity-40"
            : ""
        } placeholder:text-xs text-xs text-foreground-primary bg-background-primary max-h-24 scrollbar-hidden`}
      />
    </LabelInputContainer>
  );
};

export default CustomTextarea;

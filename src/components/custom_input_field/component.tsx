import React from "react";
import LabelInputContainer from "./input_label_container";
import { Label } from "../custom_label/ui";
import { Input } from "./ui";
import { cn } from "../../utils/cn";

type props = {
  id?: string;
  label?: string;
  type: "email" | "text" | "number" | "cell" | "password";
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onError?: boolean;
  className?: string;
  labelClassName?: string;
  disabled?: boolean;
};

const CustomInputField = ({ ...props }: props) => {
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
      <Input
        disabled={props.disabled}
        id={props.id}
        placeholder={props.placeholder}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        className={`${
          props.onError
            ? "placeholder:text-foreground-danger bg-background-danger bg-opacity-40"
            : ""
        } placeholder:text-xs text-xs text-foreground-primary`}
      />
    </LabelInputContainer>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

export default CustomInputField;

import React from "react";
import { Button } from "./ui";

type props = {
  children?: React.ReactNode;
  onClick?: () => void;
};

const CustomMovieBorderButton = ({ ...props }: props) => {
  return (
    <Button
      onClick={props.onClick}
      borderRadius="1.75rem"
      className="bg-transparent text-foreground-primary border-slate-800 font-light"
    >
      {props.children}
    </Button>
  );
};

export default CustomMovieBorderButton;

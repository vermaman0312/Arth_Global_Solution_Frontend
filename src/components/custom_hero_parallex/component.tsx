import React from "react";
import { HeroParallax } from "./ui";

interface TItemsType {
  title: string;
  link: string;
  thumbnail: string;
}

type props = {
  items: Array<TItemsType>;
  title?: string;
  description?: string;
};

const CustomHeroParallex = ({ ...props }: props) => {
  return (
    <HeroParallax
      products={props.items}
      title={props.title}
      description={props.description}
    />
  );
};

export default CustomHeroParallex;

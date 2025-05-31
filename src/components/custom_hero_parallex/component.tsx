import React from "react";
import { HeroParallax } from "./ui";

interface TItemsType {
  title: string;
  link: string;
  thumbnail: string;
}

type props = {
  items: Array<TItemsType>;
};

const CustomHeroParallex = ({ ...props }: props) => {
  return <HeroParallax products={props.items} />;
};

export default CustomHeroParallex;

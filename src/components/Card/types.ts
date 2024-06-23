import { ImageProps } from "next/image";
import { HTMLAttributes } from "react";
import { TransitionLinkProps } from "../TransitionLink";

export type CardProps = {
  image: ImageProps;
  technologies: string;
  details: {
    projectName: string;
    description: string;
    buttons: TransitionLinkProps[] ;
  }
}  & HTMLAttributes<HTMLElement>
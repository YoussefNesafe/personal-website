import { ImageProps } from "next/image";
import { HTMLAttributes } from "react";
import { buttonCVA, TransitionLinkProps } from "../TransitionLink";
import { VariantProps } from "class-variance-authority";

export type CardProps = {
  image: ImageProps;
  technologies: string;
  details: {
    projectName: string;
    description: string;
    buttons: TransitionLinkProps[] ;
  }
}  & HTMLAttributes<HTMLElement>
import { HTMLAttributes } from "react";
import { TransitionLinkProps } from "../TransitionLink";

export  type SectionTitleProps = {
  title: string;
  link? : TransitionLinkProps
} & HTMLAttributes<HTMLElement>



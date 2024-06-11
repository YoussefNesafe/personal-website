import { LinkProps } from "next/link";
import { HTMLAttributes, ReactHTMLElement } from "react";

export  type SectionTitleProps = {
  title: string;
  link? : LinkProps & {title : string}
} & HTMLAttributes<HTMLElement>



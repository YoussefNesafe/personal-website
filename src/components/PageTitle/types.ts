import { HTMLAttributes } from "react";

export type PageTitleProps = {
  title: string;
  description: string;
} & HTMLAttributes<HTMLElement>
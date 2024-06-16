import { TransitionLinkProps } from "@/components/TransitionLink";
import { HTMLAttributes } from "react";

export type BannerProps = HTMLAttributes<HTMLElement> & {
  title: string;
  description: string;
  button: TransitionLinkProps;
}
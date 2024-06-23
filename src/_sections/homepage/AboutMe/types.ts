import { SectionTitleProps } from "@/components/SectionTitle/types";
import { TransitionLinkProps } from "@/components/TransitionLink";
import { ImageProps } from "next/image";
import { HTMLAttributes } from "react";

export type AboutMeSectionProps = {
  header: SectionTitleProps;
  details: {
    text: string;
    link: TransitionLinkProps;
  }
} & HTMLAttributes<HTMLElement>
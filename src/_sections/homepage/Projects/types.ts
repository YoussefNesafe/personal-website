import { CardProps } from "@/components/Card/types";
import { SectionTitleProps } from "@/components/SectionTitle/types";
import { HTMLAttributes } from "react";

export type ProjectsSectionProps = HTMLAttributes<HTMLElement> & {
  header: SectionTitleProps;
  cards: CardProps[];
}
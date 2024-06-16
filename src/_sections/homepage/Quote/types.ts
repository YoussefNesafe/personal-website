import { HTMLAttributes } from "react";

export type QuoteProps = HTMLAttributes<HTMLElement> & {
  text: string;
  name: string;
}
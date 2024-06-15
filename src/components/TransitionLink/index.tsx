"use client"
import { usePathname, useRouter } from "next/navigation"
import { animatePageOut } from "@/utils/animations"
import RightArrow from "../icons/RightArrow";
import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

export type TransitionLinkProps = {
  href: string;
  label: string;
  arrow?: boolean;
} & HTMLAttributes<HTMLElement> & VariantProps<typeof button>

export const button = cva(
  ['flex items-center text-[16px] tablet:text-[16px] desktop:text-[16px] px-[16px] py-[8px] tablet:px-[16px] tablet:py-[8px] desktop:px-[16px] desktop:py-[8px] transition-all']
  , {
    variants: {
      theme: {
        primary: 'border border-primary font-medium hover:bg-primary/20',
        secondary: 'border border-gray font-medium hover:bg-gray/20',
        text: 'border-none hover:none',
      }
    },
    defaultVariants: {
      theme: 'text'
    }
  })

const TransitionLink = ({ href, label, arrow = false, theme, prefix, ...props }: TransitionLinkProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const handleClick = () => {
    if (pathname !== href) {
      animatePageOut(href, router)
    }
  }

  return (
    <button
      {...props}
      className={cn(button({ theme }), props?.className)}
      onClick={handleClick}
    >
      {
        prefix ? <span className='text-primary mr-[1.111vw] tablet:mr-[0.5vw] desktop:mr-[0.293vw]'>{prefix}</span> : <></>
      }
      {label}
      {
        arrow ?
          <RightArrow
            width={18}
            height={18}
            className={'ml-[2.222vw] tablet:ml-[1vw] desktop:ml-[0.586vw] w-[5vw] h-[5vw] tablet:w-[2.25vw] tablet:h-[2.25vw] desktop:w-[1.318vw] desktop:h-[1.318vw]'}
          />
          : <></>
      }
    </button>
  )
}

export default TransitionLink
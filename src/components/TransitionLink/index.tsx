"use client"
import { usePathname, useRouter } from "next/navigation"
import { animatePageOut } from "@/utils/animations"
import RightArrow from "../icons/RightArrow";
import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import Link from "next/link";

export type TransitionLinkProps = {
  href: string;
  label: string;
  arrow?: boolean;
  as?: 'link' | 'button';
} & HTMLAttributes<HTMLElement> & VariantProps<typeof buttonCVA>

export const buttonCVA = cva(
  ['flex items-center text-[4.448vw] tablet:text-[2vw] desktop:text-[1.168vw] px-[4.448vw] py-[2.224vw] tablet:px-[2vw] tablet:py-[1vw] desktop:px-[1.168vw] desktop:py-[0.584vw] transition-all']
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

const TransitionLink = ({ href, label, arrow = false, as = 'button', theme, prefix, ...props }: TransitionLinkProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const handleClick = () => {
    if (pathname !== href) {
      animatePageOut(href, router)
    }
  }


  const Content = () => <>
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
  </>
  if (as === 'link') return (
    <Link {...props} href={href} className={cn(buttonCVA({ theme }), props?.className)} >
      <Content />
    </Link>
  )
  return (
    <button
      {...props}
      className={cn(buttonCVA({ theme }), props?.className)}
      onClick={handleClick}
    >
      <Content />
    </button>
  )
}

export default TransitionLink
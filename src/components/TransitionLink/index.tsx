"use client"
import { usePathname, useRouter } from "next/navigation"
import { animatePageOut } from "@/utils/animations"
import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import RightArrow from "../icons/RightArrow";

export type TransitionLinkProps = {
  href: string;
  label: string;
  arrow?: boolean;
} & HTMLAttributes<HTMLElement>

const TransitionLink = ({ href, label, arrow = false, prefix, ...props }: TransitionLinkProps) => {
  const router = useRouter()
  const pathname = usePathname()

  const handleClick = () => {
    if (pathname !== href) {
      animatePageOut(href, router)
    }
  }

  return (
    <button
      className={twMerge('flex items-center text-[3.889vw] tablet:text-[2.25vw] desktop:text-[1.171vw]', props?.className)}
      onClick={handleClick}
      {...props}
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
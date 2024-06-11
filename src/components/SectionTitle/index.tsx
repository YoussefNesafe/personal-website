import React from 'react'
import { SectionTitleProps } from './types'
import Link from 'next/link'
import RightArrow from '../icons/RightArrow'
import { twMerge } from 'tailwind-merge'
import { cva, VariantProps } from 'class-variance-authority'

const SectionTitle = ({ title, link, line, ...props }: {
  line?: VariantProps<typeof lineThemes> & { className?: string; }
} & SectionTitleProps) => {

  const lineThemes = cva(
    ['block tablet:block h-[0.278vw] tablet:h-[0.125vw] desktop:h-[1px] bg-priamry']
    , {
      variants: {
        size: {
          'sm': ' w-[13.889vw] tablet:w-[11.25vw] desktop:w-[127px]',
          'md': ' w-[16.667vw] tablet:w-[22.5vw] desktop:w-[239px]',
          'lg': ' w-[19.444vw] tablet:w-[28.25vw] desktop:w-[326px]',
          'xl': ' w-[22.222vw] tablet:w-[31.25vw] desktop:w-[500px]',
        }
      },
      defaultVariants: {
        size: 'sm'
      }
    })


  return (
    <div className='flex justify-between items-center w-full font-medium' {...props}>
      <div className='flex items-center gap-[4.444vw] tablet:gap-[2vw] desktop:gap-[16px]'>
        <div className='text-[5.556vw] tablet:text-[4vw] desktop:text-[32px] '>
          <span className='text-priamry mr-[1.111vw] tablet:mr-[0.5vw] desktop:mr-[4px]'>#</span>{title}
        </div>
        <div className={twMerge(lineThemes({ size: line?.size }), line?.className)} />
      </div>
      {link ?
        <Link {...link} className='flex gap-[2.222vw] tablet:gap-[1vw] desktop:gap-[8px] hover:scale-[1.05] transition-all duration-300 ease-linear items-center text-[3.889vw] tablet:text-[2.25vw] desktop:text-[16px]'>
          {link.title}
          <RightArrow width={18} height={18} className={'w-[5vw] h-[5vw] tablet:w-[2.25vw] tablet:h-[2.25vw] desktop:w-[18px] desktop:h-[18px]'} />
        </Link>
        : <></>
      }
    </div>
  )
}

export default SectionTitle
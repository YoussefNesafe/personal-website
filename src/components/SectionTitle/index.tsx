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
    ['block tablet:block h-[0.278vw] tablet:h-[0.125vw] desktop:h-[0.073vw] bg-priamry']
    , {
      variants: {
        size: {
          'sm': ' w-[13.889vw] tablet:w-[11.25vw] desktop:w-[9.297vw]',
          'md': ' w-[16.667vw] tablet:w-[22.5vw] desktop:w-[17.496vw]',
          'lg': ' w-[19.444vw] tablet:w-[28.25vw] desktop:w-[23.865vw]',
          'xl': ' w-[22.222vw] tablet:w-[31.25vw] desktop:w-[36.603vw]',
        }
      },
      defaultVariants: {
        size: 'sm'
      }
    })


  return (
    <div className='flex justify-between items-center w-full font-medium' {...props}>
      <div className='flex items-center gap-[4.444vw] tablet:gap-[2vw] desktop:gap-[1.171vw]'>
        <div className='text-[5.556vw] tablet:text-[4vw] desktop:text-[2.343vw] '>
          <span className='text-priamry mr-[1.111vw] tablet:mr-[0.5vw] desktop:mr-[0.293vw]'>#</span>{title}
        </div>
        <div className={twMerge(lineThemes({ size: line?.size }), line?.className)} />
      </div>
      {link ?
        <Link {...link} className='flex gap-[2.222vw] tablet:gap-[1vw] desktop:gap-[0.586vw] hover:scale-[1.05] transition-all duration-300 ease-linear items-center text-[3.889vw] tablet:text-[2.25vw] desktop:text-[1.171vw]'>
          {link.title}
          <RightArrow width={18} height={18} className={'w-[5vw] h-[5vw] tablet:w-[2.25vw] tablet:h-[2.25vw] desktop:w-[1.318vw] desktop:h-[1.318vw]'} />
        </Link>
        : <></>
      }
    </div>
  )
}

export default SectionTitle
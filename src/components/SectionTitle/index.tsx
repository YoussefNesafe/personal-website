import React from 'react'
import { SectionTitleProps } from './types'
import { twMerge } from 'tailwind-merge'
import { cva, VariantProps } from 'class-variance-authority'
import TransitionLink from '../TransitionLink'

const SectionTitle = ({ title, link, line, ...props }: {
  line?: VariantProps<typeof lineThemes> & { className?: string; }
} & SectionTitleProps) => {

  const lineThemes = cva(
    ['block tablet:block h-[0.278vw] tablet:h-[0.125vw] desktop:h-[0.073vw] bg-primary']
    , {
      variants: {
        size: {
          'sm': 'w-[10vw] tablet:w-[11.25vw] desktop:w-[9.297vw]',
          'md': 'w-[10vw] tablet:w-[22.5vw] desktop:w-[17.496vw]',
          'lg': 'w-[10vw] tablet:w-[28.25vw] desktop:w-[23.865vw]',
          'xl': 'w-[10vw] tablet:w-[31.25vw] desktop:w-[36.603vw]',
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
          <span className='text-primary mr-[1.111vw] tablet:mr-[0.5vw] desktop:mr-[0.293vw]'>#</span>{title}
        </div>
        <div className={twMerge(lineThemes({ size: line?.size }), line?.className)} />
      </div>
      {link ?
        <>
          <TransitionLink {...link} arrow />
        </>
        : <></>
      }
    </div>
  )
}

export default SectionTitle
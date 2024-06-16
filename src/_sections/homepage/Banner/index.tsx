import React from 'react'
import { BannerProps } from './types'
import { twMerge } from 'tailwind-merge'
import TransitionLink from '@/components/TransitionLink'
import Image from 'next/image'

const Banner = ({ button, description, title, className, ...props }: BannerProps) => {
  return (
    <section className={twMerge('gap-[3.892vw] tablet:gap-[10vw] desktop:gap-0', className)} {...props}>
      <div className='text-center desktop:text-left flex flex-col items-center desktop:items-start gap-[3.892vw] tablet:gap-[3.125vw] desktop:gap-[1.825vw]'>
        <h1 dangerouslySetInnerHTML={{ __html: title }} className='text-[8.896vw] tablet:text-[4vw] desktop:text-[2.336vw] font-semibold ' />
        <p className='text-gray text-[4.448vw] tablet:text-[2vw] desktop:text-[1.168vw] desktop:max-w-[33.799vw]'>{description}</p>
        <TransitionLink {...button} theme='primary' />
      </div>
      <div className='relative'>
        <Image
          src='/images/portfolio-image.png'
          alt='portfolio-image'
          width={457}
          height={386}
          className='w-[87.848vw] tablet:w-[70vw] desktop:w-[33.361vw]'
        />
        <Image
          src='/images/rectangle-primary.png'
          alt='rectangles'
          width={84}
          height={84}
          className='absolute top-[23.352vw] tablet:top-[8vw] desktop:top-[6.132vw] -left-[3.336vw] tablet:-left-[3.75vw] desktop:-left-[0.876vw] z-[-1] w-[13.9vw] tablet:w-[16.75vw] desktop:w-[6.132vw] h-[13.9vw] tablet:h-[16.75vw] desktop:h-[6.132vw] animate-banner-rectangle-1'
        />
        <Image
          src='/images/rectangle-primary.png'
          alt='rectangles'
          width={84}
          height={84}
          className='absolute top-[35.028vw] tablet:top-[15.75vw] desktop:top-[9.198vw] left-[8.34vw] tablet:left-[3.75vw] desktop:left-[2.19vw] z-[-1] w-[13.9vw] tablet:w-[16.75vw] desktop:w-[6.132vw] h-[13.9vw] tablet:h-[16.75vw] desktop:h-[6.132vw] animate-banner-rectangle-2'
        />
        <Image
          src='/images/dots.png'
          alt='dots'
          width={84}
          height={84}
          className='absolute bottom-[15.568vw] tablet:bottom-[9.375vw] desktop:bottom-[4.088vw] right-[4.448vw] tablet:right-[2vw] desktop:right-[1.168vw] animate-spin duration-20 w-[13.9vw] tablet:w-[10.5vw] desktop:w-[6.132vw] h-[13.9vw] tablet:h-[10.5vw] desktop:h-[6.132vw]'
        />
        <div className='bg-primary w-full h-[1.112vw] tablet:h-[0.5vw] desktop:h-[0.292vw] rounded-b-full' />
      </div>
    </section>
  )
}

export default Banner
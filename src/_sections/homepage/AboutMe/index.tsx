import React from 'react'
import { AboutMeSectionProps } from './types'
import { cn } from '@/lib/utils'
import SectionTitle from '@/components/SectionTitle'
import TransitionLink from '@/components/TransitionLink'
import Image from 'next/image'



const RectangleIcon = () => <Image src='/images/rectangle-gray.png' alt='rectangle-gray' width={150} height={150}
  className='h-auto absolute z-[-1] top-[8.34vw] -right-[8.34vw] tablet:top-auto tablet:bottom-[25vw] tablet:-left-[3.75vw] tablet:right-auto desktop:top-[40%] w-[27.8vw] tablet:w-[18.75vw] desktop:w-[10.95vw] desktop:right-auto desktop:-left-[5.475vw] animate-spin duration-20' />

const SideDotsIcon = () => <Image src='/images/dots-180.png' alt='dots' width={103} height={103}
  className='h-auto absolute z-[-1]  top-[50%] tablet:top-[50%] desktop:top-auto desktop:bottom-[20%]  -right-[5.56vw] tablet:-right-[2.5vw] desktop:-right-[1.46vw] w-[27.8vw] tablet:w-[12.875vw] desktop:w-[7.519vw] desktop:animate-spin  desktop:duration-20 animate-bounce duration-3000' />

const AboutMeSection = ({ header, details, className, ...props }: AboutMeSectionProps) => {
  return (
    <section className={cn('relative overflow-hidden', className)} {...props}>
      <RectangleIcon />
      <SideDotsIcon />
      <div className='flex flex-col w-full justify-between  items-start gap-[6.394vw] tablet:gap-[2.875vw] desktop:gap-[1.679vw]'>
        <SectionTitle
          {...header}
          line={{
            size: 'md'
          }}
        />
        <div className='flex flex-col gap-[7.506vw] tablet:gap-[3.375vw] desktop:gap-[1.971vw] desktop:max-w-[37.595vw] '>
          <div dangerouslySetInnerHTML={{ __html: details.text }} className='text-gray' />
          <TransitionLink {...details.link} arrow theme='primary' className='w-fit' />
        </div>
      </div>
      <div className='relative tablet:flex tablet:justify-center tablet:items-center'>
        <Image src="/images/about-me-image.png" alt="Portfolio Image" width={343} height={508} className='w-full tablet:w-[60%] desktop:w-[25.039vw] h-auto ' />
        <Image src='/images/dots.png' alt='dots' width={84} height={84} className='absolute top-[16.402vw] tablet:top-[7.375vw] desktop:top-[4.307vw] -left-[3.336vw] tablet:-left-[1.5vw] desktop:-left-[0.876vw] animate-spin duration-20' />
        <Image src='/images/dots-104.png' alt='dots' width={104} height={56} className='absolute bottom-[35.306vw] tablet:bottom-[15.875vw] desktop:bottom-[9.271vw]  right-0' />
        <div className='absolute bottom-0 bg-primary w-full h-[1.112vw] tablet:h-[0.5vw] desktop:h-[0.292vw] rounded-[0.834vw] tablet:rounded-[0.375vw] desktop:rounded-[0.219vw]' />
        <div className='absolute left-[50%] -translate-x-[50%] -bottom-[3.336vw] tablet:-bottom-[1.5vw] desktop:-bottom-[0.876vw] rotate-45  border-primary  border-[1.112vw] tablet:border-[0.5vw] desktop:border-[0.292vw] w-[8.34vw] tablet:w-[3.75vw] desktop:w-[2.19vw] h-[8.34vw] tablet:h-[3.75vw] desktop:h-[2.19vw] rounded-[0.834vw] tablet:rounded-[0.375vw] desktop:rounded-[0.219vw] bg-background ' />
      </div>
    </section>
  )
}

export default AboutMeSection

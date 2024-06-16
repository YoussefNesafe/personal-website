import React from 'react'
import { QuoteProps } from './types'
import { twMerge } from 'tailwind-merge'
import Image from 'next/image'

const QuoteIcon = ({ className }: { className: string }) => {


  return (
    <div className={twMerge('absolute  bg-background w-[10.008vw] h-[6.394vw] tablet:w-[5.25vw] tablet:h-[3.625vw] desktop:w-[3.066vw] desktop:h-[2.117vw] flex justify-center items-center', className)}>
      <Image src='/images/quote.png' alt='quote' width={25} height={20} className='w-[5.282vw] h-[3.892vw] tablet:w-[3.125vw] tablet:h-[2.5vw] desktop:w-[1.825vw] desktop:h-[1.46vw]' />
    </div>
  )
}


const Quote = ({ name, text, className, ...props }: QuoteProps) => {
  return (
    <section className={twMerge('justify-center', className)} {...props}>
      <div className='flex flex-col items-end '>
        <div className='border border-gray p-[5.56vw] tablet:p-[4vw] desktop:p-[2.336vw] relative text-[4.448vw] tablet:text-[3vw] desktop:text-[1.533vw]'>
          <QuoteIcon className='-top-[3.336vw] left-[3.058vw] tablet:-top-[1.875vw] tablet:left-[1.375vw] desktop:-top-[1.095vw] desktop:left-[0.803vw]' />
          {text}
          <QuoteIcon className='-bottom-[3.336vw] right-[3.058vw] tablet:-bottom-[1.875vw] tablet:right-[1.375vw] desktop:-bottom-[1.095vw] desktop:right-[0.803vw]' />
        </div>
        <div className='border border-gray border-t-0 p-[5.56vw] tablet:p-[4vw] desktop:p-[2.336vw] text-[4.448vw] tablet:text-[3vw] desktop:text-[1.533vw]'>
          {name}
        </div>
      </div>
    </section>
  )
}

export default Quote

import Image from 'next/image'
import React from 'react'
import { CardProps } from './types'
import TransitionLink from '../TransitionLink'
import { cn } from '@/lib/utils'





const Card = ({ details, image, technologies, className, ...props }: CardProps) => {
  return (
    <div className={cn('border border-gray relative', className)} {...props}>
      <div className='flex flex-col h-full' >
        <div className='h-[55.878vw] tablet:h-[25.125vw] desktop:h-[14.673vw] w-full'>
          <Image
            {...image}
            alt={image?.alt}
            className='h-[55.878vw] tablet:h-[25.125vw] desktop:h-[14.673vw] w-full'
          />
        </div>
        <div className='border border-r-0 border-l-0 border-gray p-[2.224vw] tablet:p-[1vw] desktop:p-[0.584vw] text-gray text-[4.448vw] tablet:text-[2vw] desktop:text-[1.168vw]'>
          {technologies}
        </div>
        <div className='h-full justify-between flex flex-col p-[4.448vw] tablet:p-[2vw] desktop:p-[1.168vw] gap-[4.448vw] tablet:gap-[2vw] desktop:gap-[1.168vw]'>
          <div className='flex flex-col gap-[4.448vw] tablet:gap-[2vw] desktop:gap-[1.168vw]'>
            <h3 className='font-medium text-[6.672vw] tablet:text-[3vw] desktop:text-[1.752vw]'>{details.projectName}</h3>
            <p className='text-gray text-[4.448vw] tablet:text-[2vw] desktop:text-[1.168vw]'>{details.description}</p>
          </div>
          <div className='flex gap-[4.448vw] tablet:gap-[2vw] desktop:gap-[1.168vw]'>
            {
              details.buttons.map((button, index) => (
                <TransitionLink {...button} key={`index-${index}`} as='link' arrow theme={index === 0 ? 'primary' : 'secondary'} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card

import SectionTitle from '@/components/SectionTitle'
import React from 'react'
import { ProjectsSectionProps } from './types'
import { twMerge } from 'tailwind-merge'
import Card from '@/components/Card'

const ProjectsSection = ({ header, cards, className, ...props }: ProjectsSectionProps) => {
  return (
    <section className={twMerge('desktop:flex-col gap-[15.012vw] tablet:gap-[6.75vw] desktop:gap-[3.942vw]', className)} {...props}>
      <SectionTitle
        {...header}
        line={{
          size: 'xl'
        }}
      />
      <div className='flex flex-col tablet:flex-row flex-wrap gap-[4.448vw] tablet:gap-[7.25vw] desktop:gap-[1.168vw] desktop:justify-between'>

        {
          cards.map((card, index) => (
            <Card
              {...card}
              key={`index-${index}`}
              className='w-full tablet:w-[41.375vw] desktop:w-[23.8vw]'
            />)
          )
        }
      </div>
    </section>
  )
}

export default ProjectsSection
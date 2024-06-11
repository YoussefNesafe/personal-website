import React from 'react'
import { PageTitleProps } from './types'

const PageTitle = ({ description, title, ...props }: PageTitleProps) => {
  return (
    <section {...props}>
      <div className='flex flex-col gap-[2.778vw] tablet:gap-[1.75vw] desktop:gap-[1.025vw]'>
        <div className='text-[7.223vw] tablet:text-[4vw] desktop:text-[2.343vw] font-medium'>
          <span className='text-priamry'>/</span>
          {title}
        </div>
        <div className='text-[3.889vw] tablet:text-[2vw] desktop:text-[1.171vw] '>{description}</div>
      </div>
    </section>
  )
}

export default PageTitle
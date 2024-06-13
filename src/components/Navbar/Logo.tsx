import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div className='flex items-center gap-[2.136vw] tablet:gap-[1vw] desktop:gap-[0.416vw]'>
      <Image
        src='/images/logo-bgP.svg'
        alt='logo'
        width={21}
        height={21}
        className='w-[5.607vw] tablet:w-[2.625vw] desktop:w-[1.092vw] h-[5.607vw] tablet:h-[2.625vw] desktop:h-[1.092vw]  ' />
      <span className='text-[4.272vw] tablet:text-[2vw] desktop:text-[0.832vw] font-bold'>Youssef</span>
    </div>
  )
}

export default Logo
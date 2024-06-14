import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div className='flex items-center gap-[2.224vw] tablet:gap-[1vw] desktop:gap-[0.584vw]'>
      <Image
        src='/images/logo-bgP.svg'
        alt='logo'
        width={21}
        height={21}
        className='w-[5.838vw] tablet:w-[2.625vw] desktop:w-[1.533vw] h-[5.838vw] tablet:h-[2.625vw] desktop:h-[1.533vw]  ' />
      <span className='text-[4.448vw] tablet:text-[2vw] desktop:text-[1.168vw] font-bold'>Youssef</span>
    </div>
  )
}

export default Logo
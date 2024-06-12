import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div className='flex items-center gap-[8px]'>
      <Image src='/images/logo-bgP.svg' alt='logo' width={21} height={21} className='w-[21px] tablet:w-[21px] desktop:w-[21px] h-[21px] tablet:h-[21px] desktop:h-[21px]  ' />
      <span>Youssef</span>
    </div>
  )
}

export default Logo
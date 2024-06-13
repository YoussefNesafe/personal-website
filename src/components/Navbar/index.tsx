import React, { Suspense } from 'react'
import TransitionLink from '@/components/TransitionLink'
import { englishLocale } from '@/locales/en'
import Image from 'next/image'
import Logo from './Logo'
import DesktopLinks from './DesktopLinks'
import MobileLinks from './MobileLinks'

const Navbar = () => {

  return (
    <>
      <header
        className='flex justify-between pt-[16px] pb-[8px] tablet:pt-[32px] tablet:pb-[8px] desktop:pt-[32px] desktop:pb-[8px]'
      >
        <Logo />
        <Suspense>
          <DesktopLinks />
          <MobileLinks />
        </Suspense>
      </header>

    </>
  )
}

export default Navbar
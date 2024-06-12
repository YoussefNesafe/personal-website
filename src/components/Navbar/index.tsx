import React from 'react'
import TransitionLink from '@/components/TransitionLink'
import { englishLocale } from '@/locales/en'
import Image from 'next/image'
import Logo from './Logo'

const Navbar = () => {
  const { links } = englishLocale.navbar
  return (
    <nav
      className='flex justify-between pt-[16px] pb-[8px] tablet:pt-[32px] tablet:pb-[8px] desktop:pt-[32px] desktop:pb-[8px]'
    >
      <Logo />
      <div className="flex desktop:gap-[32px]">
        {
          links.map((link) => <TransitionLink key={link.label} {...link} prefix='#' />)
        }
      </div>
    </nav>
  )
}

export default Navbar
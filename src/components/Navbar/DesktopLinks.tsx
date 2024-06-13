'use client'
import TransitionLink from '../TransitionLink'
import { englishLocale } from '@/locales/en'
import { useWindowSize } from 'usehooks-ts';
import { DESKTOP_WIDTH } from '@/constants';
import Logo from './Logo';

const DesktopLinks = () => {
  const { links } = englishLocale.navbar;
  const { width } = useWindowSize();

  const isDesktop = width >= DESKTOP_WIDTH;

  if (isDesktop) {
    return (
      <nav className="flex desktop:gap-[32px]">
        {
          links.map((link) => <TransitionLink key={link.label} {...link} prefix='#' />)
        }
      </nav>
    )
  }
  return <></>

}

export default DesktopLinks
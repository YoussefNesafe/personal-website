'use client'
import TransitionLink from '../TransitionLink'
import { englishLocale } from '@/locales/en'
import { useWindowSize } from 'usehooks-ts';
import { DESKTOP_WIDTH } from '@/constants';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { MenuIcon } from 'lucide-react';

const MobileLinks = () => {
  const { links } = englishLocale.navbar;
  const { width } = useWindowSize();

  const isDesktop = width >= DESKTOP_WIDTH;

  if (isDesktop) {
    return <></>
  }
  return (
    <Sheet>
      <SheetTrigger>
        <MenuIcon />
      </SheetTrigger>
      <SheetContent>
        <nav className="flex pt-[20px] tablet:pt-[10px] flex-col gap-[12px] tablet:gap-[16px] ">
          {
            links.map(
              (link) => <SheetClose key={link.label} className='text-start'>
                <TransitionLink
                  {...link}
                  prefix='#'
                  className='py-[10px] tablet:py-[10px]'
                />
              </SheetClose>
            )
          }
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileLinks
'use client'
import TransitionLink from '../TransitionLink'
import { englishLocale } from '@/locales/en'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { MenuIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

const MobileLinks = () => {
  const { links } = englishLocale.navbar;
  const pathname = usePathname();


  return (
    <Sheet >
      <SheetTrigger className='desktop:hidden'>
        <MenuIcon className='w-[6.408vw] tablet:w-[3vw] desktop:w-[1.248vw] h-[6.408vw] tablet:h-[3vw] desktop:h-[1.248vw]' />
      </SheetTrigger>
      <SheetContent className='desktop:hidden'>
        <div className="flex pt-[5.56vw] tablet:pt-[1.25vw] flex-col gap-[8.544vw] tablet:gap-[4vw] ">
          {
            links.map(
              (link) => <SheetClose key={link.label} className='text-start'>
                <TransitionLink
                  {...link}
                  prefix='#'
                  className={twMerge(
                    'text-[8.544vw] tablet:text-[4vw] py-[2.78vw] tablet:py-[1.25vw]',
                    link?.href === pathname ? '' : 'text-gray'
                  )}
                />
              </SheetClose>
            )
          }
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileLinks
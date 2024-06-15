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
import Link from 'next/link';
import Image from 'next/image';

const MobileLinks = () => {
  const { links } = englishLocale.navbar;
  const pathname = usePathname();


  return (
    <Sheet >
      <SheetTrigger className='desktop:hidden'>
        <MenuIcon className='w-[6.672vw] tablet:w-[3vw] desktop:w-[1.752vw] h-[6.672vw] tablet:h-[3vw] desktop:h-[1.752vw]' />
      </SheetTrigger>
      <SheetContent className='desktop:hidden flex flex-col justify-between'>
        <div className="flex pt-[13.9vw] tablet:pt-[6.25vw] flex-col gap-[8.896vw] tablet:gap-[4vw] ">
          {
            links.map(
              (link) => <SheetClose key={link.label} className='text-start'>
                <TransitionLink
                  {...link}
                  prefix='#'
                  className={twMerge(
                    'text-[8.896vw] tablet:text-[4vw]',
                    link?.href === pathname ? '' : 'text-gray'
                  )}
                />
              </SheetClose>
            )
          }
        </div>
        <div className="flex gap-[2.224vw] tablet:gap-[1vw] justify-center">
          <Link href='https://www.linkedin.com/in/youssef-nesafe/' target='_blank'>
            <Image
              src='/icons/Linkedin.svg'
              alt="Linkedin"
              width={64}
              height={64}
              className="w-[17.792vw] tablet:w-[8vw] h-[17.792vw] tablet:h-[8vw]"
            />
          </Link>
          <Link href='mailto:ynessafe@gmail.com'>
            <Image
              src='/icons/Email.svg'
              alt="Email"
              width={64}
              height={64}
              className="w-[17.792vw] tablet:w-[8vw] h-[17.792vw] tablet:h-[8vw]"
            />
          </Link>
          <Link href='https://github.com/YoussefNesafe' target='_blank'>
            <Image
              src='/icons/Github.svg'
              alt="Github"
              width={64}
              height={64}
              className="w-[17.792vw] tablet:w-[8vw] h-[17.792vw] tablet:h-[8vw]"
            />
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileLinks
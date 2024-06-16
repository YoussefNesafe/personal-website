import Logo from './Logo'
import DesktopLinks from './DesktopLinks'
import MobileLinks from './MobileLinks'
import { Suspense } from 'react'

const Navbar = () => {

  return (
    <nav
      className='flex justify-between pt-[4.448vw] pb-[2.224vw] tablet:pt-[4vw] tablet:pb-[1vw] desktop:pt-[2.336vw] desktop:pb-[0.584vw] px-[5.56vw] tablet:px-[5vw] desktop:px-[12.483vw] w-full sticky top-0 bg-background z-40'
    >
      <Logo />

      <DesktopLinks />
      <Suspense>
        <MobileLinks />
      </Suspense>
    </nav>
  )
}

export default Navbar
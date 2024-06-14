import Logo from './Logo'
import DesktopLinks from './DesktopLinks'
import MobileLinks from './MobileLinks'
import { Suspense } from 'react'

const Navbar = () => {

  return (
    <nav
      className='flex justify-between pt-[4.448vw] pb-[2.224vw] tablet:pt-[4vw] tablet:pb-[1vw] desktop:pt-[2.336vw] desktop:pb-[0.584vw]'
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
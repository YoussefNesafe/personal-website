
import TransitionLink from '../TransitionLink'
import { englishLocale } from '@/locales/en'

const DesktopLinks = () => {
  const { links } = englishLocale.navbar;

  return (
    <div className="desktop:gap-[2.336vw] hidden desktop:flex">
      {
        links.map((link) => <TransitionLink key={link.label} {...link} prefix='#' />)
      }
    </div>
  )

}

export default DesktopLinks
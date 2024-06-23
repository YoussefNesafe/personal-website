import AboutMeSection from '@/_sections/homepage/AboutMe'
import Banner from '@/_sections/homepage/Banner'
import ProjectsSection from '@/_sections/homepage/Projects'
import Quote from '@/_sections/homepage/Quote'
import { englishLocale } from '@/locales/en'

const HomePage = () => {
  const { banner, quote, projects, aboutMe } = englishLocale.homepage
  return (
    <>
      <Banner {...banner} className='mt-[2.78vw] tablet:mt-[10vw] desktop:mt-[5.84vw] tablet:items-center' />
      <Quote {...quote} className='section-py mt-[10.34vw] tablet:mt-[9vw] desktop:mt-[6.088vw]' />
      <ProjectsSection {...projects} className='section-py' />
      <AboutMeSection {...aboutMe} className='section-py' />
    </>
  )
}

export default HomePage
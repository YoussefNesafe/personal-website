import Banner from '@/_sections/homepage/Banner'
import Quote from '@/_sections/homepage/Quote'
import { englishLocale } from '@/locales/en'

const HomePage = () => {
  const { banner, quote } = englishLocale.homepage
  return (
    <>
      <Banner {...banner} className='mt-[2.78vw] tablet:mt-[10vw] desktop:mt-[5.84vw] tablet:items-center' />
      <Quote {...quote} className='section-py mt-[8.34vw] tablet:mt-[7vw] desktop:mt-[4.088vw]' />
    </>
  )
}

export default HomePage
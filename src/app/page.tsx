import Banner from '@/_sections/homepage/Banner'
import { englishLocale } from '@/locales/en'

const HomePage = () => {
  const { banner } = englishLocale.homepage
  return (
    <>
      <Banner {...banner} className='mt-[2.78vw] tablet:mt-[10vw] desktop:mt-[5.84vw] tablet:items-center' />
    </>
  )
}

export default HomePage
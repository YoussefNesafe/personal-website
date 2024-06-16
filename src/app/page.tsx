import Banner from '@/_sections/homepage/Banner'
import { englishLocale } from '@/locales/en'

const HomePage = () => {
  const { banner } = englishLocale.homepage
  return (
    <>

      <Banner {...banner} className='mt-[10px] tablet:mt-[80px] desktop:mt-[80px] tablet:items-center' />

    </>
  )
}

export default HomePage
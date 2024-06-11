import SectionTitle from '@/components/SectionTitle'
import React from 'react'

const HomePage = () => {
  return (
    <>
      <section >
        <SectionTitle
          title='projects'
          link={{ title: 'View all', href: '/', }}
          line={{ size: 'xl', }}
        />
        <SectionTitle
          title='Skills'
          line={{ size: 'md', }}
        />
        <SectionTitle
          title='About me'
          line={{ size: 'lg', }}
        />
        <SectionTitle
          title='Contacts'
        />
      </section>
    </>
  )
}

export default HomePage
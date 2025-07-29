import React from 'react'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import { HeroSectionWithInsomnia } from './components/HeroSectionWithInsomnia'
import { IndustryLeadersSection } from './components/IndustryLeadersSection'
import QaSection from './components/QaSection'
import Footer from './components/Footer'
import Carousel from './components/Carousel'

const App = () => {
  return (
    <>
      <Hero />
      {/* <Gallery /> */}
      {/* <HeroSectionWithInsomnia /> */}
      {/* <IndustryLeadersSection /> */}
      {/* <QaSection /> */}
      <Carousel />
      
      {/* <Footer /> */}
    </>
  )
}

export default App
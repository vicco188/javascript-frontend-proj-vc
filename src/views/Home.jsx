import React from 'react'
import Header from '../components/Header'
import Showcase from '../components/Showcase'
import Footer from '../components/Footer'
import BrandDisplay from '../components/BrandDisplay'
import AboutSection from '../components/AboutSection'
import Features from '../components/Features'
import Services from '../components/Services'
import WhyChooseUs from '../components/WhyChooseUs'
const Home = () => {
  return (
    <>
        <Header />
        <main>  
            <Showcase />
            <BrandDisplay />
            <Features />
            <AboutSection />
            <Services />
            <WhyChooseUs />
        </main>
        <Footer />
    </>
  )
}

export default Home
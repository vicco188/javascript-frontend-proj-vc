import React from 'react'
import Header from '../components/Header'
import Showcase from '../components/Showcase'
import Footer from '../components/Footer'
import BrandDisplay from '../components/BrandDisplay'
import AboutSection from '../components/AboutSection'
import Features from '../components/Features'
import Services from '../components/Services'
import WhyChooseUs from '../components/WhyChooseUs'
import Projects from '../components/Projects'
import Team from '../components/Team'
import Testimonials from '../components/Testimonials'
import NewsSection from '../components/NewsSection'
import Newsletter from '../components/Newsletter'
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
            <Projects />
            <Team />
            <Testimonials />
            <NewsSection bgColor="white"/>
            <Newsletter />
        </main>
        <Footer />
    </>
  )
}

export default Home
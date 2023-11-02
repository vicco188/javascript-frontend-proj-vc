import React from 'react'
import Header from '../components/Header'
import Showcase from '../components/Showcase'
import Footer from '../components/Footer'
import BrandDisplay from '../components/BrandDisplay'
const Home = () => {
  return (
    <>
        <Header />
        <main>  
            <Showcase />
            <BrandDisplay />
        </main>
        <Footer />
    </>
  )
}

export default Home
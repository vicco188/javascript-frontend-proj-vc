import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import IntroSection from '../components/IntroSection'

const News = () => {
  return (
    <>
        <Header />
        <main>
            <IntroSection heading="News & Articles" pageName="News" txt=""/>
        </main>
        <Footer />
    </>
  )
}

export default News
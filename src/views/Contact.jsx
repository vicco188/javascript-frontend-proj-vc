import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import IntroSection from '../components/IntroSection'

const Contact = () => {
  return (
    <>
        <Header />
        <main>
            <IntroSection heading="Let's Connect" pageName="Contact" txt=""/>
        </main>
        <Footer />
    </>
  )
}

export default Contact
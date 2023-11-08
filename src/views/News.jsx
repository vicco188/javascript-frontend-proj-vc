import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import IntroSection from '../components/IntroSection'
import NewsGrid from '../components/reusables/NewsGrid'

const News = () => {
  return (
    <>
        <Header />
        <main>
            <IntroSection heading="News & Articles" pageName="News" txt=""/>
            <section className="news-main container-md">
              <h2>Our News & Articles</h2>
              <NewsGrid amount={9} />
            </section>
        </main>
        <Footer />
    </>
  )
}

export default News
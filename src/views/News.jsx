import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import IntroSection from '../components/IntroSection'
import NewsGrid from '../components/reusables/NewsGrid'
import Newsletter from '../components/Newsletter'

const News = () => {
  return (
    <>
        <Header />
        <main>
            <IntroSection heading="News & Articles" pageName="News" txt=""/>
            <section className="news-main">
                <div className="news-main-wrp container-md">
                  <h2>Our News & Articles</h2>
                  <NewsGrid amount={9} />
                  <div style={{"color": "red", "font-size": "55px", "display": "flex", "justify-content": "center"}}>123456</div>
                </div>
            </section>
            <Newsletter />
        </main>
        <Footer />
    </>
  )
}

export default News
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import IntroSection from '../components/IntroSection'
import NewsGrid from '../components/reusables/NewsGrid'
import Newsletter from '../components/Newsletter'
import PageNoSelector from '../components/reusables/PageNoSelector'

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
                  <div className="page-no-selectors">
                    <PageNoSelector text="<" />
                    <PageNoSelector text="1" active="true"/>
                    <PageNoSelector text="2" />
                    <PageNoSelector text="3" />
                    <PageNoSelector text="..." />
                    <PageNoSelector text="9" />
                    <PageNoSelector text=">" />
                  </div>
                </div>
            </section>
            
            <Newsletter />
        </main>
        <Footer />
    </>
  )
}

export default News
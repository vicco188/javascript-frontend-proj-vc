import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import IntroSection from '../components/IntroSection';
import ArticleSection from '../components/ArticleSection';
import NewsSection from '../components/NewsSection';
import '../assets/css/articles.css';


const Articles = () => {
    const {id} =useParams();
    return (
        <>
            <Header />
            <main>
                <IntroSection heading="News & Articles" pageName="News" txt=""/>
                <ArticleSection id={id}/>
                <NewsSection />
            </main>
            <Footer />
            
        </>
    );
}

export default Articles;
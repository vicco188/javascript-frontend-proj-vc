import React from 'react';
import PillButton from './reusables/PillButton';
import NewsGrid from './reusables/NewsGrid';

const NewsSection = ({bgColor}) => {
    let classes='news';
    if (bgColor === "white") {
        classes='news white-bg';
    }
    return (
        <section className={classes}>
                <div className="container-md news-wrp">
                    <div className="news-top">
                        <div className="section-title">
                            <h4>Articles & News</h4>
                            <h2>Get Every Single Article & News</h2>
                        </div>
                        <div className="news-button">    
                            <PillButton url="/News" color="white" caption="Browse Articles"symbol ="arrow"/>
                        </div>  
                    </div>
                    <NewsGrid amount={3} />
                    <div className="news-bottom">
                        <i className="fa-solid fa-circle active"></i>
                        <i className="fa-solid fa-circle"></i>
                        <i className="fa-solid fa-circle"></i>
                        <i className="fa-solid fa-circle"></i>
                        <i className="fa-solid fa-circle"></i>
                    </div>
                </div>
            </section>
    );
}

export default NewsSection;
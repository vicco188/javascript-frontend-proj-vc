import React, { useEffect} from 'react'
import ArticleQuote from './reusables/ArticleQuote';
import ArticleSidebar from './ArticleSidebar';
import { dateToDay, dateToMonth, dateToYear } from '../assets/script/dateFunctions';
import { useNews } from '../contexts/NewsContext';

const ArticleSection = ({id}) => {

    useEffect(() => {
        getNewsArticle(id);
        return () => clearArticle();
    },[id])

    const {newsArticle, getNewsArticle, clearArticle} = useNews();

    const fillOutText1="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna."
    const fillOutText2="Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. uspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy."; 
    const fillOutText3="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.";
    const fillOutText4="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. unc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.";
    return (
        <section className="article-section">
            <div className="container article-section-wrp">
                <div className="article-heading">
                    <h2>{newsArticle.title}</h2>
                    <div className="article-byline">
                        <p>{`${dateToMonth(newsArticle.published)} ${dateToDay(newsArticle.published)}, ${dateToYear(newsArticle.published)}`}</p>
                        <i className="fa-solid fa-circle"></i>
                        <p>{newsArticle.category}</p>
                        <i className="fa-solid fa-circle"></i>
                        <p>{newsArticle.author}</p>
                    </div>
                </div>
                <div className="article-content">
                    <img src={newsArticle.imageUrl} alt={newsArticle.title}/>
                    <p>{newsArticle.content}</p>
                    <p>{fillOutText1}</p>
                    <p>{fillOutText2}</p>
                    <ArticleQuote text={fillOutText3}/>
                    <p>{fillOutText4}</p>
                    <div className="article-category-buttons">
                        <div className="article-category-button">{newsArticle.category}</div>
                    </div>
                </div>
                <ArticleSidebar />
                

            </div>
        </section>
    )
}

export default ArticleSection
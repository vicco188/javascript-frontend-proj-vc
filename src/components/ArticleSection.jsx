import React, { useEffect, useState } from 'react'
import ArticleQuote from './reusables/ArticleQuote';
import ArticleSidebar from './ArticleSidebar';
import { dateToDay, dateToMonth, dateToYear } from '../assets/script/dateFunctions';

const ArticleSection = ({id}) => {
const [article, setArticle] = useState({});

const getArticle = async () => {
    const result = await fetch(`https://win23-assignment.azurewebsites.net/api/articles/${id}`);
    if(result.status===200){
        setArticle(await result.json());
    }
}
useEffect(() => {
    getArticle();
},[id])
const fillOutText1="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna."
const fillOutText2="Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. uspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy."; 
const fillOutText3="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.";
const fillOutText4="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. unc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.";
return (
    <section className="article-section">
        <div className="container article-section-wrp">
            <div className="article-heading">
                <h2>{article.title}</h2>
                <p class="article-byline">
                    <p>{`${dateToMonth(article.published)} ${dateToDay(article.published)}, ${dateToYear(article.published)}`}</p>
                    <i className="fa-solid fa-circle"></i>
                    <p>{article.category}</p>
                    <i className="fa-solid fa-circle"></i>
                    <p>{article.author}</p>
                </p>
            </div>
            <div className="article-content">
                <img src={article.imageUrl} alt={article.title}/>
                <p>{article.content}</p>
                <p>{fillOutText1}</p>
                <p>{fillOutText2}</p>
                <ArticleQuote text={fillOutText3}/>
                <p>{fillOutText4}</p>
            </div>
            <ArticleSidebar />

        </div>
    </section>
  )
}

export default ArticleSection
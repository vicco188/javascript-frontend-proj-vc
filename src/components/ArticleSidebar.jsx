import React from 'react'
import { Link } from 'react-router-dom';
import { dateToDay, dateToMonth, dateToYear } from '../assets/script/dateFunctions';
import { useNews } from '../contexts/NewsContext';

const ArticleSidebar = () => {
    const numberOfHeadlines = 4;
    const {allNews} = useNews();
  
    return (
    <div className="article-sidebar">
        <div className="article-searchbox"style={{"color": "red", "font-weight": "900"}}>SÖK</div>
        <div className="recent-posts-box">
            <h6><span>Rec</span>ent Posts</h6>
            {allNews.map((headline, index) => (
                (index + 1 <= numberOfHeadlines ?
                    <Link key={headline.id} to={`/articles/${headline.id}`}>
                        <h7>{headline.title}</h7>
                        {index + 1 < numberOfHeadlines ? 
                            <p>{`${dateToMonth(headline.published)} ${dateToDay(headline.published)}, ${dateToYear(headline.published)}`}</p> 
                        : 
                            <p className="last-headline">{`${dateToMonth(headline.published)} ${dateToDay(headline.published)}, ${dateToYear(headline.published)}`}</p>
                        }
                    </Link>
                :
                    '')
            
            ))}
        </div>
        <div className="article-categories-box" style={{"color": "red", "font-weight": "900"}}>KATEGORIER</div>


    </div>
  )
}

export default ArticleSidebar
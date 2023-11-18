import React from 'react';
import { Link } from 'react-router-dom';
import { dateToDay, dateToMonth, dateToYear } from '../assets/script/dateFunctions';
import { useNews } from '../contexts/NewsContext';

const ArticleSidebar = () => {
    const numberOfHeadlines = 4;
    const {allNews} = useNews();
  
    return (
    <div className="article-sidebar">
        <div className="article-searchbox">
            <form>
                <input type="text" placeholder="Type to search..."/>
                <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
            </form>
        </div>
        <div className="recent-posts-box">
            <h6><span>Rec</span>ent Posts</h6>
            {allNews.map((headline, index) => (
                (index + 1 <= numberOfHeadlines ?
                    <Link key={headline.id} to={`/articles/${headline.id}`}>
                        <span className="headline-title">{headline.title}</span>
                        {index + 1 < numberOfHeadlines ? 
                            <p>{`${dateToMonth(headline.published)} ${dateToDay(headline.published)}, ${dateToYear(headline.published)}`}</p> 
                        : 
                            <p className="last-headline">{`${dateToMonth(headline.published)} ${dateToDay(headline.published)}, ${dateToYear(headline.published)}`}</p>
                        }
                    </Link>
                :
                    ''
                )
            ))}
        </div>
        <div className="article-categories-box" >
            <h6><span>Cat</span>egories</h6>
            <Link className="category-post">Technology - <span>20 posts</span></Link>
            <Link className="category-post">Freelancing - <span>07 posts</span></Link>
            <Link className="category-post">Writing - <span>16 posts</span></Link>
            <Link className="category-post">Marketing - <span>11 posts</span></Link>
            <Link className="category-post">Business - <span>35 posts</span></Link>
            <Link className="category-post">Education - <span>14 posts</span></Link>
        </div>
    </div>
  );
}

export default ArticleSidebar;
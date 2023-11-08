import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { dateToDay, dateToMonth, dateToYear } from '../assets/script/dateFunctions';

const ArticleSidebar = () => {
    const [headlines, setHeadlines] = useState([]);
    const numberOfHeadlines = 4;
    useEffect(() => {
        getHeadlines(numberOfHeadlines);
    },[])
    const getHeadlines = async (amount) => {
        const result = await fetch(`https://win23-assignment.azurewebsites.net/api/articles?take=${amount}`);
        if(result.status === 200){
            setHeadlines(await result.json())
        }
    };
    
    
  
    return (
    <div className="article-sidebar">
        <div className="article-searchbox"style={{"color": "red", "font-weight": "900"}}>SÖK</div>
        <div className="recent-posts-box">
            <h6><span>Rec</span>ent Posts</h6>
            {headlines.map((headline, index) => (
                <Link key={headline.id} to={`/articles/${headline.id}`}>
                <h7>{headline.title}</h7>
                {index < numberOfHeadlines - 1 ? <p>{`${dateToMonth(headline.published)} ${dateToDay(headline.published)}, ${dateToYear(headline.published)}`}</p> : <p className="last-headline">{`${dateToMonth(headline.published)} ${dateToDay(headline.published)}, ${dateToYear(headline.published)}`}</p>}
            </Link>
            
            ))}
        </div>
        <div className="article-categories-box" style={{"color": "red", "font-weight": "900"}}>KATEGORIER</div>


    </div>
  )
}

export default ArticleSidebar
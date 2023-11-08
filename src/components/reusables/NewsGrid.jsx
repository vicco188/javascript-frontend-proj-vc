import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard';
import { dateToDay, dateToMonth } from '../../assets/script/dateFunctions'




const NewsGrid = ({amount}) => {
    const [newsList, setNewsList] = useState([]);

    const getNewsList = async () => {
        const result = await fetch(`https://win23-assignment.azurewebsites.net/api/articles?take=${amount}`);
        if (result.status === 200){
            setNewsList(await result.json());
        }
    
    }
    
    useEffect(() => {
        getNewsList();
    },[])
    return (
        <div className="news-mid">  
            {
                newsList.map( (newsItem) => (
                    <NewsCard key={newsItem.id} url={`/articles/${newsItem.id}`} image={newsItem.imageUrl} day={dateToDay(newsItem.published)} month={dateToMonth(newsItem.published)} category={newsItem.category} heading={newsItem.title} intro={newsItem.content}/>
                ))
            }
            
        </div>
    )
}

export default NewsGrid
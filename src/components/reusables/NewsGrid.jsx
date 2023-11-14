import React, { useEffect, useState } from 'react';
import NewsCard from './NewsCard';
import { dateToDay, dateToMonth } from '../../assets/script/dateFunctions';
import { useNews } from '../../contexts/NewsContext';

const NewsGrid = ({amount}) => {

    const { allNews } = useNews();

    return (
        <div className="news-mid">  
            {
                allNews.map( (newsItem, index) => (
                    (index + 1 <= amount ?
                    <NewsCard key={newsItem.id} url={`/articles/${newsItem.id}`} image={newsItem.imageUrl} day={dateToDay(newsItem.published)} month={dateToMonth(newsItem.published)} category={newsItem.category} heading={newsItem.title} intro={newsItem.content}/>
                    :
                    '')


                ))
            }
            
        </div>
    )
}

export default NewsGrid
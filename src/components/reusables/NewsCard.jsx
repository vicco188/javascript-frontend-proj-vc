import React from 'react'
import { Link } from 'react-router-dom'
// import './NewsCard.css'
import '../../assets/css/NewsCard.css'

const NewsCard = ({image, category, heading, intro, day, month, url}) => {
    return (
        <Link className="news-card" to={url}>
            <div className="image-container">
                <img src={image} alt={heading} />
            </div>
            <p className="article-intro">{category}</p>
            <h6 className="article-heading">{heading}</h6>  
            <p className="article-intro">{intro}</p>
            <div className="datebox">
                <h6>{day}</h6>
                <p>{month}</p>
            </div>
        </Link>
    )
}

export default NewsCard
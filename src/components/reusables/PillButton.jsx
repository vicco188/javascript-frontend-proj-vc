import React from 'react'
import { Link } from 'react-router-dom'

const PillButton = ({caption, url, color, symbol}) => {
    const buttonClasses=`btn-generic btn-${color}`;
    let faTag = '';
    switch(symbol){
        case 'arrow':
            faTag=<i className="fa-regular fa-arrow-up-right"></i>;
            break;
        case 'play':
            faTag= <i className="fa-solid fa-play"></i>
            break;
        case 'arrowRight':
            faTag=<i className="fa-regular fa-arrow-right"></i>;
            break;
    }
    return (
    
        <Link to={url} className={buttonClasses}>{caption}{faTag}</Link>
    
  )
}

export default PillButton
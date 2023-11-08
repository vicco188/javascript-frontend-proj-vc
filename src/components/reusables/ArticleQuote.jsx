import React from 'react'
import quote from '../../assets/images/quote.svg'

const ArticleQuote = ({text}) => {
  return (
    <div className="quote">
        <img src={quote} alt="quote symbol" />
        <p>{text}</p>


    </div>
  )
}

export default ArticleQuote
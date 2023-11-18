import React from 'react'

const TestimonialCard = ({rating, testimonial, testifierName, jobTitle, picture}) => {
    
    const stars= [];
    for (let i = 1; i<=rating; i++){
        stars.push(<i className="fa-sharp fa-solid fa-star"></i>);
    }

    return (
        <div className="testimonial-card">
            <div className="rating">{stars}</div>
            <p className="testimonial">{testimonial}</p>
            <div className="testifier-byline">
                <div className="testifier-picture"><img src={picture} alt={testifierName} /></div>
                <div className="testifier-name">{testifierName}</div>
                <div className="testifier-title">{jobTitle}</div>
            </div>
        </div>
    )
}

export default TestimonialCard

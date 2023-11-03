import React from 'react'

const TestimonialCard = ({rating, testimonial, testifierName, jobTitle, picture}) => {
    return (
        <div className="testimonial-card">
            <div className="rating"><i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i></div>
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
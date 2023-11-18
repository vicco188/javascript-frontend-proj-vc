import React from 'react';
import TestimonialCard from './reusables/TestimonialCard';

const Testimonials = () => {
    const testimonialList = [
        {
            testifierName: 'Cassandra Warren',
            jobTitle:'Business Manager, Dorfus', 
            rating:'5', 
            picture: 'src/assets/images/cassandra-warren.png', 
            testimonial: '"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"'
        },
        {
            testifierName: 'Amanda Tulling',
            jobTitle:'Senior Developer, Square', 
            rating:'5', 
            picture: 'src/assets/images/amanda-tulling.png', 
            testimonial: '"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"'
        },
        {
            testifierName: 'Jack McDogglas',
            jobTitle:'Key Account Manager, Gobona', 
            rating:'5', 
            picture: 'src/assets/images/jack-mcdogglas.png', 
            testimonial: '"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"'
        }
    ];

    return (
        <section className="testimonials">
                <div className="container testimonials-wrp">
                    <div className="section-title">
                        <h4>Testimonials</h4>
                        <h2>What Our Clients Say</h2>
                    </div>
                    <div className="testimonials-grid">
                        {
                            testimonialList.map((testimonial, index) => (
                                <TestimonialCard key={index} testifierName={testimonial.testifierName} jobTitle={testimonial.jobTitle} rating={testimonial.rating} picture={testimonial.picture} testimonial={testimonial.testimonial} />
                            ))
                        }
                    </div>
                    <div className="testimonials-button">
                        <a href="reviews.html" className="btn-generic btn-black">All reviews<i className="fa-regular fa-arrow-up-right"></i></a>    
                    </div>
                    <div className="white-box"></div>
                </div>
            </section>
    );
}

export default Testimonials;
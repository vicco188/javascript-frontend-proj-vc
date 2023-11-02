import React from 'react';
import tabletMan from '../assets/images/tablet-man.svg';
import squiggle1 from '../assets/images/squiggle-1.svg';
import squiggle2 from '../assets/images/squiggle-2.svg';
import { Link } from 'react-router-dom';

const Showcase = () => {
  return (
    <section className="intro-section">
                <div className="container-md intro-section-wrp">
                    <div className="showcase-content">
                        <h1>We Provide The Best Business Solutions</h1>
                        <p className="showcase-paragraph">Establish your vision and value proposition and turn them into testable prototypes.</p>
                        <div className="showcase-content-buttons">
                            <Link to="/contact" className="btn-generic btn-yellow">Get Consulting<i className="fa-regular fa-arrow-up-right"></i></Link>
                            <Link to="/services" className="btn-generic btn-grey">Learn More<i className="fa-regular fa-arrow-up-right"></i></Link>
                        </div>
                    </div>
                    <div className="showcase-picture">
                        <img src={tabletMan} className="showcase-picture-main" alt="Office worker" />
                        <img src={squiggle1} className="showcase-picture-squiggle "alt="Decoration" />
                    </div>
                </div>
                <img src={squiggle2} alt="decoration" className="intro-white-squiggle" />
            </section>
  );
}

export default Showcase;
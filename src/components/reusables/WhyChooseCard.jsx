import React from 'react';
import thumbsup from '../../assets/images/icon-thumbsup.svg';
import spiderweb from '../../assets/images/icon-spiderweb.svg';
import design from '../../assets/images/icon-design.svg';
import intelligence from '../../assets/images/icon-intelligence.svg';


const iconMap = {
    thumbsup,
    spiderweb,
    design,
    intelligence
};

const WhyChooseCard = ({icon, heading, caption}) => {
    return (
        <div className="whychooseus-content-card">
            <div className="whychooseus-content-card-icon">
                <img src={iconMap[icon]} alt="Icon" />
            </div>
            <div className="info-card">
                <h6>{heading}</h6>
                <p>{caption}</p>
            </div>
        </div>
    );
}

export default WhyChooseCard;
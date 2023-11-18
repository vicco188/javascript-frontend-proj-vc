import React from 'react';
import squiggle3 from '../assets/images/squiggle-3.svg';
import PillButton from './reusables/PillButton';
import InfoCard from './reusables/InfoCard';

const Services = () => {
  return (
        <section className="services">
            <div className="container-md services-wrp">
                <div className="section-title">
                    <h4>Our Services</h4>
                    <h2>We Provide The Best<br />Service For Consulting</h2>
                </div>
                <div className="services-grid">
                    <InfoCard url="#" heading="Business Advice" caption="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus."/>
                    <InfoCard url="#" heading="Startup Business" caption="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus."/>
                    <InfoCard url="#" heading="Financial Advice" caption="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus."/>
                    <InfoCard url="#" heading="Risk Management" caption="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus."/>
                </div>
                <div className="services-button">
                    <PillButton to="/services" color="grey" symbol="arrow" caption="Browse Services" />
                </div>
            </div>
            <div className="services-white-squiggle">
                <img src={squiggle3} alt="decoration" />
            </div>
        </section>
  );
}

export default Services;
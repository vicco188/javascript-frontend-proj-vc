import React from 'react';
import PillButton from './reusables/PillButton';
import FeaturesCard from './reusables/FeaturesCard';
const Features = () => {
  return (
        <section className="features">
            <div className="container-md features-wrp">
                <div className="grey-rectangle"></div>
                <div className="features-left">
                    <div className="section-title">
                        <h4>Features</h4>
                        <h2>Our Accounting Is Trusted By Thousands Of Companies</h2>
                    </div>
                    <div className="features-button"><PillButton color="yellow" caption="Learn More" symbol="arrow" url="/features" /></div>
                </div>
                <div className="features-right">
                    <div className="features-right-grid">
                        <FeaturesCard icon="handshake" heading="Business Advice" caption="Lorem ipsum, dolor sit amet consectetur adipisicing elit."/>
                        <FeaturesCard icon="bulb" heading="Startup Business" caption="Lorem ipsum, dolor sit amet consectetur adipisicing elit."/>
                        <FeaturesCard icon="stock" heading="Financial Advice" caption="Lorem ipsum, dolor sit amet consectetur adipisicing elit."/>
                        <FeaturesCard icon="box" heading="Risk Management" caption="Lorem ipsum, dolor sit amet consectetur adipisicing elit."/>
                    </div>
                </div>
            </div>
        </section>
  );
}

export default Features;
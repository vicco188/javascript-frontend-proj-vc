import React from 'react'
import iconPlus from '../assets/images/icon-plus.svg'
import iconHandshake from '../assets/images/icon-handshake.svg'
import iconBulb from '../assets/images/icon-bulb.svg'
import iconStock from '../assets/images/icon-stock.svg'
import iconBox from '../assets/images/icon-box.svg'
import PillButton from './generic/PillButton'
import FeaturesCard from './generic/FeaturesCard'
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
  )
}

export default Features
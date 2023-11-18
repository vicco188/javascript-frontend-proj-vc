import React from 'react';
import conference from '../assets/images/2-people-conference.png';
import WhyChooseCard from './reusables/WhyChooseCard';

const WhyChooseUs = () => {
  return (
    <section className="whychooseus">
        <div className="container-md whychooseus-wrp">
            <div className="section-title">
                <h4>Why Choose Us</h4>
                <h2>Why We Are The Best Business Consulting Agency</h2>
            </div>
            <div className="whychooseus-content">
                
                <div className="whychooseus-content-cards">
                    <WhyChooseCard heading="Process Excellence" caption="Lorem, ipsum dolor sit amet consectetur." icon="thumbsup"/>
                    <WhyChooseCard heading="Strategic Planning" caption="Lorem, ipsum dolor sit amet consectetur." icon="spiderweb"/>
                    <WhyChooseCard heading="Process Excellence" caption="Lorem, ipsum dolor sit amet consectetur." icon="design"/>
                    <WhyChooseCard heading="Process Excellence" caption="Lorem, ipsum dolor sit amet consectetur." icon="intelligence"/>
                </div>
            </div>
            <div className="whychooseus-picture">
                <img src={conference} alt="Conference" />
                
            </div>
        </div>
        <div className="grey-box"></div>
    </section>
  );
}

export default WhyChooseUs;
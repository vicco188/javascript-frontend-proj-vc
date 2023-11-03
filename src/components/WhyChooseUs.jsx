import React from 'react'
import conference from '../assets/images/2-people-conference.png'
import WhyChooseCard from './reusables/WhyChooseCard'

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
                    {/* <div className="whychooseus-content-card">
                        <div className="whychooseus-content-card-icon">
                            <img src="images/icon-thumbsup.svg" alt="Icon" />
                        </div>
                        <div className="info-card">
                            <h6>Process Excellence</h6>
                            <p>Lorem, ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div> */}
                    <WhyChooseCard heading="Process Excellence" caption="Lorem, ipsum dolor sit amet consectetur." icon="thumbsup"/>
                    {/* <div className="whychooseus-content-card">
                        <div className="whychooseus-content-card-icon">
                            <img src="images/icon-spiderweb.svg" alt="Icon" />
                        </div>
                        <div className="info-card">
                            <h6>Strategic Planning</h6>
                            <p>Lorem, ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div> */}
                    <WhyChooseCard heading="Strategic Planning" caption="Lorem, ipsum dolor sit amet consectetur." icon="spiderweb"/>
                    {/* <div className="whychooseus-content-card">
                        <div className="whychooseus-content-card-icon">
                            <img src="images/icon-design.svg" alt="Icon" />
                        </div>
                        <div className="info-card">
                            <h6>Experience Design</h6>
                            <p>Lorem, ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div> */}
                    <WhyChooseCard heading="Process Excellence" caption="Lorem, ipsum dolor sit amet consectetur." icon="design"/>
                    {/* <div className="whychooseus-content-card">
                        <div className="whychooseus-content-card-icon">
                            <img src="images/icon-intelligence.svg" alt="Icon" />
                        </div>
                        <div className="info-card">
                            <h6>Artificial Intelligence</h6>
                            <p>Lorem, ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div> */}
                    <WhyChooseCard heading="Process Excellence" caption="Lorem, ipsum dolor sit amet consectetur." icon="intelligence"/>
                </div>
            </div>
            <div className="whychooseus-picture">
                <img src={conference} alt="Conference" />
                
            </div>
        </div>
        <div className="grey-box"></div>
    </section>
  )
}

export default WhyChooseUs
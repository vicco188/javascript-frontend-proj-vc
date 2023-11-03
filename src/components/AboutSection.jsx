import React from 'react'
import samanthaBrownPic from '../assets/images/samantha-brown.png'
import squiggle5 from '../assets/images/squiggle-5.svg'
import { Link } from 'react-router-dom'
import PillButton from './reusables/PillButton'

const AboutSection = () => {
  return (
    <section className="about">
                <div className="container-md about-wrp">
                    <div className="about-image">
                        <img src={samanthaBrownPic} alt="Founder Samantha Brown" />
                        <div className="quote-box">
                            <span className="qb-h1">Samantha Brown, </span>
                            <span className="qb-h2">Founder</span>
                            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
                        </div>
                        <img src={squiggle5} alt="decoration" className="squiggle" />
                    </div>
                    <div className="section-title">
                        <h4>About Company</h4>
                        <h2>We Are Business Consulting & Credit Repair Experts</h2>
                    </div>
                    <div className="about-content">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.
                            <br /><br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet.
                        </p>
                        <div className="about-content-buttons">
                            {/* <Link to="/about" className="btn-generic btn-black">Learn More<i className="fa-regular fa-arrow-up-right"></i></Link> */}
                            <PillButton color="yellow" url="/about" caption="Learn More" symbol="arrow" />
                            {/* <Link to="#"><i className="fa-solid fa-play btn-generic btn-white"></i><span>Intro Video</span></Link> */}
                            <PillButton color='white' symbol='play' url='#'/><Link to="#"><span>Intro Video</span></Link>
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default AboutSection
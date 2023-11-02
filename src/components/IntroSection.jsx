import React from 'react'
import squiggle2 from '../assets/images/squiggle-2.svg'
import { Link } from 'react-router-dom'

const IntroSection = ({pageName, heading, txt}) => {
  return (
    <section class="intro-section">
                <div class="container-md intro-section-wrp">
                    <div class="page-heading">
                        <nav>
                            <Link to="/">Home</Link>
                            <span>{pageName}</span>
                        </nav>
                        <h1>{heading}</h1>
                        <span>{txt}</span>
                    </div>
                </div>
                <img src={squiggle2} alt="decoration" class="intro-white-squiggle" />
            </section>
  )
}

export default IntroSection
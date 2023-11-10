import React from 'react'
import logotype from '../assets/images/logo.svg'
import { Link, NavLink } from 'react-router-dom'
import PillButton from './reusables/PillButton'

const Header = () => {
  return (
    <header>
            <div className="container-md header-wrp">
                <div className="header-burgerbutton"><i className="fa-solid fa-bars fa-xl"></i></div>
                <div className="header-logo"><Link to="/"><img src={logotype} alt="Crito logotype" /></Link></div>
                <div className="header-top">
                    <div className="header-top-contactinfo">
                        <div className="header-top-contactinfo-contact" id="firstcontact"><a href="tel:+46812147050"><i className="fa-regular fa-phone-volume fa-lg"></i>+46 (8) 121 470 50</a></div>
                        <div className="header-top-contactinfo-contact"><a href="mailto:info@crito.com"><i className="fa-regular fa-envelope-dot fa-lg"></i>info@crito.com</a></div>
                        <div className="header-top-contactinfo-contact"  id="lastcontact"><a href="https://www.google.com/maps/place/Sveav%C3%A4gen+31,+111+34+Stockholm"><i className="fa-sharp fa-light fa-location-dot fa-lg"></i>Sveavägen 31, 111 34 STOCKHOLM</a></div>
                    </div>
                    <div className="header-top-somedicons">
                        <a href="https://facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                        <a href="https://twitter.com" target="_blank"><i className="fa-brands fa-square-x-twitter"></i></a>
                        <a href="https://instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                        <a href="https://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                </div>
                <div className="header-bottom">
                    <nav>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/service">Service</NavLink>
                        <NavLink to="/news">News</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                    </nav>
                    <div className="header-bottom-loginbutton"><PillButton color="yellow" symbol="arrow" caption="Login" url="/login" /></div>
                </div>
            </div>
    </header>
  )
}

export default Header
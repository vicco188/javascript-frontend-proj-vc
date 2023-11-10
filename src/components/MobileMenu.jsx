import React from 'react'
import { NavLink } from 'react-router-dom'
import PillButton from './reusables/PillButton'

const MobileMenu = () => {
  return (
    <div class="mobile-menu">
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/service">Service</NavLink>
            <NavLink to="/news">News</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <div className="mobile-menu-login-button"><PillButton color="yellow" caption="Login" url="/login" symbol="arrow" /></div>
        </nav>
        <div className="mobile-menu-contactinfo">
        <div className="mobile-menu-contactinfo-contact" id="firstcontact"><a href="tel:+46812147050"><i className="fa-regular fa-phone-volume fa-lg"></i>+46 (8) 121 470 50</a></div>
        <div className="mobile-menu-contactinfo-contact"><a href="mailto:info@crito.com"><i className="fa-regular fa-envelope-dot fa-lg"></i>info@crito.com</a></div>
        <div className="mobile-menu-contactinfo-contact"  id="lastcontact"><a href="https://www.google.com/maps/place/Sveav%C3%A4gen+31,+111+34+Stockholm"><i className="fa-sharp fa-light fa-location-dot fa-lg"></i>Sveavägen 31, 111 34 STOCKHOLM</a></div>
        </div>
        <div className="mobile-menu-somedicons">
            <a href="https://facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></a>
            <a href="https://twitter.com" target="_blank"><i className="fa-brands fa-square-x-twitter"></i></a>
            <a href="https://instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
        </div>
</div>
  )
}

export default MobileMenu
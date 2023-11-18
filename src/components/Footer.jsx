import React from 'react';
import logotypeWhite from '../assets/images/logotype-white.svg';
import footerGreySquiggle from '../assets/images/footer-grey-squiggle.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
        <div className="footer-top-wrp">
            <div className="container-md footer-top">
                <div className="company-presentation">
                    <img src={logotypeWhite} alt="Crito Logotype" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
                </div>
                <div className="link-grid-card">
                    <h6>Company</h6>
                    <Link to="/">About</Link>
                    <Link to="/service">Features</Link>
                    <Link to="/news">Works</Link>
                    <Link to="/contact">Career</Link>
                </div>
                <div className="link-grid-card">
                    <h6>Help</h6>
                    <Link to="/service">Customer Support</Link>
                    <Link to="/">Delivery Details</Link>
                    <Link to="/">Terms & Conditions</Link>
                    <Link to="/">Privacy Policy</Link>
                </div>
                <div className="link-grid-card">
                    <h6>Resources</h6>
                    <Link to="/">Free eBooks</Link>
                    <Link to="/">Developement Tutorial</Link>
                    <Link to="/">How to - Blog</Link>
                    <Link to="/">Youtube Playlist</Link>
                </div>
                <div className="link-grid-card">
                    <h6>Links</h6>
                    <Link to="/">Free eBooks</Link>
                    <Link to="/">Developement Tutorial</Link>
                    <Link to="/">How to - Blog</Link>
                    <Link to="/">Youtube Playlist</Link>
                </div>
            </div>
            <div className="footer-squiggle">
                <img src={footerGreySquiggle} alt="decoration" />
            </div>
        </div>
        <div className="container-md footer-bottom">
            <div className="copyright">
                &copy; 2023 Crito - Consulting Company Inc. All Rights Reserved.
            </div>
            <div className="somed">
                <a href="https://facebook.com" target="_blank" className="firstsomed"><i className="fa-brands fa-facebook"></i></a>
                <a href="https://twitter.com" target="_blank"><i className="fa-brands fa-square-x-twitter"></i></a>
                <a href="https://instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
            </div>
        </div>
    </footer>
  );
}

export default Footer;
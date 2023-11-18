import React from 'react';
import squiggle4 from '../assets/images/squiggle-4.svg';

const Newsletter = () => {
  return (
    <section className="newsletter">
        <div className="container newsletter-wrp">
            <h2>Get News Updates By Signup</h2>
            <form id="frmNewsletter" method="post">
                <input type="text" id="tbxNewsletterEmail" name="tbxNewsletterEmail" placeholder="username@domain.com" />
                <button id="btnNewsletterSubscribe" className="btn-generic btn-yellow">
                    Subscribe<i className="fa-regular fa-arrow-up-right"></i>
                </button>
            </form>
        </div>
        <img src={squiggle4} alt="decoration" className="squiggle" />
    </section>
  );
}

export default Newsletter;
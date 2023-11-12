import React from 'react'

const ContactForm = () => {
  return (
    <section className="contact-form">
        <div className="container-md contact-form-wrp">
            <h2>Leave us a message<br/>for any information</h2>
            <form id="contactForm" method="post">
                <input type="text" id="contName" name="contName" tabindex="1" placeholder="Name*" />
                <input type="email" id="contEmail" name="contEmail" tabindex="2" placeholder="Email*" />
                <textarea id="msg" name="msg" tabindex="3" placeholder="Your Message*"></textarea>
                <button type="submit" class="btn-generic btn-yellow">Send Message<i class="fa-regular fa-arrow-up-right"></i></button>
            </form>
        </div>
    </section>
  )
}

export default ContactForm
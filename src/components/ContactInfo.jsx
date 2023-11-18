import React from 'react';
import ContactInfoCard from './reusables/ContactInfoCard';

const ContactInfo = () => {
  return (
    <section className="contact-info">
        <div className="container-md contact-info-wrp">
            <ContactInfoCard symbol="location-dot" heading="Visit us" textRowOne="Sveavägen 31" textRowTwo="111 34 STOCKHOLM" url="https://www.google.com/maps/place/Sveav%C3%A4gen+31,+111+34+Stockholm"/>
            <ContactInfoCard symbol="phone" heading="Call us" textRowOne="+46 (8) 121 470 50" textRowTwo="+46 (8) 121 470 51" url="tel:+46812147050"/>
            <ContactInfoCard symbol="envelope" heading="Email us" textRowOne="info@crito.com" textRowTwo="support@crito.com" url="mailto:info@crito.com" />
        </div>
    </section>
  );
}

export default ContactInfo;
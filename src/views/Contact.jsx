import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import IntroSection from '../components/IntroSection';
import ContactInfo from '../components/ContactInfo';
import ContactVisitMap from '../components/ContactVisitMap';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <>
        <Header />
        <main>
            <IntroSection heading="Let's Connect" pageName="Contact" txt=""/>
            <ContactInfo url="https://www.google.com/maps/place/Sveav%C3%A4gen+31,+111+34+Stockholm"/>
            <ContactForm />
            <ContactVisitMap />
        </main>
        <Footer />
    </>
  );
}

export default Contact;
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import IntroSection from '../components/IntroSection';

const NotFound = () => {
  return (
    <>
        <Header />
        <main>
            <IntroSection heading="Oops!" pageName="" txt="Error 404: The page you were looking for is not available"/>
        </main>
        <Footer />
    </>
  );
}

export default NotFound;
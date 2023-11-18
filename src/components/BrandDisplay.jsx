import React from 'react';
import paperzLogo from '../assets/images/paperz-logo.svg';
import dorfusLogo from '../assets/images/dorfus-logo.svg';
import martinoLogo from '../assets/images/martino-logo.svg';
import squareLogo from '../assets/images/square-logo.svg';
import gobonaLogo from '../assets/images/gobona-logo.svg';

const BrandDisplay = () => {
  return (
    <section className="brand-display">
        <div className="container-md">
            <img src={paperzLogo} alt="Paperz" />
            <img src={dorfusLogo} alt="Dorfus" />
            <img src={martinoLogo} alt="Martino" />
            <img src={squareLogo} alt="Square" />
            <img src={gobonaLogo} alt="Gobona" />
        </div>
    </section>
  );
}

export default BrandDisplay;
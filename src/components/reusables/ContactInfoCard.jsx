import React from 'react';

const ContactInfoCard = ({url, symbol, heading, textRowOne, textRowTwo}) => {
  return (
    <a href={url} className="contact-card">
        <div className="contact-symbol"><i className={`fa-solid fa-${symbol}`}></i></div>
        <h6>{heading}</h6>
        <p>{textRowOne}<br />{textRowTwo}</p>
    </a>
  );
}

export default ContactInfoCard;
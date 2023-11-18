import React from 'react';
import plus from '../../assets/images/icon-plus.svg';
import handshake from '../../assets/images/icon-handshake.svg';
import bulb from '../../assets/images/icon-bulb.svg';
import stock from '../../assets/images/icon-stock.svg';
import box from '../../assets/images/icon-box.svg';

const iconMap = {
  handshake,
  bulb,
  stock,
  box
};

const FeaturesCard = ({ icon, heading, caption }) => {
  return (
    <div className="info-card">
      <img src={plus} className="icon-sparkles-a" alt="Icon" />
      <img src={plus} className="icon-sparkles-b" alt="Icon" />
      <img src={plus} className="icon-sparkles-c" alt="Icon" />
      <img src={iconMap[icon]} alt="Icon" />
      <h6>{heading}</h6>
      <p>{caption}</p>
    </div>
  );
}

export default FeaturesCard;

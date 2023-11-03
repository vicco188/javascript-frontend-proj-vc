import React from 'react'
import { Link } from 'react-router-dom'
import PillButton from './PillButton'


const InfoCard = ({url, caption, heading}) => {
  return (
    <div className="info-card">
        <div className="info-card-line"></div>
        <Link to={url}>
            <h6>{heading}</h6>
            <p>{caption}</p>
        </Link>
            <div className="service-button">
            <PillButton url="{url}" color="black" symbol="arrowRight" />
        </div>
    </div>
  )
}

export default InfoCard
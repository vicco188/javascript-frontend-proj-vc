import React from 'react'
import kristine from "../../assets/images/kristine-palmer.png"

const TeamMemberCard = ({firstName, lastName, jobTitle, picture}) => {
    return (
        <div className="team-member">
            <img src={picture} alt="Kristine Palmer" />
            <h6>{`${firstName} ${lastName}`}</h6>
            <p>{jobTitle}</p>
        </div>
    )
}

export default TeamMemberCard
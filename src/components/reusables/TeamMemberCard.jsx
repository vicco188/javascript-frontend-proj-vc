import React from 'react';

const TeamMemberCard = ({memberName, jobTitle, picture}) => {
    return (
        <div className="team-member">
            <img src={picture} alt={memberName} />
            <h6>{memberName}</h6>
            <p>{jobTitle}</p>
        </div>
    );
}

export default TeamMemberCard;
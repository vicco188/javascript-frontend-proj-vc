import React from 'react'
import TeamMemberCard from './reusables/TeamMemberCard'

const Team = () => {
    return (
        <section className="team">
            <div className="container-md team-wrp">
                <div className="team-top">
                    <div className="section-title">
                        <h4>Meet Our Team</h4>
                        <h2>Experience Team Members</h2>
                    </div>
                    <div className="team-button">
                        <a href="team.html" className="btn-generic btn-yellow">Browse Team<i className="fa-regular fa-arrow-up-right"></i></a>
                    </div>
                </div>
                <div className="team-mid">
                    <TeamMemberCard firstName="Kristine" lastName="Palmer" jobTitle="Chief Operation Officer" picture="/src/assets/images/kristine-palmer.png" />
                    <TeamMemberCard firstName="Mark" lastName="Aubri" jobTitle="Senior Consultant" picture="/src/assets/images/mark-aubri.png" />
                    <TeamMemberCard firstName="Kimberly" lastName="Hansen" jobTitle="Senior Consultant" picture="/src/assets/images/kimberly-hansen.png" />
                    <TeamMemberCard firstName="Justin" lastName="Willoman" jobTitle="Senior Tech Consultant" picture="/src/assets/images/justin-willoman.png" />
                </div>
                <div className="team-bottom">
                    <i className="fa-solid fa-circle"></i>
                    <i className="fa-solid fa-circle active"></i>
                    <i className="fa-solid fa-circle"></i>
                    <i className="fa-solid fa-circle"></i>
                    <i className="fa-solid fa-circle"></i>
                </div>
            </div>
        </section>
    )
}

export default Team
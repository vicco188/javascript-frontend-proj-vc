import React from 'react';
import PillButton from './reusables/PillButton';
import ProjectCard from './reusables/ProjectCard';

const Projects = () => {
  return (
    <section className="projects">
      <div className="container-md projects-wrp">
        <div className="section-title">
            <h4>Project & Case studies</h4>
            <h2>Let's Look At Our Global Projects</h2>
        </div>
        <div className="projects-grid">
            <ProjectCard image="business" heading="Grow your business" url="#"/>
            <ProjectCard image="responsiveness" heading="Why your client needs a responsive website" url="#"/>
            <ProjectCard image="education" heading="Educate your employees to get better results" url="#"/>
            <ProjectCard image="statistics" heading="Business insights is an important piece of your business" url="#"/>
        </div>
        <div className="projects-button">
            <PillButton color="black" url="/projects" caption="All Recent Projects" symbol="arrow" />
        </div>
      </div>
    </section>
  )
};

export default Projects;
import React from 'react';
import business from '../../assets/images/projects-picture-1.jpg';
import responsiveness from '../../assets/images/projects-picture-2.jpg';
import education from '../../assets/images/projects-picture-3.jpg';
import statistics from '../../assets/images/projects-picture-4.jpg';
import { Link } from 'react-router-dom';

const ProjectCard = ({heading, image, url}) => {
    const imageMap = {
        business,
        responsiveness,
        education,
        statistics
    };
    return (
        <Link to={url} className="projects-grid-card">
            <img src={imageMap[image]} alt={image} />
            <h6>{heading}</h6>
            <p className="readmorelink">
                Read more
                <i className="fa-regular fa-arrow-up-right"></i>
            </p>
        </Link>
    );
}

export default ProjectCard;
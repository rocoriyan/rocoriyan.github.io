import React from 'react';
import './ProjectCard.css';

const ProjectCard = (props) => {
  const imgLink = "./projectImg/" + props.proj + ".png";
  return (
    <div className="projectCard">
    <h3 href={props.link}>{props.proj}</h3>
      <a href={props.link} target="_blank">
        <img src={imgLink} alt={props.proj} href={props.link}/>
      </a>
    </div>
  )
}

export default ProjectCard;

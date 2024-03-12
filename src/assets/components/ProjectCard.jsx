import React from 'react'

const ProjectCard = (props) => {
  const imgLink = "./projectImg/" + props.proj + ".png"
  return (
    <div className="projectCard">
      <img src={imgLink} alt={props.proj}/>
      <h2 href={props.link}>{props.proj}</h2>
    </div>
  )
}

export default ProjectCard

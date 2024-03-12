import { useState } from 'react'
import './App.css'
import ProjectCard from './assets/components/ProjectCard'

function App() {

  return (
    <>
      <h1>Ryan Corrigan</h1>
      <p>Junior developer with experience in Full Stack web development and making programs with C#.</p>
      <h2>Projects</h2>
      <div className="projectsContainer">
        <ProjectCard proj="Drumkit" link="https://rocoriyan.github.io/CdNtnWeek3/drums.html"/>
        <ProjectCard proj="Keycode Info" link="https://rocoriyan.github.io/CdNtnWeek3/keypress.html"/>
        <ProjectCard proj="React Calculator" link="https://rocoriyan.github.io/CdNtnWeek5/#/calculator"/>
        <ProjectCard proj="React To-do List" link="https://rocoriyan.github.io/CdNtnWeek5/#/todo"/>
        <ProjectCard proj="Cats4Life" link="https://rocoriyan.github.io/CdNtnWeek5/#/calculator"/>
      </div>
    </>
  )
}

export default App

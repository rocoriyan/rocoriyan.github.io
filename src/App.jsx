import ProjectCard from './assets/components/ProjectCard'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { VscGithubAlt } from "react-icons/vsc";
import { IoIosMail } from "react-icons/io";
import './App.css'

function App() {

  return (
    <div className='pcontent'>
      <div className='landing'>
        <div className='landing-main-left'>
          <VscGithubAlt className='githubIcon'/>
        </div>
        <div className='landing-main-right'>
          <h1>Hi, I'm Ryan!</h1>
          <p>Junior developer with experience in React, Node.js, and C#</p>
          <div className='landing-buttons'>
            <a href='mailto:rcorrigan.work@gmail.com/' target="_blank"><IoIosMail className='linkIcon mail'/></a>
            <a href='https://github.com/rocoriyan' target="_blank"><FaGithub className='linkIcon' /></a>
            <a href='https://www.linkedin.com/in/ryan-c-711a45301/' target="_blank"><FaLinkedin className='linkIcon' /></a>
          </div>
        </div>
      </div>
      <div className='about sect'>
        <h2>About me</h2>
        <div className='about-desc sect-content'>
          <p>I'm an aspiring developer based in Manchester. I've been coding since I was 12, 
            falling in love with the problem-solving aspects and being struck
            with a passion for it that's stuck with me since. I have a lot of experience with
            web development, some game development with MonoGame, and I am very confident with
            C#. Alongside a 12 week software development bootcamp, I've also completed
            a course in Cyber Security.</p>
          <p>Technology is something I adore, and I would love nothing more than to work with it 
            and continue to learn about it for the rest of my life.</p>
        </div>
      </div>
      <div className='projects sect'>
        <h2>Projects</h2>
          <div className='projects-container sect-content'>
            <ProjectCard proj="Nintendo Clone" link="https://rocoriyan.github.io/nintendo-clone/"/>
            <ProjectCard proj="Drumkit" link="https://rocoriyan.github.io/CdNtnWeek3/drums.html"/>
            <ProjectCard proj="Keycode Info" link="https://rocoriyan.github.io/CdNtnWeek3/keypress.html"/>
            <ProjectCard proj="React Calculator" link="https://rocoriyan.github.io/CdNtnWeek5/#/calculator"/>
            <ProjectCard proj="React To-do List" link="https://rocoriyan.github.io/CdNtnWeek5/#/todo"/>
            <ProjectCard proj="Cats4Life" link="https://jkuriata.github.io/Cats4Life/"/>
            <ProjectCard proj="gamer4rum" link="https://github.com/rocoriyan/final_project_forum_FE"/>
          </div>
      </div>
    </div>
  )
}

export default App

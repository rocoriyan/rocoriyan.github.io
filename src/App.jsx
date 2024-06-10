import ProjectCard from './assets/components/ProjectCard'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { VscGithubAlt } from "react-icons/vsc";
import { IoIosMail } from "react-icons/io";
import './App.css'

function App() {

  return (
    <>
      <div className='landing'>
        <div className='landing-main-left'>
          <VscGithubAlt size="145px" />
        </div>
        <div className='landing-main-right'>
          <h1>Hi, I'm Ryan!</h1>
          <p>Junior developer with experience in React, Node.js, and C#</p>
          <div className='landing-buttons'>
            <a href='mailto:rcorrigan.work@gmail.com/' target="_blank"><IoIosMail size="30px" className='linkIcon'/></a>
            <a href='https://github.com/rocoriyan' target="_blank"><FaGithub size="25px" className='linkIcon' /></a>
            <a href='https://www.linkedin.com/in/ryan-c-711a45301/' target="_blank"><FaLinkedin size="25px" className='linkIcon' /></a>
          </div>
        </div>
      </div>
      <div className='about sect'>
        <h2>About me</h2>
        <div className='about-desc'>
          <p>Hello, welcome to my portfolio!</p>
          <p>I'm Ryan, an aspiring developer based in Manchester. I've been coding since I was 12, 
            falling in love with the problem-solving aspects in my GCSEs and being struck with a passion for it 
            that's stuck with me since.</p>
          <p>I have experience with games development, having developed a raycasting maze game and many others in React; with web development, as 
            seen in my work with my development of static websites (both basic and with React), and full-stack 
            websites; and with simple console app development, as shown by my work with Python, C# and Node.js.</p>
          <p>I'm very familiar with object-oriented programming, utilizing CLI applications and working with GitHub. 
            I can work well in teams of developers with varying sets of skills, planning my work properly, and have been
            continuously expanding my skillset, as seen in my recent commitment to an intensive 12 week long software 
            development bootcamp with Code Nation, and my consistent usage of sites such as Codewars, to keep my 
            knowledge fresh and to learn from people with more experience.
          </p>
        </div>
        {/*
        <div className='highlights sect'>
          <h2>Why work with me?</h2>
          <ul>
            <li>
              <h3>Focus on Accessibility</h3>
              <p>I feel like many web developers working on websites tend to forget the importance of making your website 
              accessible. Simple things such as the use of alt text, using header tags in order and not for their appearance, 
              and making sure the colour scheme of a website is readable often seem to be missed by other juniors, only 
              being brought back into focus when they want to improve SEO. I make it a point to first develop my websites 
              without styling, then add it once the HTML looks good. This is good as it makes sure the order of information on 
              the webpage makes sense, which is important for those using screen readers. When adding styling, I also make sure 
              the schemes I consider meet the Web Content Accessibility Guidelines. Mobile accessibility is also an area I pay 
              attention to, making sure a page looks good on all screen sizes. I actually quite enjoy working on media queries, 
              made apparent in my work on Gamer4Rum, where many of my contributions were dedicated to adjusting the styling for 
              mobile.</p>
            </li>
            <li>
              <h3>Cyber Security Knowledge</h3>
              <p>I have a good understanding of basic cyber security, having passed GCSE and A-level Computer Science, as well
                as pushing my skills further in a cyber security course, earning qualifications in cyber security specifically. 
                Having knowledge of threats you can face, how you can yourself against them & the consequences of not doing to
                is vital, especially with web development. I have hands-on experience securing servers, as well as knowledge on
                the rights of users and the legal requirements of data-holders. Furthermore, I understand what can put me at risk
                and what can put the people I work with at risk. This makes me safer to work with, as I'll know what security
                measures need to be put in place and why.
              </p>
            </li>
            <li>
              <h3>Understanding the Importance of User Experience</h3>
              <p>Having completed a course on good customer service, I'm well aware of the importance of providing users with
                good service. When a customer has a good experience, they feel more trust towards the provider and are likely to
                come back again or reccomend them to others. However, one bad experience can turn a user away forever, and 
                potentially turn away their friends. The same can be said for users of websites and programs developed by a 
                company or individual -- if you continuously provide a good experience to users, they'll notice and they'll trust
                you, but the opposite is true when you don't. For these reasons, I try to pay attention to the little things and put
                myself in the shoes of the user as much as I can.
              </p>
            </li>
          </ul>
        </div>
        */}   {/* commented out because its too wordy. will workshop */}
      </div>
      <div className='projects sect'>
        <h2>Projects</h2>
        <dd>
          <div className='projects-container'>
            <ProjectCard proj="Nintendo Clone" link="https://rocoriyan.github.io/nintendo-clone/"/>
            <ProjectCard proj="Drumkit" link="https://rocoriyan.github.io/CdNtnWeek3/drums.html"/>
            <ProjectCard proj="Keycode Info" link="https://rocoriyan.github.io/CdNtnWeek3/keypress.html"/>
            <ProjectCard proj="React Calculator" link="https://rocoriyan.github.io/CdNtnWeek5/#/calculator"/>
            <ProjectCard proj="React To-do List" link="https://rocoriyan.github.io/CdNtnWeek5/#/todo"/>
            <ProjectCard proj="Cats4Life" link="https://rocoriyan.github.io/CdNtnWeek5/#/calculator"/>
            <ProjectCard proj="gamer4rum" link="https://github.com/ben02041992/final_project_forum_FE"/>
          </div>
        </dd>
      </div>
    </>
  )
}

export default App

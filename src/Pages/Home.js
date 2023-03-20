import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import EmailIcon from "@material-ui/icons/Email"
import "../styles/Home.css"
function Home() {
  return (
    <div className='home'>
      <div className='about'>
      <h2>Hi,My Name is Anandu K S</h2>
      <div className='prompt'>
        <p>I'm a Software Developer </p>
        <LinkedInIcon/>
        <EmailIcon/>
       
        </div>
        </div>
      <div className='skills'></div>
      <h1>Skills</h1>
      <ol className='list'>
        <li classname="item">
         <h2>Front-End</h2>
         <span>ReactJS,HTML,CSS,BootStrap</span>
        </li>
        <li classname="item">
         <h2>Back-End</h2>
         <span>NodeJS,MySQL</span>
        </li>
        <li classname="item">
         <h2>Languages</h2>
         <span>JavaScript,Python</span>
        </li>
      </ol>
    </div>
  )
}

export default Home
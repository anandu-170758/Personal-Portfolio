import React from 'react'
import Linkedin from '../SocialMedia/Linkedin'
import GitHub from "../SocialMedia/Github"
import Instagram from '../SocialMedia/Instagram'
import "../styles/Home.css"
import Twitter from "../SocialMedia/Twitter"//import CV from '../SocialMedia/CV'
import Email from '../SocialMedia/Email'
function Home() {
  return (
    <div className='home'>
      <div className='about'>
      <h3>Hi,My Name is Anandu K S</h3>
      <div className='prompt'>
        <p>I'm a Software Developer </p>
        <Linkedin/>
       
        <Email/>
        <Twitter/>
        <GitHub/>
        <Instagram/>
        
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
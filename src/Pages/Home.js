import React from 'react'
import Linkedin from '../SocialMedia/Linkedin'
import GitHub from "../SocialMedia/Github"
import Instagram from '../SocialMedia/Instagram'
import "../styles/Home.css"
import Twitter from "../SocialMedia/Twitter"//import CV from '../SocialMedia/CV'
import Email from '../SocialMedia/Email'
import Skills from './skills'
function Home() {
  return (
    <div className='home'>
      <div className='about'>
      <h3>Hi, My Name is Anandu K S!</h3>
      <p>I'm a Software Developer </p>
      <div className='prompt'>
       
        <Linkedin/>
       
        <Email/>
        <Twitter/>
        <GitHub/>
        <Instagram/>
       
        </div>
        </div>
        <Skills/>
      
    </div>
  )
}

export default Home
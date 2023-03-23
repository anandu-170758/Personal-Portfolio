import React from 'react'
import Linkedin from '../SocialMedia/Linkedin'
import GitHub from "../SocialMedia/Github"
import Instagram from '../SocialMedia/Instagram'
import "../styles/Home.css"
import Twitter from "../SocialMedia/Twitter"//import CV from '../SocialMedia/CV'
import Email from '../SocialMedia/Email'
import "../styles/skills.css"
function Home() {
  return (
    <div className='home'>
<div className='about'>
        
       
        <div className='prompt'>
       

     
          <Linkedin/>
          <Email/>
          <Twitter/>
          <GitHub/>
          <Instagram/>
          
          </div>
          </div>
      
        
     
      <div className='skills'></div>

      
      
      <div class="timeline">
        <h1>Skills</h1>
    <ul>
      <li>
        <div class="bullet pink"></div>
       
        <div class="desc">
          <h2>FRONT-END</h2>
          <h4>ReactJS,HTML,CSS,BootStrap</h4>
        </div>
      </li>
      <li>
        <div class="bullet green"></div>
      
        <div class="desc">
          <h2>Back-End</h2>
          <h4>NodeJS,MySQL</h4>
        </div>
      </li>
  
      <li>
        <div class="bullet orange"></div>
        
        <div class="desc">
          <h2>Languages</h2>
          <h4>Languages</h4>
        </div>
      </li>
      
    </ul>
  </div> 
    </div>
    
  )
}

export default Home

/**/
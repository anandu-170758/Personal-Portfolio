import React from 'react'
import Twitter from "../SocialMedia/Twitter"
import GitHub from "../SocialMedia/Github"
import "../styles/Footer.css"
import Instagram from '../SocialMedia/Instagram'
import LinkedIn from '../SocialMedia/Linkedin'
function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <Instagram/>
            <Twitter/>
            <LinkedIn/>
            <GitHub/>
        </div>
        <p>&copy;2023 AnanduKS.com</p>
    </div>
  )
}

export default Footer
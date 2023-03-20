import React from 'react'
import InstagramIcon from "@material-ui/icons/Instagram"
import TwitterIcon from "@material-ui/icons/Twitter"
import LinkedInICon from "@material-ui/icons/LinkedIn"

import "../styles/Footer.css"
function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <InstagramIcon/>
            <TwitterIcon/>
            <LinkedInICon/>
            
        </div>
        <p>&copy;2023 AnanduKS.com</p>
    </div>
  )
}

export default Footer
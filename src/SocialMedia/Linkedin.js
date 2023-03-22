import React from 'react'
import { IconButton } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Linkedin(){
  const handleClick = () =>{
    window.open("https://www.linkedin.com/in/anandu-k-s");
 }
 return (
    <IconButton onClick={handleClick}>
      < LinkedInIcon/>
    </IconButton>
  );
 }

export default Linkedin;
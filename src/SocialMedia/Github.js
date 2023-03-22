import React from 'react'
import GitHub from '@material-ui/icons/GitHub'
import { IconButton } from '@material-ui/core'
function Github() {

    const handleClick = () => {
        window.open('https://github.com/anandu-170758');
      };
    
  return (
    <IconButton onClick={handleClick}>
    <GitHub/>
  </IconButton>
    
  )
}

export default Github
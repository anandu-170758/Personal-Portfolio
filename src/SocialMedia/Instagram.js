import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import InstagramIcon from '@material-ui/icons/Instagram';

function Instagram() {
    const handleClick = () => {
        window.open('https://www.instagram.com/anandukmsyam/');
      };
    
      return (
        <IconButton onClick={handleClick}>
          <InstagramIcon />
        </IconButton>
      );
}


export default Instagram
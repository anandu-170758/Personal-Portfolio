import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import TwitterIcon from '@material-ui/icons/Twitter';

function Twitter() {
  const handleClick = () => {
    window.open('https://twitter.com/AnanduKS_10?t=GchYo0ZnISwXuUy138Ixig&s=09');
  };

  return (
    <IconButton onClick={handleClick}>
      <TwitterIcon />
    </IconButton>
  );
}

export default Twitter;

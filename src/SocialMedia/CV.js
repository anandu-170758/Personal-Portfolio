import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import ArticleIcon from '@material-ui/icons-material/Article'
function CV() {
    const handleClick = () => {
        window.open('https://app.luminpdf.com/viewer/6419bcbcc156d2c6851ac37f');
      };
    
      return (
        <IconButton onClick={handleClick}>
          <ArticleIcon />
        </IconButton>
      );
}

export default CV
import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import { FolderRounded} from '@material-ui/icons';
// import ArticleIcon from '@material-ui/icons-material/FolderRounded'
function Cv() {
    const handleClick = () => {
        window.open('https://drive.google.com/file/d/1RSh9xUexclj1HNsXrGz_6KYFAfGTu4LU/view?usp=drive_link');
      };
    
      return (
        <IconButton  onClick={handleClick}>
          <FolderRounded />
        </IconButton>
      );
}

export default Cv
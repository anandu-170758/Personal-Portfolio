import React, { useEffect, useState } from 'react'
import { Link,useLocation} from "react-router-dom";
import "../styles/Navbar.css"
import ReorderIcon from '@material-ui/icons/Reorder';
function Navbar() {
  const [expandNavbar,setExpandNavbar]=useState(false);
  const location = useLocation();
  useEffect(()=>{
    setExpandNavbar(false);
  },[location]);

  return (
    <div className="navbar" id={expandNavbar ? 'open':'close'}>
        <div className="togglebutton">
            <button onClick={()=>{
              setExpandNavbar((prev)=>!prev);
            }}><ReorderIcon/></button>
        </div>
        <div className='links'>
        <Link to="/"><u>Home</u></Link>
        <Link to="/Projects"><u>Projects</u></Link>
        <Link to="/Experiences"><u>Career-Profile</u></Link>
        </div>
    </div>
  )
}

export default Navbar;
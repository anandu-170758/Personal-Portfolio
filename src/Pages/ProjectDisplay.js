import React from 'react'
import {useParams} from 'react-router-dom'
import {ProjectList} from "../helpers/projectlist"
import GitHubIcon from "@material-ui/icons/GitHub"
import "../styles/projectDisplay.css"
function ProjectDisplay() {
    const {id} =useParams();
    const project =ProjectList[id];
  return (
    <div className='project'>
      <div className='meow'><h1>{project.name}</h1></div>
        
        <a href={project.url} target="_blank" style={{textDecoration:'none'}}><img src={project.Image} alt="hi"/></a>
    
    <p>
       <b>SKILLS</b>:{project.skills}
    </p>

  <p className="adjusted-margin">{project.description}</p>
    
    <br/>
    <a href={project.githuburl} target="_blank"> <GitHubIcon/></a>
   
    </div>
  )
}

export default ProjectDisplay
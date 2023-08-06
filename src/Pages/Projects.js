import React from 'react'
import ProjectItem from "../components/Projectitem"

import "../styles/Project.css"
import{ProjectList} from "../helpers/projectlist"


function Projects() {
  return (
    <div className='projects'>
      <h1>My Personal Projects</h1>
      <div className='projectList'>
       
       {ProjectList.map((Project,idx)=>{
        return <ProjectItem id={idx} name={Project.name} image={Project.Image} url={Project.url} description={Project.description}/>
       })}
      </div>
        
   </div>
  )
}

export default Projects
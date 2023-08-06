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
        <h1>{project.name}</h1>
        <a href={project.url} target="_blank" style={{textDecoration:'none'}}><img src={project.Image} alt="hi"/></a>
    
    <p>
       <b>SKILLS</b>:{project.skills}
    </p>
    <p>
     <b>I</b>ntroducing "<b>COVID-19 Stats Tracker</b>," a real-time application built using<b> ReactJS</b>,<b> HTML5</b>,and<b> CSS3</b>.
     It provides dynamic data on active and recovered cases by country, ensuring a seamless user experience with robust error handling and efficient data retrieval.
      The project features interactive line graphs and maps, allowing users to visualize and track <b>COVID-19</b> cases effortlessly. 
      Stay informed with the latest statistics and gain insights into the pandemic's impact worldwide with the <b>COVID-19</b>  Stats Tracker.
    </p>
    <a href={project.githuburl} target="_blank"> <GitHubIcon/></a>
   
    </div>
  )
}

export default ProjectDisplay
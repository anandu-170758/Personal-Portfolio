import React from 'react'
import { useNavigate } from 'react-router-dom'


function Projectitem({image,name,id,url}) {
    const navigate =useNavigate()
  return (
    <div className='projectItem'onClick={()=>{navigate("/Projects/"+id)}}>
        <div style={{backgroundImage:`url(${image})`}} className="bgImage"/>
          
        <h1>{name}</h1>
    </div>
  )
}

export default Projectitem
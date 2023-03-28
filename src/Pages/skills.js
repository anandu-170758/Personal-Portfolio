import React from 'react'
import "../styles/skills.css"
function Skills() {
  return (
    <div class="">
  <div class="container">
    <h2 class="pb-4 pt-4 border-bottom mb-5"><center>SKILLS</center></h2>
  
    <div class="row align-items-center how-it-works d-flex">
      <div class="col-2 text-center bottom d-inline-flex justify-content-center align-items-center">
        <div class="circle font-weight-bold">1</div>
      </div>
      <div class="col-6">
        <h5>Frond-End</h5>
        <p>
            HTML 5 | CSS3 | Bootstrap | React JS |  Adobe Photoshop
           
        </p>
      </div>
    </div>
    
    <div class="row timeline">
      <div class="col-2">
        <div class="corner top-right"></div>
      </div>
      <div class="col-8">
        <hr/>
      </div>
      <div class="col-2">
        <div class="corner left-bottom"></div>
      </div>
    </div>
 
    <div class="row align-items-center justify-content-end how-it-works d-flex">
      <div class="col-6 text-right">
        <h5>Back-End</h5>
        <p>Node JS | My SQL | SAP | MS Excel </p>
      </div>
      <div class="col-2 text-center full d-inline-flex justify-content-center align-items-center">
        <div class="circle font-weight-bold">2</div>
      </div>
    </div>

    <div class="row timeline">
      <div class="col-2">
        <div class="corner right-bottom"></div>
      </div>
      <div class="col-8">
        <hr/>
      </div>
      <div class="col-2">
        <div class="corner top-left"></div>
      </div>
    </div>
   
    <div class="row align-items-center how-it-works d-flex">
      <div class="col-2 text-center top d-inline-flex justify-content-center align-items-center">
        <div class="circle font-weight-bold">3</div>
      </div>
      <div class="col-6">
        <h5>Programming Languages</h5>
        <p> JavaScript | Python | Java</p>
      </div>
    </div>
  </div>
</div>
  )
}

export default Skills
import React from "react";
import { VerticalTimeline,VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from "@material-ui/icons/School"
import "../styles/Experience.css"

function Experiences() {
  return (<div className="experience">
    <VerticalTimeline lineColor="#3e497a">
      <VerticalTimelineElement
      className="vertical-timeline-element--education"
      date="2013-2014"
      iconStyle={{background:"#3e497a",colo:"#fff"}}
      icon={<SchoolIcon/>}
      >
        <h3 className="vertical-timeline-element-title font-fix-css">St. Thomas High School,Kallara,Kerala,India</h3>
        <h3 className="font-fix-css">High School </h3>
      </VerticalTimelineElement>

      <VerticalTimelineElement
      className="vertical-timeline-element--education"
      date="2014-2016"
      iconStyle={{background:"#3e497a",colo:"#fff"}}
      icon={<SchoolIcon/>}
      >
        <h3 className="vertical-timeline-element-title font-fix-css">St. Micheals HSS,Kaduthuruthy,Kerala,India</h3>
        <h3 className="font-fix-css">Higher Secondary</h3>
      </VerticalTimelineElement>

      <VerticalTimelineElement
      className="vertical-timeline-element--education"
      date="2017-2022"
      iconStyle={{background:"#3e497a",colo:"#fff"}}
      icon={<SchoolIcon/>}
      >
        <h3 className="vertical-timeline-element-title font-fix-css">National Institute of Technology,Calicut,India</h3>
        <h3 className="font-fix-css">Bachelor of Technology,Electronics and Communication</h3>
      </VerticalTimelineElement>


    </VerticalTimeline>

  </div>)
    

}

export default Experiences;
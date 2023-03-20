import React from "react";
import { VerticalTimeline,VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from "@material-ui/icons/School"

function Experiences() {
  return (<div className="experience">
    <VerticalTimeline lineColor="#3e497a">
      <VerticalTimelineElement
      className="vertical-timeline-element--education"
      date="2012-2015"
      iconStyle={{background:"#3e497a",colo:"#fff"}}
      icon={<SchoolIcon/>}
      >
        <h3 className="vertical-timeline-element-title">ST Thomas High School,Kallara,Kerala</h3>
        <h3>High School Diploma</h3>
      </VerticalTimelineElement>
    </VerticalTimeline>

  </div>)
    

}

export default Experiences;
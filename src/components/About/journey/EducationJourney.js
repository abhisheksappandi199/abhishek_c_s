import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { MdOutlineStar } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";

function EducationJourney() {
  return (
    <div className="mt-5">
      <div className="mt-5">
          <h1>Qualification Journey</h1>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "white" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2009 - 2013"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<FaGraduationCap />}
        >
          <h4 className="vertical-timeline-element-title">
          SECONDARY SCHOOL CERTIFICATE 
          </h4>
          <h4 className="vertical-timeline-element-subtitle mt-2">
          Shri Vijay Mahantesh, Ilkal
          </h4>
          <p>
            Studied here from Class 7th to 10th as a part of secondary school
            Certificate and gain 82% in my SSC Examination.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "white" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2013 - 2015"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<FaGraduationCap />}
        >
          <h4 className="vertical-timeline-element-title">
            PRE-UNIVERSITY COURSE
          </h4>
          <h4 className="vertical-timeline-element-subtitle mt-2">
            Chetan P. U. Science College
          </h4>
          <p>
            Studied PU in Chetan collage and gain 87%
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "white" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2015 - 2019"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<FaGraduationCap />}
        >
          <h4 className="vertical-timeline-element-title">GRADUATION</h4>
          <h4 className="vertical-timeline-element-subtitle mt-2">
            Dayananda Sagar College Of Engineering
          </h4>
          <p>
            Studied Bachelor of Engineering degree in Information Science and
            Engineering field from DSCE and gain CGPA 8.83.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
          icon={<MdOutlineStar />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default EducationJourney;

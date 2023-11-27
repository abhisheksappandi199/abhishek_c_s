import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { MdOutlineStar } from "react-icons/md";;

function EducationJourney() {
  return (
    <div className="mt-5">
      <div className="mt-5">
          <h1>Qualification Journey</h1>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2004 - 2014"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<MdOutlineStar />}
        >
          <h4 className="vertical-timeline-element-title">
            SECONDARY SCHOOL CERTIFICATE
          </h4>
          <h4 className="vertical-timeline-element-subtitle mt-2">
            BOF High School, Gazipur
          </h4>
          <p>
            Studied here from Class 1 to 10th as a part of secondary school
            Certificate and gain GPA 5 in my SSC Examination.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2014 - 2018"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<MdOutlineStar />}
        >
          <h4 className="vertical-timeline-element-title">
            DIPLOMA IN ENGINEERING
          </h4>
          <h4 className="vertical-timeline-element-subtitle mt-2">
            Dhaka Polytechnic Institute, Dhaka
          </h4>
          <p>
            Studied Diploma in Computer Technology from Dhaka Polytechnic
            institute and gain CGPA 2.98.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2019 - 2023"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<MdOutlineStar />}
        >
          <h4 className="vertical-timeline-element-title">GRADUATION</h4>
          <h4 className="vertical-timeline-element-subtitle mt-2">
            Sonargaon University, Dhaka
          </h4>
          <p>
            Studied Bachelor of Science degree in Computer Science and
            Engineering field from Sonargaon University and gain CGPA 3.44.
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

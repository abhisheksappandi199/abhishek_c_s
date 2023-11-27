import React from "react";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import TechnicalJourney from './journey/TechnicalJourney';
import ProjectJourney from './journey/ProjectJourney';
import ExperienceJourney from './journey/ExperienceJourney';
import EducationJourney from './journey/EducationJourney';
import { Container, Row, Col, Button } from "react-bootstrap";

function About() {
  const [selectedTab, setSelectedTab] = React.useState('educationjourney');

  const hanldeClick = (selected) => {
    setSelectedTab(selected)
  }

  const getTabs = () => {
    switch (selectedTab) {
      case 'technicaljourney': return <TechnicalJourney />
      case 'projectjourney': return <ProjectJourney />
      case 'educationjourney': return <EducationJourney />
      case 'experiencejourney': return <ExperienceJourney />
      default: return 'x'
    }
  }
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        <Button className="btn btn-primary m-1 journey-button" onClick={() => hanldeClick('educationjourney')}>
          Educational Journey
        </Button>
        <Button className="btn btn-primary m-1 journey-button" onClick={() => hanldeClick('experiencejourney')}>
          Experience Journey
        </Button>
        <Button className="btn btn-primary m-1 journey-button" onClick={() => hanldeClick('technicaljourney')}>
          Technical Journey
        </Button>
        <Button className="btn btn-primary m-1 journey-button" onClick={() => hanldeClick('projectjourney')}>
          Project Journey
        </Button>
        <>{getTabs()}</>

        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
        {/* <Github /> */}

      </Container>
    </Container>
  );
}

export default About;

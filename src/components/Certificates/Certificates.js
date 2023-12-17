import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards";
import Particle from "../Particle";
import purdue from "../../Assets/Certificates/purdue.jpg";
import javascript from '../../Assets/Certificates/javascript.jpg';
import adreact from '../../Assets/Certificates/advance-react.jpg';
import reactbs from '../../Assets/Certificates/react-basic.jpg';
import reactnative from '../../Assets/Certificates/react-native.jpg';
import microsoft from '../../Assets/Certificates/microsoft.png';

function Certificates() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Certifications </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              isCertificate={true}
              imgPath={purdue}
              isBlog={false}
              title="Exploring AI: Core Concepts and Applications Micro-credential"
              ghLink="https://www.credly.com/badges/7c39368c-43fc-4b1b-a830-2ff32eff002e/linked_in_profile"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isCertificate={true}
              imgPath={adreact}
              isBlog={false}
              title="Advanced React"
              ghLink="https://www.coursera.org/account/accomplishments/verify/FQPR95HRR7X2"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isCertificate={true}
              imgPath={reactnative}
              isBlog={false}
              title="React Native"
              ghLink="https://www.coursera.org/account/accomplishments/verify/3ZU89F32S57J"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isCertificate={true}
              imgPath={reactbs}
              isBlog={false}
              title="React Basic"
              ghLink="https://www.hackerrank.com/certificates/91bc70f1c327"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isCertificate={false}
              imgPath={microsoft}
              isBlog={true}
              title="Azure Fundamentals"
              hidebutton             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isCertificate={true}
              imgPath={javascript}
              isBlog={false}
              title="Javascript Intermediate"
              ghLink="https://www.hackerrank.com/certificates/a95ef51d20bb"
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Certificates;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import mobile from "../../Assets/Projects/mobile_shop.png";
import ilkal from "../../Assets/Projects/ilkal_1.jpg";
import react from "../../Assets/Projects/react.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ilkal}
              isBlog={false}
              title="Ilkal Sarees"
              description="E - Commerce Web Application that Completely focuses on providing the best Traditional sarees using React, Node and MangoDB."
              ghLink="https://github.com/abhisheksappandi199/react_e-commerce"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={react}
              isBlog={false}
              title="Billing Application"
              description="A comprehensive React.js billing application designed to streamline bill creation, while centralizing customer and product management for enhanced efficiency and organization."
              ghLink="https://github.com/abhisheksappandi199/billing-app"
              demoLink="https://react-billing-app.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mobile}
              isBlog={false}
              title="Mobile Store"
              description="An interactive React-based mobile store application featuring a diverse range of mobile devices and accessories for an immersive shopping experience, including cart functionalities."
              ghLink="https://github.com/abhisheksappandi199/React-Moblie-Store"
              demoLink="https://kind-bartik-558e07.netlify.app/"              
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpeg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I build Web-based soultions 🤷‍♂️
              <br />
              <br />I'm a Full Stack Developer and goal-driven creative mindset and passion for
              <i>
                {" "} <b className="purple"> learning and innovating </b>
              </i>
              <br />
              <br />
              Experienced in end-to-end software development. Having a good understanding of customer relations and having the
              <i>
                <b className="purple"> ability to provide high-quality products  </b>
                <b className="purple">
                </b>
              </i>
              on time
              <br />
              <br />
              I had worked as Full Stack Developer for 4.5 years during which I had worked with
              <i>

                <b className="purple">
                  <a className="purple home-link" href="https://www.accenture.com/in-en" target="blank"> Accenture </a>
                </b>
              </i> and
              <i>
                <b className="purple">
                  {" "}
                  <a className="purple home-link" href="https://www.kaplanlearn.com" target="blank"> Kaplan </a>
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/abhisheksappandi199"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/abhishek-c-sappandi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

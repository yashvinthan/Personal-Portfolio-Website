import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
//import editor from "../../Assets/Projects/codeEditor.png";
import Portfolio from "../../Assets/Projects/Personal-Portfolio-website-templates.png";

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
              imgPath={Portfolio}
              isBlog={false}
              title=" Personal Portfolio Website"
              description="Developed a personal portfolio website to showcase my projects and skills using HTML, CSS, and JavaScript. Designed a responsive and user-friendly interface. Implemented a contact form with JavaScript validation"
              ghLink="https://github.com/yashvinthan/-Personal-Portfolio-Website"
              //demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

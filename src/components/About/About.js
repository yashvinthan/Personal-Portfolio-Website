import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  React.useEffect(() => {
    document.title = "About | Yashvinthan M - Professional Skillset & Systems Tools";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Explore Yashvinthan M's technical skillset, infrastructure administration capabilities, security research setups, and academic achievements.");
    }
  }, []);

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
        <h2 className="project-heading" style={{ fontSize: "2.3em", color: "white", fontWeight: "500", paddingTop: "10px" }}>
          Professional <strong className="purple">Skillset </strong>
        </h2>

        <Techstack />

        <h2 className="project-heading" style={{ fontSize: "2.3em", color: "white", fontWeight: "500", paddingTop: "10px" }}>
          <strong className="purple">Tools</strong> I use
        </h2>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;

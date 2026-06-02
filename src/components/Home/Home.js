import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  React.useEffect(() => {
    document.title = "Yashvinthan M | Cybersecurity, Systems Infrastructure & Software Engineer";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Professional portfolio of Yashvinthan Moorthy, specializing in Cybersecurity Operations, Network Security, Systems Virtualization, and Advanced Software Engineering.");
    }
  }, []);

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> YASHVINTHAN M</strong>
              </h1>

              <div style={{ padding: 50, paddingTop: 30, paddingBottom: 10, textAlign: "left" }}>
                <Type />
              </div>

              <p style={{ paddingLeft: 50, paddingRight: 50, color: "#fff", opacity: 0.85, fontSize: "1.05em", textAlign: "left", lineHeight: "1.6" }}>
                Passionate about designing secure, scalable, and enterprise-grade IT environments. Experienced in networking, virtualization, firewall administration, infrastructure management, and cybersecurity through extensive hands-on homelab projects.
              </p>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;

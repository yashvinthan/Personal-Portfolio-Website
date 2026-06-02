import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Yashvinthan M</span>
            {" "}from <span className="purple">Tamil Nadu, India.</span>
            <br />
            I am currently pursuing a <b className="purple">B.Tech in Computer Science and Engineering</b> at <b className="purple">Dr. MGR Educational and Research Institute</b>.
            <br />
            I am a dedicated technology enthusiast focused on <b className="purple">Cybersecurity, Network Engineering, Infrastructure Administration, and Enterprise Homelab Design</b>.
            <br /><br />
            My goal is to build a career bridging <b className="purple">Cybersecurity Operations, Infrastructure Engineering, Network Security, Software Engineering, DevOps, Web Development, and Application Engineering</b>—actively bringing these disciplines together through hands-on enterprise homelabbing, advanced software creation, and robust systems design.
            <br />
            <br />
            Apart from engineering labs, some activities I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Analyzing security architectures & threat intelligence reports
            </li>
            <li className="about-activity">
              <ImPointRight /> Competing in Capture The Flag (CTF) events
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to technology podcasts
            </li>
            <li className="about-activity">
              <ImPointRight /> Building DIY electronics & smart home integrations
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Keep building things that truly matter!"{" "}
          </p>
          <footer className="blockquote-footer">Yashvinthan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

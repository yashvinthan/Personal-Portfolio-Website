import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Yashvinthan </span>
            from <span className="purple"> Tamil Nadu, India.</span>
            <br />
            I'm currently pursuing a B.Tech in Computer Science and Engineering at Dr. MGR Educational and Research Institute.
            <br />
            Always looking for opportunities to learn, collaborate, and build impactful solutions.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> listening to music
            </li>
            <li className="about-activity">
              <ImPointRight /> building diy projects
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Building things that truly matter!"{" "}
          </p>
          <footer className="blockquote-footer">Yashvinthan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

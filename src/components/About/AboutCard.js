import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Yashvinthan</span>
            {" "}from <span className="purple">Tamil Nadu, India.</span>
            <br />
            I’m currently pursuing a <b className="purple">B.Tech in Computer Science and Engineering</b> at 
            <b className="purple"> Dr. MGR Educational and Research Institute</b>.
            <br />
            I am passionate about <b className="purple">AI, IoT, App Development</b>, and exploring areas related to 
            <b className="purple"> Blockchain</b>. I also love working on <b className="purple">home lab projects</b> with Proxmox, OPNsense, and Cloudflare.
            <br />
            <br />
            Always looking for opportunities to <b className="purple">learn, collaborate, and build impactful solutions</b>.
            <br />
            <br />
            Apart from coding and projects, some activities I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing strategy & multiplayer games
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to music & podcasts
            </li>
            <li className="about-activity">
              <ImPointRight /> Building DIY electronics / IoT projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring tech communities & hackathons
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

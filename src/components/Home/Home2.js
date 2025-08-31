import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
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
  I am a passionate <b className="purple">Computer Science and Engineering</b> student at 
  <b className="purple"> Dr. MGR Educational and Research Institute</b>.
  <br /><br />
  Skilled in programming with <b className="purple">C, C++, Python, Java, and JavaScript</b>, I also work extensively with
  <b className="purple"> React.js, SQL/MySQL, Git, and Proxmox</b>.
  <br /><br />
  My interests include <i><b className="purple">App Development</b>, 
  <b className="purple"> AI & IoT projects</b>, and exploring areas related to 
  <b className="purple"> Blockchain</b>.</i>
  <br /><br />
  Some of my projects include:
  <ul>
    <li><b className="purple">AI-Powered Camera</b> using ESP32-CAM & GPT-4o for real-time image analysis.</li>
    <li><b className="purple">Personal Portfolio Website</b> built with HTML, CSS, and JavaScript.</li>
    <li><b className="purple">Home Lab Setup</b> with Proxmox, OPNsense firewall, and Cloudflare tunnels.</li>
  </ul>
  <br />
  I actively participate in <b className="purple">coding competitions</b>, hackathons, and university clubs,
  and was awarded <b className="purple">1st Place</b> in an Internal CTF by the Coding Club.
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
                  href="https://github.com/yashvinthan"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/yashvinthan-moorthy-86a49a297"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/_yashvinthan_"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
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

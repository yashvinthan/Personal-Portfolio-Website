import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import Portfolio from "../../Assets/Projects/Personal-Portfolio-website-templates.png";
import HomeLabThumb from "../../Assets/Blogs/home-lab-thumbnail.png"; // blog thumbnail
import HappyBDayThumb from "../../Assets/Projects/happy-birthday-thumb.png";
import AIVisionThumb from "../../Assets/Projects/ai-vision-assistant.png";
import AutoTyperThumb from "../../Assets/Projects/AutoTyper.png";
import MCPAutomationThumb from "../../Assets/Projects/chatify.png";
import ParkingSystemThumb from "../../Assets/Projects/online-parking-system.png";
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
          {/* Portfolio site */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              isBlog={false}
              title="Personal Portfolio Website"
              description="Developed a personal portfolio website to showcase my projects and skills using HTML, CSS, and JavaScript. Designed a responsive and user-friendly interface. Implemented a contact form with JavaScript validation."
              ghLink="https://github.com/yashvinthan/Personal-Portfolio-Website"
            />
          </Col>

          {/* Home Lab (links to blog) */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HomeLabThumb}
              isBlog={true}
              title="Home Lab: Proxmox + OPNsense"
              description="Built a student home lab with a Proxmox cluster, OPNsense firewall, and self-hosted services (Nextcloud, Grafana, Vaultwarden) to learn virtualization, networking, and system admin."
              ghLink="/blog/my-student-home-lab"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HappyBDayThumb}
              isBlog={false}
              title="Happy Birthday Website"
              description="Customizable birthday greeting with animations, music toggle, countdown, confetti, and a surprise video reveal."
              ghLink="https://github.com/yashvinthan/happy-birthday-website"
              demoLink="https://yashvinthan.github.io/happy-birthday-website/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AIVisionThumb}
              isBlog={false}
              title="AI Vision Assistant (ESP32-CAM + OLED + GPT-4o)"
              description="ESP32-CAM captures an image, sends it to a secure proxy for GPT-4o vision analysis, shows a concise result on an OLED, and beeps via buzzer for quick feedback."
              ghLink="https://github.com/yashvinthan/ai-cam"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MCPAutomationThumb}
              isBlog={true}
              title="Integrating n8n-MCP with Claude Desktop"
              description="Configured the open-source n8n-mcp server so Claude can explore 500+ nodes, read docs, and trigger managed workflows with guardrails."
              ghLink="/blog/mcp-n8n-automation"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ParkingSystemThumb}
              isBlog={false}
              title="Online Parking System"
              description="Full-stack parking management platform with admin KPIs, slot allocation, and digital bookings to reduce congestion for busy facilities."
              ghLink="https://github.com/yashvinthan/online-parking-system"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AutoTyperThumb}
              isBlog={false}
              title="StealthAutoTyper - Human-like Typing Bot"
              description="Win32 SendInput auto-typer with human-like cadence, typo+backspace, CPU pacing, hotkeys, and no-repeats guard."
              ghLink="https://github.com/yashvinthan/StealthAutoTyper"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

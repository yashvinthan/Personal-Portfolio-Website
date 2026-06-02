import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import Portfolio from "../../Assets/Projects/Personal-Portfolio-website-templates.png";
import HomeLabThumb from "../../Assets/Blogs/home-lab-thumbnail.png";
import HappyBDayThumb from "../../Assets/Projects/happy-birthday-thumb.png";
import AIVisionThumb from "../../Assets/Projects/ai-vision-assistant.png";
import AutoTyperThumb from "../../Assets/Projects/AutoTyper.png";
import MCPAutomationThumb from "../../Assets/Projects/chatify.png";
import ParkingSystemThumb from "../../Assets/Projects/online-parking-system.png";
import blog1Thumb from "../../Assets/Blogs/blog1-thumbnail.png";
import StudyTetherThumb from "../../Assets/Projects/studytether.png";
import HRMSThumb from "../../Assets/Projects/hrms.png";
import EndoGuardThumb from "../../Assets/Projects/endoguard.png";
import DuskSpendrWebThumb from "../../Assets/Projects/duskspendr-website.png";
import DuskSpendrThumb from "../../Assets/Projects/duskspendr.png";
import PocketAIThumb from "../../Assets/Projects/pocket-ai.png";

function Projects() {
  React.useEffect(() => {
    document.title = "Projects | Yashvinthan M - Systems & Software Engineering Portfolio";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Discover Yashvinthan M's engineering catalog, showcasing 14 projects spanning Cybersecurity, Network Infrastructure, Systems Automation, and Enterprise Applications.");
    }
  }, []);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently, combining system administration, networking, security, and full-stack development.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* 1. Enterprise Homelab Architecture */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HomeLabThumb}
              isBlog={true}
              title="Enterprise Homelab Architecture"
              description="Built and maintain a multi-VLAN student homelab featuring a Proxmox cluster, Sophos flashed with OPNsense, and self-hosted services (Nextcloud, Grafana, Vaultwarden) to gain deep practical experience in virtualization and system administration."
              ghLink="/blog/my-student-home-lab"
            />
          </Col>

          {/* 2. AI Vision Assistant */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AIVisionThumb}
              isBlog={false}
              title="AI Vision Assistant (ESP32-CAM + OLED + GPT-4o)"
              description="IoT hardware project: ESP32-CAM captures images, sends them to a secure server proxy for GPT-4o vision analysis, displaying concise results on an OLED screen with active auditory feedback."
              ghLink="https://github.com/yashvinthan/ai-cam"
            />
          </Col>

          {/* 3. n8n-MCP Claude Integration */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MCPAutomationThumb}
              isBlog={true}
              title="n8n-MCP Claude Workflow Automation"
              description="Integrated n8n workflow management with Claude Desktop utilizing the open-source Model Context Protocol (MCP) server, configuring custom guardrails and full Loki logs aggregation."
              ghLink="/blog/mcp-n8n-automation"
            />
          </Col>

          {/* 4. EndoGuard */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={EndoGuardThumb}
              isBlog={false}
              title="EndoGuard"
              description="A secure clinical tracking database portal built in PHP. Integrates robust input sanitization, dynamic query parameterization to block SQL injection, session lifecycle controls, and fine-grained role-based view layers."
              ghLink="https://github.com/yashvinthan/EndoGuard"
            />
          </Col>

          {/* 5. HRMS */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HRMSThumb}
              isBlog={false}
              title="HRMS (HR Management System)"
              description="An enterprise-grade Human Resource Management System engineered with TypeScript. Incorporates secure JSON Web Token authentication, role-based access control (RBAC), and centralized organizational workflows."
              ghLink="https://github.com/yashvinthan/hrms"
            />
          </Col>

          {/* 6. StudyTether */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={StudyTetherThumb}
              isBlog={false}
              title="StudyTether (study-companion)"
              description="A real-time student productivity and collaborative task-management web application. Built in TypeScript to synchronize learning metrics, coordinate dynamic task assignments, and manage shared resource pools."
              ghLink="https://github.com/yashvinthan/study-companion"
            />
          </Col>

          {/* 7. Online Parking System */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ParkingSystemThumb}
              isBlog={false}
              title="Online Parking System"
              description="Full-stack parking facility reservation and management platform with automated slot allocation, real-time tracking, administration dashboards, and secure digital booking flows."
              ghLink="https://github.com/yashvinthan/online-parking-system"
              demoLink="https://parking.webistzu.online/"
            />
          </Col>

          {/* 8. DuskSpendr */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DuskSpendrThumb}
              isBlog={false}
              title="DuskSpendr"
              description="A secure, offline-first personal finance tracker mobile application developed in Dart and Flutter. Integrates local database encryption, dynamic budgeting thresholds, and automated cashflow visualizers."
              ghLink="https://github.com/yashvinthan/DuskSpendr"
            />
          </Col>

          {/* 9. DuskSpendr-website */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DuskSpendrWebThumb}
              isBlog={false}
              title="DuskSpendr Platform Landing"
              description="Responsive, high-fidelity TypeScript/React marketing and landing website for the DuskSpendr financial application, featuring custom themes, micro-animations, and client lead collection pipelines."
              ghLink="https://github.com/yashvinthan/DuskSpendr-website"
            />
          </Col>

          {/* 10. Accusys ACS6x Driver Modernization */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HomeLabThumb}
              isBlog={false}
              title="Accusys ACS6x Driver Modernization"
              description="Refactored and modernized legacy Linux kernel device block drivers written in C for Accusys ACS6x RAID controllers. Ported legacied allocations to modern stable kernel APIs and resolved concurrency race conditions."
              ghLink="https://github.com/yashvinthan/linux-drivers"
            />
          </Col>

          {/* 11. Pocket AI */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PocketAIThumb}
              isBlog={false}
              title="Pocket AI"
              description="A lightweight generative AI assistant and chatbot built in Python and Flutter. Integrates OpenAI API securely, utilizing conversation memory buffers and dynamic context temperature sliders."
              ghLink="https://github.com/yashvinthan/pocket_ai"
            />
          </Col>

          {/* 12. StealthAutoTyper */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AutoTyperThumb}
              isBlog={false}
              title="StealthAutoTyper"
              description="A highly optimized human-mimicking auto-typing engine utilizing Win32 SendInput. Emulates human rhythm variance, randomized backspacing and typo generation, and CPU-efficient throttle controls."
              ghLink="https://github.com/yashvinthan/StealthAutoTyper"
            />
          </Col>

          {/* 13. Personal Portfolio Website */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              isBlog={false}
              title="Personal Portfolio Website"
              description="Designed and deployed a responsive React personal portfolio to showcase projects and active skillsets. Self-hosted on a Proxmox cluster, routed securely via Nginx Proxy Manager and Cloudflare Tunnels."
              ghLink="https://github.com/yashvinthan/Personal-Portfolio-Website"
            />
          </Col>

          {/* 14. Happy Birthday Website */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HappyBDayThumb}
              isBlog={false}
              title="Happy Birthday Greeting Platform"
              description="A highly customized, interactive greeting web page featuring smooth Canvas confetti animations, responsive countdowns, dynamic background audio selectors, and custom HTML5 surprise modules."
              ghLink="https://github.com/yashvinthan/happy-birthday-website"
              demoLink="https://yashvinthan.github.io/happy-birthday-website/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

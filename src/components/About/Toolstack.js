import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiWindows,
  SiLinux,
  SiGit,
  SiDocker,
  SiGrafana,
  SiWireshark,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="Windows Administration & Windows Server">
        <SiWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Enterprise Linux Operating Systems">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Wireshark (Network Traffic Analyzer)">
        <SiWireshark />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Docker (Container Virtualization)">
        <SiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Grafana (Infrastructure Observability & Monitoring)">
        <SiGrafana />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Visual Studio Code">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Git Version Control">
        <SiGit />
      </Col>
    </Row>
  );
}

export default Toolstack;

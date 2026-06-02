import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { SiPython, SiMysql, SiProxmox, SiLinux, SiCloudflare, SiCisco } from "react-icons/si";
import { DiJava } from "react-icons/di";
import { FaNetworkWired } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="Python (Scripting & Automation)">
        <SiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Proxmox VE (Hypervisor & Virtualization)">
        <SiProxmox />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Linux Systems Administration">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Cisco Systems (Routing, Switching & VLANs)">
        <SiCisco />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Network Engineering / VLAN Segmentation">
        <FaNetworkWired />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Cloudflare Tunnels & Web Security">
        <SiCloudflare />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="MySQL / Database Design">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="C++ Programming">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Java Development">
        <DiJava />
      </Col>
    </Row>
  );
}

export default Techstack;

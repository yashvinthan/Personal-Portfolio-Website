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
              I am a dedicated technology enthusiast focused on <b className="purple">Cybersecurity, Network Engineering, Infrastructure Administration, and Enterprise Homelab Design</b>.
              <br /><br />
              Currently pursuing a B.Tech in <b className="purple">Computer Science and Engineering</b> at <b className="purple">Dr. MGR Educational and Research Institute</b>, I combine my academic foundation with intensive, practical engineering.
              <br /><br />
              My expertise is built upon designing, implementing, and securing complex enterprise-style IT environments. I continuously expand my skills through hands-on troubleshooting, network virtualization, and real-world system administration challenges.
              <br /><br />
              I actively participate in security events and university technical communities, and was awarded <b className="purple">1st Place</b> in an Internal CTF by the university Coding Club.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row style={{ marginTop: "50px" }}>
          <Col md={12} className="home-about-description" style={{ paddingTop: "20px" }}>
            <h1 style={{ fontSize: "2.3em" }}>
              ENTERPRISE-GRADE <span className="purple"> INFRASTRUCTURE PLATFORM </span>
            </h1>
            <p className="home-about-body" style={{ textAlign: "center", paddingTop: "15px" }}>
              Designed, built, and maintain a multi-node production-style infrastructure environment simulating real-world enterprise operations and cybersecurity workflows.
            </p>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Dell T440 */}
          <Col md={4} style={{ padding: "15px" }}>
            <div style={{
              background: "rgba(20, 10, 35, 0.45)",
              border: "1.7px solid rgba(200, 137, 230, 0.3)",
              borderRadius: "8px",
              padding: "25px",
              height: "100%",
              textAlign: "left",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)"
            }}>
              <h3 className="purple" style={{ fontSize: "1.25em", marginBottom: "15px" }}><b>Production Infrastructure</b></h3>
              <h4 style={{ color: "#c770f0", fontSize: "1.05em", marginBottom: "10px" }}>🖥️ Dell T440</h4>
              <ul style={{ listStyleType: "none", paddingLeft: 0, lineHeight: "1.8", color: "#fff", fontSize: "0.95em" }}>
                <li>• Primary Infrastructure Server</li>
                <li>• Core Services Platform</li>
                <li>• Virtualization Host</li>
                <li>• Enterprise Workloads</li>
              </ul>
            </div>
          </Col>

          {/* HP Z800 */}
          <Col md={4} style={{ padding: "15px" }}>
            <div style={{
              background: "rgba(20, 10, 35, 0.45)",
              border: "1.7px solid rgba(200, 137, 230, 0.3)",
              borderRadius: "8px",
              padding: "25px",
              height: "100%",
              textAlign: "left",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)"
            }}>
              <h3 className="purple" style={{ fontSize: "1.25em", marginBottom: "15px" }}><b>Storage & Backup</b></h3>
              <h4 style={{ color: "#c770f0", fontSize: "1.05em", marginBottom: "10px" }}>💾 HP Z800</h4>
              <ul style={{ listStyleType: "none", paddingLeft: 0, lineHeight: "1.8", color: "#fff", fontSize: "0.95em" }}>
                <li>• Storage Server & NAS Platform</li>
                <li>• Proxmox Backup Server</li>
                <li>• Backup & Recovery Services</li>
              </ul>
            </div>
          </Col>

          {/* Ryzen 5 3600 */}
          <Col md={4} style={{ padding: "15px" }}>
            <div style={{
              background: "rgba(20, 10, 35, 0.45)",
              border: "1.7px solid rgba(200, 137, 230, 0.3)",
              borderRadius: "8px",
              padding: "25px",
              height: "100%",
              textAlign: "left",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)"
            }}>
              <h3 className="purple" style={{ fontSize: "1.25em", marginBottom: "15px" }}><b>Application Hosting</b></h3>
              <h4 style={{ color: "#c770f0", fontSize: "1.05em", marginBottom: "10px" }}>⚡ Ryzen 5 3600</h4>
              <ul style={{ listStyleType: "none", paddingLeft: 0, lineHeight: "1.8", color: "#fff", fontSize: "0.95em" }}>
                <li>• Self-Hosted Applications</li>
                <li>• Service Hosting</li>
                <li>• Development Environment</li>
                <li>• Internal Services</li>
              </ul>
            </div>
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* AMD 5700G */}
          <Col md={6} style={{ padding: "15px" }}>
            <div style={{
              background: "rgba(20, 10, 35, 0.45)",
              border: "1.7px solid rgba(200, 137, 230, 0.3)",
              borderRadius: "8px",
              padding: "25px",
              height: "100%",
              textAlign: "left",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)"
            }}>
              <h3 className="purple" style={{ fontSize: "1.25em", marginBottom: "15px" }}><b>Cybersecurity & SOC</b></h3>
              <h4 style={{ color: "#c770f0", fontSize: "1.05em", marginBottom: "10px" }}>🛡️ AMD 5700G</h4>
              <ul style={{ listStyleType: "none", paddingLeft: 0, lineHeight: "1.8", color: "#fff", fontSize: "0.95em" }}>
                <li>• Cybersecurity Lab</li>
                <li>• Security Operations Center (SOC)</li>
                <li>• Threat Detection Testing</li>
                <li>• Security Research Environment</li>
                <li>• Incident Response Practice</li>
              </ul>
            </div>
          </Col>

          {/* Network Infrastructure */}
          <Col md={6} style={{ padding: "15px" }}>
            <div style={{
              background: "rgba(20, 10, 35, 0.45)",
              border: "1.7px solid rgba(200, 137, 230, 0.3)",
              borderRadius: "8px",
              padding: "25px",
              height: "100%",
              textAlign: "left",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)"
            }}>
              <h3 className="purple" style={{ fontSize: "1.25em", marginBottom: "15px" }}><b>Network Infrastructure</b></h3>
              <ul style={{ listStyleType: "none", paddingLeft: 0, lineHeight: "1.45", color: "#fff", fontSize: "0.85em" }}>
                <li>🛡️ <b>Sophos XG210</b> (Edge Firewall running OPNsense)</li>
                <li>🛡️ <b>Cisco Catalyst 3850</b> (Routing & Switching Lab)</li>
                <li>🔌 <b>Netgear GS110TP</b> (Core Switch & VLAN Dist)</li>
                <li>🔌 <b>Netgear GS108T</b> (Server Access Switch)</li>
                <li>🔌 <b>D-Link DGS-1210-28P</b> (CCTV & AP PoE Switch)</li>
                <li>🔌 <b>Netgear GS108E</b> (Home Device Connectivity)</li>
                <li>🔌 <b>TP-Link TL-SG108E</b> (Downstairs Extension)</li>
                <li>📡 <b>Aruba APIN0315</b> (Enterprise Wave 2 AP)</li>
                <li>📡 <b>TP-Link C1200 & C20</b> (Dual-Band AP Coverage)</li>
              </ul>
            </div>
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Laptop Node */}
          <Col md={6} style={{ padding: "15px" }}>
            <div style={{
              background: "rgba(20, 10, 35, 0.45)",
              border: "1.7px solid rgba(200, 137, 230, 0.3)",
              borderRadius: "8px",
              padding: "25px",
              height: "100%",
              textAlign: "left",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)"
            }}>
              <h3 className="purple" style={{ fontSize: "1.25em", marginBottom: "15px" }}><b>Cluster & Recovery</b></h3>
              <h4 style={{ color: "#c770f0", fontSize: "1.05em", marginBottom: "10px" }}>💻 Laptop Node</h4>
              <ul style={{ listStyleType: "none", paddingLeft: 0, lineHeight: "1.8", color: "#fff", fontSize: "0.95em" }}>
                <li>• Test Node</li>
                <li>• Quorum Witness Node</li>
                <li>• Recovery Node</li>
                <li>• Disaster Recovery Testing</li>
              </ul>
            </div>
          </Col>

          {/* Power & Resiliency Infrastructure */}
          <Col md={6} style={{ padding: "15px" }}>
            <div style={{
              background: "rgba(20, 10, 35, 0.45)",
              border: "1.7px solid rgba(200, 137, 230, 0.3)",
              borderRadius: "8px",
              padding: "25px",
              height: "100%",
              textAlign: "left",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)"
            }}>
              <h3 className="purple" style={{ fontSize: "1.25em", marginBottom: "15px" }}><b>Power & Resiliency</b></h3>
              <h4 style={{ color: "#c770f0", fontSize: "1.05em", marginBottom: "10px" }}>🔋 Uninterruptible Power Supply (UPS)</h4>
              <ul style={{ listStyleType: "none", paddingLeft: 0, lineHeight: "1.5", color: "#fff", fontSize: "0.85em", marginBottom: "15px" }}>
                <li>⚡ <b>5x APC Back-UPS BX1100C-IN</b> (1100VA - Servers, Network & Firewall protection)</li>
                <li>⚡ <b>1x APC Back-UPS Pro BR1000G-IN</b> (1000VA - Dedicated Workstation protection)</li>
                <li>⚡ <b>1x APC Back-UPS Pro External Battery Pack</b> (Extended Runtime & DR readiness)</li>
              </ul>
              <h4 style={{ color: "#c770f0", fontSize: "1.05em", marginBottom: "10px" }}>🛡️ Reliability Features</h4>
              <ul style={{ listStyleType: "none", paddingLeft: 0, lineHeight: "1.5", color: "#fff", fontSize: "0.85em" }}>
                <li>• Multi-UPS deployment with Automatic Voltage Regulation (AVR)</li>
                <li>• Graceful automated shutdown sequences & critical service protection</li>
                <li>• Enterprise-style power management & homelab High Availability planning</li>
              </ul>
            </div>
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
          {/* Core Technologies Full Width Card */}
          <Col md={12} style={{ padding: "15px" }}>
            <div style={{
              background: "rgba(20, 10, 35, 0.45)",
              border: "1.7px solid rgba(200, 137, 230, 0.3)",
              borderRadius: "8px",
              padding: "25px",
              textAlign: "center",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)"
            }}>
              <h3 className="purple" style={{ fontSize: "1.3em", marginBottom: "20px" }}><b>Core Technologies</b></h3>
              <p style={{ color: "#fff", lineHeight: "2", fontSize: "1.05em", wordSpacing: "2px" }}>
                OPNsense • Proxmox VE • Proxmox Backup Server • Linux • Windows • VLAN Segmentation • DNS • DHCP • VPN Technologies • Cloudflare Tunnel • Reverse Proxy • Infrastructure Monitoring • Security Monitoring • Network Security • Backup & Disaster Recovery • Virtualization • Enterprise Networking
              </p>
            </div>
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

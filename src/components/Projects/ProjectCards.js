import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { AiOutlineRead } from "react-icons/ai";
import { Link } from "react-router-dom";

function ProjectCards(props) {
  const { imgPath, title, description, ghLink, demoLink, isBlog } = props;

  return (
    <Card className="project-card-view d-flex flex-column" style={{ height: "100%" }}>
      <Card.Img 
        variant="top" 
        src={imgPath} 
        alt="card-img" 
        style={{ height: "200px", objectFit: "cover", borderRadius: "10px 10px 0 0" }} 
      />
      <Card.Body className="d-flex flex-column flex-grow-1">
        <div className="flex-grow-1">
          <Card.Title style={{ fontWeight: "bold", fontSize: "1.2em", marginBottom: "15px" }}>{title}</Card.Title>
          <Card.Text style={{ textAlign: "justify", fontSize: "0.95em", lineHeight: "1.5" }}>
            {description}
          </Card.Text>
        </div>
        
        <div style={{ marginTop: "auto", paddingTop: "15px", textAlign: "center" }}>
          {/* Blog button uses AiOutlineRead */}
          {isBlog ? (
            <Link to={ghLink} style={{ textDecoration: "none" }}>
              <Button variant="primary">
                <AiOutlineRead /> &nbsp; Read Blog
              </Button>
            </Link>
          ) : (
            <Button variant="primary" href={ghLink} target="_blank">
              <BsGithub /> &nbsp; GitHub
            </Button>
          )}

          {/* Demo button only for non-blog projects */}
          {!isBlog && demoLink && (
            <Button
              variant="primary"
              href={demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp; Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;

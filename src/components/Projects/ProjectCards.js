import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { AiOutlineRead } from "react-icons/ai";   // ✅ new icon for blogs
import { Link } from "react-router-dom";

function ProjectCards(props) {
  const { imgPath, title, description, ghLink, demoLink, isBlog } = props;

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {description}
        </Card.Text>

        {/* ✅ Blog button uses AiOutlineRead */}
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
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;

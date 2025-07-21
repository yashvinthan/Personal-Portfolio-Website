import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleCardClick = () => {
    if (props.routeTo) {
      navigate(props.routeTo);
    }
  };

  const cardStyle = {
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    transform: isHovered ? "translateY(-10px) scale(1.02)" : "none",
    boxShadow: isHovered
      ? "0 12px 24px rgba(0, 0, 0, 0.3)"
      : "0 4px 12px rgba(0, 0, 0, 0.15)",
    border: "none",
    borderRadius: "12px",
    backgroundColor: "#1e1e1e",
    color: "#ffffff",
    overflow: "hidden",
    cursor: props.routeTo ? "pointer" : "default",
  };

  const imgStyle = {
    transition: "transform 0.4s ease",
    transform: isHovered ? "scale(1.05)" : "scale(1)",
    height: "200px",
    objectFit: "cover",
    width: "100%",
  };

  return (
    <Card
      className="project-card-view"
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      <Card.Img variant="top" src={props.imgPath} alt="card-img" style={imgStyle} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify", color: "#ccc" }}>
          {props.description}
        </Card.Text>

        {/* GitHub or Blog button */}
        {props.ghLink && (
          <Button
            variant="primary"
            href={props.ghLink}
            target="_blank"
            onClick={(e) => e.stopPropagation()}
          >
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
        )}

        {/* Optional Demo link */}
        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
            onClick={(e) => e.stopPropagation()}
          >
            <CgWebsite /> &nbsp; Demo
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;

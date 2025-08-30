import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Button, Row } from "react-bootstrap";
import Particle from "../Particle";
import blogData from "./blogData";
import { BsGithub } from "react-icons/bs";
import { AiOutlineArrowLeft } from "react-icons/ai"; // ✅ Import the arrow icon

function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const blog = blogData.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 style={{ color: "white", textAlign: "center" }}>
            404 - Blog Not Found
          </h1>
        </Container>
      </Container>
    );
  }

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container style={{ maxWidth: "800px", paddingBottom: "50px" }}>
        {/* ✅ GitHub or Blog External Link */}
        {blog.ghLink && (
          <Button
            variant="primary"
            href={blog.ghLink}
            target="_blank"
            style={{
              marginBottom: "20px",
              marginLeft: "10px",
              fontWeight: "bold",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <BsGithub />
            {blog.isBlog ? "Read Blog" : "GitHub"}
          </Button>
        )}

        {/* ✅ Title and Meta Info */}
        <h1 className="project-heading">{blog.title}</h1>
        <p style={{ color: "#bbb", fontSize: "0.9rem" }}>
          {blog.date} • {blog.readTime}
        </p>

        {/* ✅ Thumbnail */}
        <img
          src={blog.imgPath}
          alt={blog.title}
          style={{
            width: "100%",
            borderRadius: "12px",
            marginBottom: "25px",
          }}
        />

        {/* ✅ Blog Content */}
        <div
        className="blog-content"
          style={{
            color: "white",
            lineHeight: "1.8",
            fontSize: "1.05rem",
            textAlign: "justify",
          }}
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </Container>
              {/* ✅ Back to Blogs Button */}
      <Row style={{ justifyContent: "center", position: "relative" }}>
              <Button
          variant="primary"
          onClick={() => navigate("/blog")}
          style={{ maxWidth: "250px", marginBottom: "20px" }}
        >
          <AiOutlineArrowLeft />
          &nbsp;Back to Blogs
        </Button>
        </Row>
    </Container>
  );
}

export default BlogPost;

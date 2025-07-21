import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import BlogCards from "./BlogCards";
import blogData from "./blogData";

function Blog() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">My <strong className="purple">Blogs</strong></h1>
        <p style={{ color: "white" }}>Explore my thoughts and technical guides below.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {blogData.map((blog, index) => (
            <Col md={4} key={index} className="project-card">
              <BlogCards
                imgPath={blog.imgPath}
                title={blog.title}
                description={blog.description}
                date={blog.date}
                readTime={blog.readTime}
                route={blog.slug}
                routeTo={`/blog/${blog.slug}`}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Blog;

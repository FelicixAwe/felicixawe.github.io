import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import foodhub from "../../Assets/Projects/foodhub.png";
import LINK from "../../Assets/Projects/LINK.png";
import PersonalWebsite from "../../Assets/Projects/PersonalWebsite.png";

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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LINK}
              isBlog={false}
              title="LINK"
              description="A real-time chat application replicating the core features of Discord, allowing users to seamlessly communicate and collaborate in themed channels, supporting video and audio channels and enabling users to engage in face-to-face video interactions and crystal-clear audio conversations."
              ghLink="https://github.com/FelicixAwe/LINK"
              demoLink="https://felicixawe-link.up.railway.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PersonalWebsite}
              isBlog={false}
              title="Personal Website"
              description="My personal website builds with React.js, Node.js, Express.js, CSS3."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodhub}
              isBlog={false}
              title="FoodHub"
              description="Foodhub is a MERN stack-based recipe sharing platform. Users can discover global recipes, filter by tags, use a search bar, or get random dish suggestions. Features include recipe liking, commenting, and user-contributed posts."
              ghLink="https://github.com/FelicixAwe/Food-Hub"
              // demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" data-label="MacOS">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-label="VS Code">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-label="Postman">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-label="Slack">
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-label="Vercel">
        <SiVercel />
      </Col>
    </Row>
  );
}

export default Toolstack;

import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiNextdotjs,
  SiPostgresql,
  SiTypescript,
  SiDjango,
  SiSpringboot,
  SiDocker,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" data-label="Javascript">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-label="Nodejs">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-label="React">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-label="MongoDB">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-label="Typescript">
        <SiTypescript />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-label="Nextjs">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-label="Python">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-label="Django">
        <SiDjango />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-label="Java">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-label="SpringBoot">
        <SiSpringboot />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-label="Postgresql">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-label="Golang">
        <TbBrandGolang />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-label="C++">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-label="Docker">
        <SiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-label="Git">
        <DiGit />
      </Col>
    </Row>
  );
}

export default Techstack;

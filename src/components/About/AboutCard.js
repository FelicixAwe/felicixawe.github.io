import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Esther Xiao </span>.
            <br /> I am a final year student pursuing an BS in Maths and
            Computing at UCLA.
            <br />
            I am currently looking forward a full-time software developer job.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watch movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I don't want to die without a few scars"{" "}
          </p>
          <footer className="blockquote-footer">Esther</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

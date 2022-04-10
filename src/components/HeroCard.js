import React from "react";
import "./HeroCard.css";
import { Button, Container } from "react-bootstrap";

export default function HeroCard() {
  return (
    <div className="hero-image" id="hero-image">
      <Container fluid className="p-5">
        <div className="hero-text">
          <h1>DRIVING FORWARD</h1>
          <p>From Professional Racing Driver to Full Stack Web Developer</p>
          <Button variant="danger">About Me</Button>
        </div>
      </Container>
    </div>
  );
}

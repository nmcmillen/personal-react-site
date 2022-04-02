import React from "react";
import "./HeroCard.css";
import { Button } from "react-bootstrap";

export default function HeroCard() {
  return (
      <div className="hero-image" id="hero-image">
        <div className="hero-text">
          <h1>DRIVING FORWARD</h1>
          <p>From Professional Racing Driver to Full Stack Web Developer</p>
          <Button variant="danger">About Me</Button>
        </div>
      </div>
  );
}

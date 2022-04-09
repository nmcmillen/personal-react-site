import React from "react";
import "./AboutMe.css";
import headshot from "./images/headshot.jpg";
import { Button, Col, Container, Row } from "react-bootstrap";

export default function AboutMe() {
  return (
    // WORK IN PROGRESS FOR REACT BOOTSTRAP
    <Container fluid className="about-me">
      <Row>
        <Col id="headshot-column">
          {/* HOW DO YOU FLOAT IMAGE TO RIGHT??? */}
          <img
            id="headshot"
            src={headshot}
            // className="img-fluid"
            alt="nick-mcmillen-headshot"
          />
        </Col>
        <Col>
          Nick McMillen was born in Salem, Oregon to a family of racers. The bug
          started early of course but he actually started racing motocross at
          the young age of 5. He raced at a serious level until about age 14
          when he was unable to continue racing due to the extensive cost and
          time his parents had to take off in order to make it to the national
          races and help progress his career. He knew he wanted to do something
          in the field of motorsports so if Nick couldn’t be the racer, he at
          least wanted to work with them. Nick set out on getting his Masters in
          Business Administration as well as a Sports Marketing degree in hopes
          he could work with the athletes and be involved in motorsports. While
          going to school Nick came across a competition called GT Academy where
          Nissan and Gran Turismo (racing game) partner up to find the best
          virtual racing drivers in the world and turn them into real
          professional racing drivers.
        </Col>
      </Row>
    </Container>
  );
}

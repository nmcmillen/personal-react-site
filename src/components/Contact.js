import React from "react";
import "./Contact.css";
import { Col, Container, Image, Row } from "react-bootstrap";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faGithub,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
import portrait from "./images/nick-portrait.jpg";
// FONT AWESOME ICONS CAN BE CONTROLLED BY FONT-SIZE IN CSS

export default function Contact() {
  return (
    <div>
      <Container className="">
        <Row className="justify-content-md-center">
          <Col className="column-1" sm={3}>
            <Image id="contact-headshot" src={portrait} />
            <p>Web Developer</p>
          </Col>
          <Col className="column-2" sm={6}>
            <div className="social-icons">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
              <FontAwesomeIcon icon={faYoutube} size="lg" />
              <FontAwesomeIcon icon={faGithub} size="lg" />
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </div>
            <strong>Awesome Inc. Bootcamp</strong>
            <br />
            348 E Main St.
            <br />
            Lexington, KY 40507
            <br />
            Phone: (123) 456-7890
            <br />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

// <FontAwesomeIcon icon={faCoffee} size="lg" />
// <FontAwesomeIcon icon={faYoutube} size="lg" />
// <FontAwesomeIcon icon={faGithub} size="3x" />

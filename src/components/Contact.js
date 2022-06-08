import React from "react";
import "./Contact.css";
import { Container} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import portrait from "./images/nick-portrait.jpg";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import ReactDOM from "react-dom";
// import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
// FONT AWESOME ICONS CAN BE CONTROLLED BY FONT-SIZE IN CSS

export default function Contact() {
  return (
    <Container
      fluid
      className="about-me bg-dark text-light"
      id="about-me-section"
    >
      <Container className="py-5">
        <div className="d-lg-flex align-items-center justify-content-center">
          <div className="px-lg-5">
            <h3>Nick McMillen</h3>
            <h5>Full Stack Web Developer</h5>
            <div className="social-icons">
              <a href="https://twitter.com/nickmcmillen80">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a href="https://github.com/nmcmillen">
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
              <a href="https://www.linkedin.com/in/nickmcmillen/">
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
              <a href="https://www.instagram.com/nick.mcmillen/">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
            </div>
          </div>
          <img className="" id="contact-headshot" src={portrait} alt="" />
        </div>
      </Container>
    </Container>
  );
}

// //     <Container fluid className="bg-dark" id="contact-section">
// <Container  className="text-light p-3">
// <Row className="justify-content-center">
//   {/* LEFT COLUMN */}
//   <Col className="column-1 justify-content-center" md={3}>
//     <h3>Nick McMillen</h3>
//     <h5>Full Stack Web Developer</h5>
//     <div className="social-icons">
//       <a href="https://twitter.com/nickmcmillen80">
//         <FontAwesomeIcon icon={faTwitter} size="lg" />
//       </a>
//       <a href="https://github.com/nmcmillen">
//         <FontAwesomeIcon icon={faGithub} size="lg" />
//       </a>
//       <a href="https://www.linkedin.com/in/nickmcmillen/">
//         <FontAwesomeIcon icon={faLinkedin} size="lg" />
//       </a>
//       <a href="https://www.instagram.com/nick.mcmillen/">
//         <FontAwesomeIcon icon={faInstagram} size="lg" />
//         </a>
//     </div>
//   </Col>
//   {/* RIGHT COLUMN */}
//   <Col className="column-2" md={3}>
//     <Image className="" id="contact-headshot" src={portrait} />
//   </Col>
// </Row>
// </Container>
// </Container>

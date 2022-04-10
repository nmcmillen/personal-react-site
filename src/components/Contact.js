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
    <footer className="page-footer font-small" id="footer">
      <div className="container-fluid ">
        <div className="row" id="row-edit">
          <div
            className="col-md-6 mt-3 pl-3 justify-content-center"
            id="location"
          >
            <h5 className="text-uppercase">Nick McMillen</h5>
            <p>Full Stack Web Developer</p>
            <p>Awesome Inc. Bootcamp</p>
            <h5 className="text-uppercase">Find Me</h5>
            <div className="social-icons">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
              <FontAwesomeIcon icon={faYoutube} size="lg" />
              <FontAwesomeIcon icon={faGithub} size="lg" />
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </div>
            <p>
              348 Main St.
              <br />
              Lexington, KY 40503 <br />
              123-456-7890 <br />
            </p>
          </div>

          <hr className="clearfix w-100 d-md-none pb-0 d-flex justify-content-center text-center" />

          <div className="col-md-6">
            <img
              src={portrait}
              className="img-fluid"
              alt=""
              style={{ maxWidth: "390px" }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

// <FontAwesomeIcon icon={faCoffee} size="lg" />
// <FontAwesomeIcon icon={faYoutube} size="lg" />
// <FontAwesomeIcon icon={faGithub} size="3x" />

//   <div>
//     <Container className="">
//       <Row className="justify-content-md-center">
//         {/* LEFT COLUMN */}
//         <Col className="column-1 align-items-center" sm={6}>
//           <div className="social-icons">
//             <FontAwesomeIcon icon={faTwitter} size="lg" />
//             <FontAwesomeIcon icon={faYoutube} size="lg" />
//             <FontAwesomeIcon icon={faGithub} size="lg" />
//             <FontAwesomeIcon icon={faLinkedin} size="lg" />
//           </div>
//           <strong>Awesome Inc. Bootcamp</strong>
//           <br />
//           348 E Main St.
//           <br />
//           Lexington, KY 40507
//           <br />
//           Phone: (123) 456-7890
//           <br />
//         </Col>
//         {/* RIGHT COLUMN */}
//         <Col className="column-2" sm={3}>
//           <Image id="contact-headshot" src={portrait} />
//           <p>Web Developer</p>
//         </Col>
//       </Row>
//     </Container>
//   </div>
// );

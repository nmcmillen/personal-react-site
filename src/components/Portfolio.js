import React from "react";
import "./Portfolio.css";
import { Card, Container, Row } from "react-bootstrap";
import pfolioData from "./PfolioData";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {library} from '@fortawesome/fontawesome-svg-core';
// import * as Icons from '@fortawesome/free-solid-svg-icons';

export default function Portfolio() {
  return (
    <Container fluid id="portfolio-section">
      <Container className="pb-5">
        <h2>Portfolio</h2>

        <Row xs={1} md={3} className="g-0">
          {pfolioData.map((card) => (
            <Card className="pfolio-zoom">
              <Card.Img variant="top" src={card.image} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <div className="pfolio-links">
                  <a href={card.live} target="_blank" rel="noreferrer">
                    View Live
                  </a>
                  <a href={card.gh} target="_blank" rel="noreferrer">
                    Github
                  </a>
                </div>
                <Card.Text>{card.description}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">{card.stack}</small>
              </Card.Footer>
            </Card>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

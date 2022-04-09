import React from "react";
import "./Portfolio.css";
import { Card, CardGroup, Col, Row } from "react-bootstrap";

export default function Portfolio() {
  return (
    <CardGroup>
      {/* FIRST PROJECT */}
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>TicTacToe</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Tech Stack: HTML, CSS, JavaScript</small>
        </Card.Footer>
      </Card>

      {/* SECOND PROJECT */}
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Weather App</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{" "}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Tech Stack: HTML, CSS, JavaScript, Bootstrap</small>
        </Card.Footer>
      </Card>

      {/* THIRD PROJECT */}
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>To-Do List</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Tech Stack: HTML, CSS, JavaScript/React</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

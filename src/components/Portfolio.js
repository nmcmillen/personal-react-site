import React from "react";
import "./Portfolio.css";
import { Card, CardGroup, Col, Row } from "react-bootstrap";
import tictactoe from "./images/tic-tac-toe.png"
import weather from "./images/weather-app.png"
import todo from "./images/todo.png"

export default function Portfolio() {
  return (
    <CardGroup>
      {/* FIRST PROJECT */}
      <Card>
        <Card.Img variant="top" src={tictactoe} />
        <Card.Body>
          <Card.Title>TicTacToe</Card.Title>
          <Card.Text>
          Placeholder Text
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Tech Stack: HTML, CSS, JavaScript</small>
        </Card.Footer>
      </Card>

      {/* SECOND PROJECT */}
      <Card>
        <Card.Img variant="top" src={weather} />
        <Card.Body>
          <Card.Title>Weather App</Card.Title>
          <Card.Text>
          Placeholder Text
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Tech Stack: HTML, CSS, JavaScript, Bootstrap</small>
        </Card.Footer>
      </Card>

      {/* THIRD PROJECT */}
      <Card>
        <Card.Img variant="top" src={todo} />
        <Card.Body>
          <Card.Title>To-Do List</Card.Title>
          <Card.Text>
            Placeholder Text
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Tech Stack: HTML, CSS, JavaScript/React</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

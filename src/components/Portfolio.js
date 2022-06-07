import React from "react";
import "./Portfolio.css";
import { Card, CardGroup, Container} from "react-bootstrap";
import tictactoe from "./images/tic-tac-toe.png";
import weather from "./images/weather-app.png";
import todo from "./images/todo.png";

export default function Portfolio() {
  return (
    <Container fluid id="portfolio-section">
      <Container className="pb-5">
        <h2>Portfolio</h2>
        <CardGroup>
          {/* FIRST PROJECT */}
          <Card className="pfolio-zoom">
            <Card.Img variant="top" src={tictactoe} />
            <Card.Body>
              <Card.Title>TicTacToe</Card.Title>
              <div className="pfolio-links">
                <a
                  href="https://nmcmillen.github.io/tictactoe/"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Live
                </a>
                <a
                  href="https://github.com/nmcmillen/tictactoe"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </div>
              <Card.Text>
                A simple game of Tic Tac Toe using JavaScript to handle clicks
                of X and 0. First to 3 in a row wins!
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                Tech Stack: HTML, CSS, JavaScript
              </small>
            </Card.Footer>
          </Card>

          {/* SECOND PROJECT */}
          <Card className="pfolio-zoom">
            <Card.Img variant="top" src={weather} />
            <Card.Body>
              <Card.Title>Weather App</Card.Title>
              <div className="pfolio-links">
                <a
                  href="https://nmcmillen.github.io/weather-app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Live
                </a>
                <a
                  href="https://github.com/nmcmillen/weather-app"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </div>
              <Card.Text>
                Using the OpenWeatherMap API, search for current weather in
                Kelvin, Fahrenheit, and Celsius of a given zip code within the
                United States.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                Tech Stack: HTML, CSS, JavaScript, Bootstrap
              </small>
            </Card.Footer>
          </Card>

          {/* THIRD PROJECT */}
          <Card className="pfolio-zoom">
            <Card.Img variant="top" src={todo} />
            <Card.Body>
              <Card.Title>To-Do List</Card.Title>
              <div className="pfolio-links">
                <a
                  href="https://nmcmillen.github.io/to-do-list/"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Live
                </a>
                <a
                  href="https://github.com/nmcmillen/to-do-list"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </div>
              <Card.Text>
                Jot down a To-do item that is saved within local storage so you
                can come back to it later. Items can be individually or grouped
                as complete, uncomplete, or filter between what has been done or
                needs to be done.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                Tech Stack: HTML, CSS, JavaScript/React
              </small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </Container>
    </Container>
  );
}

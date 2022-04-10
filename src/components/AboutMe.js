import React from "react";
import "./AboutMe.css";
import headshot from "./images/headshot.jpg";
import { Button, Col, Container, Image, Row } from "react-bootstrap";

export default function AboutMe() {
  return (
    // WORK IN PROGRESS FOR REACT BOOTSTRAP
    <Container fluid className="about-me bg-dark text-light px-md-5 py-5">
      <div className="d-lg-flex align-items-center justify-content-center">
        <img className="headshot img-fluid" src={headshot} alt="" />
        <div className="px-lg-5">
          <h1>
            About <span className="text-danger"> Me </span>
          </h1>
          <p className="lead my-4">
            "Video games will get you nowhere” is something I heard as a child,
            but that didn't stop me from competing in a video game competition
            that would lead me to traveling the world working in the motorsports
            industry as a professional racecar driver, coach, and brand
            ambassador. <br/>
            <br/>
            A self-starter and quick learner who enjoys a fast paced
            environment and pushing the boundaries of what is possible. Diverse
            background with experience in a little bit of everything from
            professional media training and communications to marketing and
            project management. <br/>
            <br/>
            After starting my own web-based company, I found
            a joy for building and developing which led me to becoming a
            Full-Stack Web Developer where I can create, learn, and progress
            every day.
          </p>
        </div>
      </div>
    </Container>
  );
}

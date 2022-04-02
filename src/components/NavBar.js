import React from "react";
import { Navbar, Container, Nav } from 'react-bootstrap'
// import logo from './images/nm-logo.png'


export default function NavBar() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" expand="md">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              //   src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Nick McMillen
          </Navbar.Brand>
          <Nav className="d-flex">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              {/* MENU LINKS */}
              <Nav.Link href="/">HOME</Nav.Link>
              <Nav.Link href="/">ABOUT</Nav.Link>
              <Nav.Link href="/">BLOG</Nav.Link>
              <Nav.Link href="/">PORTFOLIO</Nav.Link>
              <Nav.Link href="/">CONTACT</Nav.Link>
            </Navbar.Collapse>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <Navbar
      expand="lg"
      sticky="top"
      className="header-navbar all-background" 
    >
      <Container>
        <Navbar.Toggle aria-controls="navbar" className=" bg-light" />

        <Navbar.Collapse id="navbar">
          <Nav className="mx-auto">
            <Nav.Link href="#home" className="ps-4 fs-6 pe-4 text-light">
              Home
            </Nav.Link>
            <Nav.Link href="#about" className="ps-4 fs-6 pe-4 text-light">
              About
            </Nav.Link>
            <Nav.Link href="#history" className="ps-4 fs-6 pe-4 text-light">
              History
            </Nav.Link>
            <Nav.Link href="#books" className="ps-4 fs-6 pe-4 text-light">
              Books
            </Nav.Link>
            <Nav.Link href="#news" className="ps-4 fs-6 pe-4 text-light">
              News
            </Nav.Link>
            <Nav.Link href="#gallery" className="ps-4 fs-6 pe-4 text-light">
              Gallery
            </Nav.Link>
            <Nav.Link href="#contact" className="ps-4 fs-6 pe-4 text-light">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

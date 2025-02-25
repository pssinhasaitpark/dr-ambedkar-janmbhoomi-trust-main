import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <Navbar
      expand="lg"
      sticky="top"
      className="header-nav  all-background p-0" 
    >
      <Container>
        <Navbar.Toggle aria-controls="navbar" className=" bg-light fs-6 " />

        <Navbar.Collapse id="navbar">
          <Nav className="mx-auto ">
            <Nav.Link href="/" className=" header-nav pe-3 ms-3 text-light">
              Home
            </Nav.Link>
            <Nav.Link href="/about" className=" header-nav pe-3 ms-3 text-light">
              About
            </Nav.Link>
            <Nav.Link href="/history" className="header-nav pe-2 ms-3  text-light">
              History
            </Nav.Link>
            <Nav.Link href="/book" className="header-nav pe-2 ms-3  text-light">
              Books
            </Nav.Link>
            <Nav.Link href="/news" className=" header-nav pe-2 ms-3  text-light">
              News
            </Nav.Link>
            <Nav.Link href="/gallery" className="header-nav pe-2 ms-3  text-light">
              Gallery
            </Nav.Link>
            <Nav.Link href="/contact" className="header-nav pe-2 ms-3  text-light">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

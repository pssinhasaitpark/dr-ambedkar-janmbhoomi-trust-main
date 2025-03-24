import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { yt, fb, app, phone, insta } from "../../../../assests/index.js";
import "./Header.css";

const Header = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <Navbar
      expand="lg"
      sticky="top"
      
      className="header-nav all-background p-0"
    >
      <Container className="p-0 ">
        <Navbar.Toggle aria-controls="navbar" className=" border-0  fs-6 rounded-0" style={{filter:"invert(1)"}}/>

        <Navbar.Collapse id="navbar">
          <Nav className="mx-auto">
            <Link to="/" className="header-nav pe-3 ms-3 text-light text-decoration-none" onClick={scrollToTop}>
              Home
            </Link>
            <Link to="/about" className="header-nav pe-3 ms-3 text-light text-decoration-none" onClick={scrollToTop}>
              About
            </Link>
            <Link to="/history" className="header-nav pe-2 ms-3 text-light text-decoration-none" onClick={scrollToTop}>
              History
            </Link>
            <Link to="/book" className="header-nav pe-2 ms-3 text-light text-decoration-none" onClick={scrollToTop}>
              Books
            </Link>
            <Link to="/news" className="header-nav pe-2 ms-3 text-light text-decoration-none" onClick={scrollToTop}>
              News
            </Link>
            <Link to="/gallery" className="header-nav pe-2 ms-3 text-light text-decoration-none" onClick={scrollToTop}>
              Gallery
            </Link>
            <Link to="/contact" className="header-nav pe-2 ms-3 text-light text-decoration-none" onClick={scrollToTop}>
              Contact
            </Link>

            <div className="d-lg-none d-block mt-3 ms-2 ">
              <div>
                <div className="d-flex align-items-center">
                  <Link to="tel:+911234567891">
                    <img src={phone} alt="Phone Icon" className="me-2 header-icons bg-light" />
                  </Link>
                  <p className="mb-0 fs-5">
                    <Link to="tel:+911234567891" className="text-decoration-none text-light">
                      91+1234567891
                    </Link>
                  </p>
                </div>
              </div>
              <div className="mt-3 mb-4">
                <Link to="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">
                  <img src={app} alt="WhatsApp" className="header-icons" />
                </Link>
                <Link to="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                  <img src={fb} alt="Facebook" className="header-icons" />
                </Link>
                <Link to="https://www.instagram.com/?hl=en" target="_blank" rel="noopener noreferrer">
                  <img src={insta} alt="Instagram" className="header-icons" />
                </Link>
                <Link to="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                  <img src={yt} alt="YouTube" className="header-icons" />
                </Link>
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
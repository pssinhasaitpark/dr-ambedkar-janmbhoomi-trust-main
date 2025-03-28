import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import {phone } from "../../../../assests/index.js";
import "./Header.css";
import { FaWhatsapp } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FiInstagram } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";
import { useSocials } from "../../../hooks/index.js";
const Header = () => {
  const { data: socialLinks, isLoading: socialLoading } = useSocials();
  const openExternalLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
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
        <Navbar.Toggle aria-controls="navbar" className=" border-0  fs-6 rounded-0" style={{ filter: "invert(1)" }} />

        <Navbar.Collapse id="navbar" className="  ">
          <Nav className="mx-auto">
            <Link to="/" className="header-nav pe-3 ms-3 text-light text-decoration-none" onClick={scrollToTop}>
              Home
            </Link>
            <Link to="/about" className="header-nav pe-3 ms-3 text-light text-decoration-none" onClick={scrollToTop}>
              About
            </Link>
            <Link to="/history" className="header-nav pe-2 ms-3  text-light text-decoration-none" onClick={scrollToTop}>
              History
            </Link>
            <Link to="/book" className="header-nav pe-2 ms-3  text-light text-decoration-none" onClick={scrollToTop}>
              Books
            </Link>
            <Link to="/news" className="header-nav pe-2 ms-3  text-light text-decoration-none" onClick={scrollToTop}>
              News
            </Link>
            <Link to="/gallery" className="header-nav pe-2 ms-3  text-light text-decoration-none" onClick={scrollToTop}>
              Gallery
            </Link>
            <Link to="/contact" className="header-nav pe-2 ms-3  text-light text-decoration-none" onClick={scrollToTop}>
              Contact
            </Link>

            <div className="d-lg-none d-block mt-3 ">
              <div>
                <div className="d-flex ms-4 ">
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
              <div className="mt-3 d-flex mb-4 ms-4  ">
                {!socialLoading && socialLinks && (
                  <>
                    <Link to="#" onClick={() => openExternalLink(socialLinks.whatsapp.link)}>
                    <div className="icon-container px-1 py-1 me-2 rounded-2 bg-light ">
                        <FaWhatsapp className="fs-2 " />
                      </div>
                    </Link>
                    <Link to="#" onClick={() => openExternalLink(socialLinks.facebook.link)}>
                    <div className="icon-container px-1 py-1 me-2  rounded-2 bg-light ">
                        <RiFacebookCircleLine className="fs-2 " />{" "}
                      </div>
                    </Link>
                    <Link to="#" onClick={() => openExternalLink(socialLinks.instagram.link)}>
                    <div className="icon-container px-1 py-1 me-2  rounded-2 bg-light ">
                        <FiInstagram className="fs-2 " />
                      </div>
                    </Link>
                    <Link to="#" onClick={() => openExternalLink(socialLinks.youtube.link)}>
                    <div className="icon-container px-1 py-1 me-2  rounded-2 bg-light ">
                        <FiYoutube className="fs-2" />
                      </div>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
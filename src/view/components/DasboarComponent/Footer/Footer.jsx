import React from 'react';
import './Footer.css';
import FooterBottom from "./FooterBottom.jsx";
import { yt, fb, app, insta } from "../../../../assests/index.js";
const Footer = () => {
  const quickLinks1 = ["Home", "About", "History", "Books"];
  const quickLinks2 = ["News", "Gallery", "Contact"];

  return (
    <>
      <div className="footer bg-dark text-light py-4">
        <div className="container">
          <div className="row">

            <div className="col-md-4">
              <span className="badge bg-primary mb-3">Dr Bhimrao Ambedkar</span>
              <h5 className="mb-4 fs-5">Bhim Janmabhoomi, Dr. Bhimrao Ambedkar Memorial Mhow</h5>
              <div>
                <h6 className='fs-5'>Locate us</h6>
                <p className="text-light opacity-75 fs-5">
                  Dr. Ambedkar Nagar (Mhow), Indore district, Madhya Pradesh, India
                </p>
              </div>
            </div>
            <div className="col-md-4">
             
              <div className="quick-links-container">
              <h5 className="mb-4 ms-5 mt-5">Quick Links</h5>
                <div className="d-flex justify-content-center me-5">
                  
                  <div className="me-5 pe-5">
                    {quickLinks1.map((link, index) => (
                      <div key={index} className="mb-3">
                        <a href="/" className="text-light text-decoration-none opacity-75">
                          {link}
                        </a>
                      </div>
                    ))}
                  </div>
                  <div>
                    {quickLinks2.map((link, index) => (
                      <div key={index} className="mb-3">
                        <a href="/" className="text-light text-decoration-none opacity-75">
                          {link}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-5">
              <h5 className="mb-4">Sign up for our newsletter</h5>
              <div className="d-flex newsletter-container">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email"
                  style={{ borderRadius: "4px 0 0 4px" }}
                />
                <button
                  className="btn btn-primary px-4"
                  style={{ borderRadius: "0 4px 4px 0" }}
                >
                  Subscribe
                </button>
              </div>
              <div className="mt-4 d-flex social-icons-container">
                <img src={app} alt="WhatsApp" className='me-2' />
                <img src={fb} alt="Facebook" className='me-2' />
                <img src={insta} alt="Instagram" className='me-2' />
                <img src={yt} alt="YouTube" className='me-2' />

              </div>
            </div>
          </div>
        </div>

      </div>
      <FooterBottom />
    </>
  );
};

export default Footer;
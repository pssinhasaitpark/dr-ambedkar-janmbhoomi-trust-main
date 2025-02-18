import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import FooterBottom from "./FooterBottom.jsx";
import { yt, fb, app, insta } from "../../../../assests/index.js";
const Footer = () => {
  const quickLinks1 = ["Home", "About", "History", "Books"];
  const quickLinks2 = ["News", "Gallery", "Contact"];

  return (
    <>
      <div className="footer bg-dark text-light py-5">
        <div className="">
          <div className="row  m-0 mb-5 ">

            <div className="col-md-4 footer-section w-25 ms-5 mt-2">
              <span className="ms-4 badge-ambedkar  badge bg-primary mb-3">Dr Bhimrao Ambedkar</span>
              <h5 className="mb-4 ms-4 fs-4 lh-base">Bhim Janmabhoomi, Dr. Bhimrao Ambedkar Memorial Mhow</h5>
              <div>
                <h6 className='ms-4 fs-4 '>Locate us</h6>
                <p className="text-light opacity-75 ms-4 fs-5 lh-lg">
                  Dr. Ambedkar Nagar (Mhow), Indore district, Madhya Pradesh, India
                </p>
              </div>
            </div>
            <div className="col-md-4 ms-5 footer-section">
             
              <div className="quick-links-container">
              <h5 className="mb-4 ms-5 mt-5">Quick Links</h5>
                <div className=" d-flex justify-content-around ">
                  
                  <div className="">
                    {quickLinks1.map((link, index) => (
                      <div key={index} className="mb-3">
                        <Link href="/" className="text-light text-decoration-none fs-5 me-4 ">
                          {link}
                        </Link>
                      </div>
                    ))}
                  </div>
                  <div>
                    {quickLinks2.map((link, index) => (
                      <div key={index} className="mb-3">
                        <Link href="/" className="text-light text-decoration-none fs-5 me-5">
                          {link}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-5 w-25 footer-section">
              <h5 className="mb-4 fs-5 fw-medium ">Sign up for our newsletter</h5>
              <div className="d-flex newsletter-container d-flex align-items-center">
                <input
                  type="email"
                  className="form-control newsletter-email border rounded-start"
                  placeholder="Enter Email" 
                />
                <button
                  className="btn btn-primary px-5 rounded-end text-light fs-5 fw-bolder "
                >
                  Subscribe
                </button>
              </div>
              <div className="mt-4 d-flex social-icons-container">
                <img src={app} alt="WhatsApp" className='me-2 footer-icons' />
                <img src={fb} alt="Facebook" className='me-2 footer-icons' />
                <img src={insta} alt="Instagram" className='me-2 footer-icons' />
                <img src={yt} alt="YouTube" className='me-2 footer-icons' />

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
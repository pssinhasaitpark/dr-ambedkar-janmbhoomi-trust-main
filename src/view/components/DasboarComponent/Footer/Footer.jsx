import React from "react";
import './Footer.css';
import FooterBottom from "./FooterBottom.jsx";
import footerData from "../../../utils/footerData.json";

import { yt, fb, app, insta } from "../../../../assests/index.js";
const Footer = () => {
  return (
    <>
      <div className="Footer  border-top">
        <div className="Footer-main container mt-3">
          <div className="footer-uls row">
            {footerData.sections.map((section, index) => (
              <div key={index} className={`footer-li col-sm-${section.col}`}>
                <h5 className="mb-4 badge bg-primary text-light">{section.subhead}</h5>
                <h5 className="mb-4">{section.title}</h5>
                {section.type === "text" ? (
                  <>
                    <p>{section.content}</p>
                    {section.paragraph &&
                      section.paragraph.map((paragraph, i) => (
                        <p key={i} className="text-muted">
                          <b>{paragraph.label}</b> : {paragraph.value}
                        </p>
                      ))}
                  </>
                ) : (
                
                  <ul className="list-unstyled">
                    {section.links.map((link, i) => (
                      <li key={i}>
                        <a href={link.url} className="text-decoration-none text-black fw-normal text-muted">
                          {link.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <div className="footer-li col-sm-4 h-100">
              <div className="footer-weekly-newsletter text-center p-4">
                <h5>Sign up for our newsletter</h5>

                <div className="email-btn input-group rounded border w-100">
                  <input
                    type="email"
                    className="form-control rounded border-0"
                    placeholder="Enter Email"
                    aria-label="enter email"
                    aria-describedby="email-addon"
                  />
                  <span className="input-group-text all-background text-light px-3" id="email-addon ">
                    Suscribe
                  </span>
                </div>
                <div className="mt-3 d-flex justify-content-center justify-content-start ">
                  <img src={app} alt="WhatsApp" className=" header-icons me-2" />
                  <img src={fb} alt="Facebook" className=" header-icons me-2" />
                  <img src={insta} alt="Instagram" className=" header-icons me-2" />
                  <img src={yt} alt="YouTube" className=" header-icons me-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterBottom />
      </div>
    </>
  );
};

export default Footer;
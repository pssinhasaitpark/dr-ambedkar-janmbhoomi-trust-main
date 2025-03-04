import React from "react";
import { logo, yt, fb, app, phone, insta } from "../../../../assests/index.js";
import './HeaderTop.css'
import { Link } from "react-router-dom";
import { useSocials } from "../../../hooks/index.js";
const HeaderTop = () => {
    const { data: socialLinks, isLoading: socialLoading } = useSocials();
  const openExternalLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
    <div className="container-fluid position-relative">
      <div className="d-flex justify-content-center">
        <Link to="/">
          <img src={logo} alt="Company Logo" className="img-fluid logo-image" />
        </Link>
      </div>

      <div className="position-absolute top-50 end-0 translate-middle-y me-5 pe-4 d-none d-lg-block">
        <div className="d-flex align-items-center">
          <Link to="tel:+911234567891">
            <img src={phone} alt="Phone Icon" className="me-2 header-icons" />
          </Link>
          <p className="mb-0 fs-5">
            <Link to="tel:+911234567891" className="text-decoration-none text-dark">
              91+1234567891
            </Link>
          </p>
        </div>
        <div className="mt-3">
        {!socialLoading && socialLinks && (
          <>
          <Link to="#" onClick={() => openExternalLink(socialLinks.whatsapp.link)}>
            <img src={app} alt="WhatsApp" className="header-icons" />
          </Link>
         <Link to="#" onClick={() => openExternalLink(socialLinks.facebook.link)}>
            <img src={fb} alt="Facebook" className="header-icons" />
          </Link>
              <Link to="#" onClick={() => openExternalLink(socialLinks.instagram.link)}>
            <img src={insta} alt="Instagram" className="header-icons" />
          </Link>
          <Link to="#" onClick={() => openExternalLink(socialLinks.youtube.link)}>
            <img src={yt} alt="YouTube" className="header-icons" />
          </Link>
          </>
            )}
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
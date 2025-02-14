import React from "react";
import { logo, Search, yt, fb, app, phone, insta } from "../../../../assests/index.js";
const HeaderTop = () => {
  return (
    <div className="container py-3">
      <div className="row align-items-center">
        <div className="col-12 col-md-4 mb-3 mb-md-0 d-flex justify-content-md-start justify-content-center">
          <div className="input-group w-100" >
            <input
              type="search"
              className="form-control border-end-0"
              placeholder="What Are You looking for?"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <span className="input-group-text border-start-0 bg-transparent">
              <img src={Search} alt="Search Icon" className="" />
            </span>
          </div>
        </div>
        <div className="col-12 col-md-4 text-center">
          <img src={logo} alt="Company Logo" className="img-fluid logo-image" />
        </div>
        <div className="col-12 col-md-4 text-md-end text-center">
          <div className="d-flex justify-content-md-end justify-content-center align-items-center">
            <img src={phone} alt="Phone Icon" className="me-2 header-icons"  />
            <p className="mb-0 fs-5">91+1234567891</p>
          </div>
          <div className="mt-3 d-flex justify-content-center justify-content-md-end">
            <img src={app} alt="WhatsApp" className="me-2 header-icons"  />
            <img src={fb} alt="Facebook" className="me-2 header-icons"  />
            <img src={insta} alt="Instagram" className="me-2 header-icons"  />
            <img src={yt} alt="YouTube" className="me-2 header-icons"  />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default HeaderTop;

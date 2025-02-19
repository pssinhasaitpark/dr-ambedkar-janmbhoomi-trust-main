import React from "react";
import { logo, Search, yt, fb, app, phone, insta } from "../../../../assests/index.js";
import './HeaderTop.css'
const HeaderTop = () => {
  return (
    <div className="container-fluid
     ">
      <div className="row align-items-center">
        <div className="col-12 col-md-4 mb-md-0 d-flex ">
          <div className="input-group search-bar bg-light border rounded-1" >
            <input
              type="search"
              className="form-control border-end-0 outline-0 border-0  bg-light"
              placeholder="What Are You looking for?"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <span className="input-group-text outline-0 border-0   bg-transparent">
              <img src={Search} alt="Search Icon" />
            </span>
          </div>
        </div>
        <div className="col-12 col-md-4 text-center mt-1">
          <img src={logo} alt="Company Logo" className="img-fluid logo-image" />
        </div>
        <div className="col-12 col-md-4 phone-icons">
          <div className="d-flex ">
            <img src={phone} alt="Phone Icon" className="me-2 header-icons"  />
            <p className="mb-0 fs-5">91+1234567891</p>
          </div>
          <div className="mt-3 d-flex ">
            <img src={app} alt="WhatsApp" className="header-icons "  />
            <img src={fb} alt="Facebook" className=" header-icons"  />
            <img src={insta} alt="Instagram" className=" header-icons"  />
            <img src={yt} alt="YouTube " className="header-icons"/>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default HeaderTop;

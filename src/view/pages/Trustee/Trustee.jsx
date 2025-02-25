import React from "react";
import { award1, trustee1 } from "../../../assests/index";
const Trustee = () => {
  return (
    <div className="all-section-width ">
      <div className="img-banner ">
        <img src={award1} alt="visitor-image" className="mb-2 all-image" />
      </div>
      <div className="mt-5 mb-4">
        <h2 className="text-uppercase fs-1  "> Trustee of Janmabhoom</h2>
        <p className="mb-3 fs-5">Dr. Bhimrao Ambedkar</p>
        <p className=" fw-normal  mt-2 paragraph-birth ">
          <span className="fs-3">
            History of Dr. B.R. Ambedkar’s Janmabhoomi (Birthplace){" "}
          </span>{" "}
          Early Life and Education (1891-1923) Dr. Bhimrao Ramji Ambedkar was
          born on April 14, 1891, in Mhow, Madhya Pradesh, into a Dalit family
          facing social discrimination. Despite these hardships, he excelled in
          academics.
        </p>
      </div>
      <div className="border border-dark p-5">
        <div className="row">
          <div className="col-sm-6">
            <div className="row border gx-1 ">
              <div className="col-sm-4 p-0">
                <img
                  loading="lazy"
                  src={trustee1}
                  alt=""
                  className="h-100 w-100 object-fit-cover"
                />
              </div>
              <div className="col-sm-8 px-4 py-3 mt-3">
                <p className="fs-4 heading-font fw-bold">
                Name : Sohan Lal Gindha 
                </p>
                <p className="heading-font fs-4">
                Designations : commitment to preserving and promoting 
                </p>
                
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="row border gx-1 ">
              <div className="col-sm-4 p-0">
                <img
                  loading="lazy"
                  src={trustee1}
                  alt=""
                  className="h-100 w-100 object-fit-cover"
                />
              </div>
              <div className="col-sm-8 px-4 py-3 mt-3">
                <p className="fs-4 heading-font fw-bold">
                Name : Sohan Lal Gindha 
                </p>
                <p className="heading-font fs-4">
                Designations : commitment to preserving and promoting 
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trustee;

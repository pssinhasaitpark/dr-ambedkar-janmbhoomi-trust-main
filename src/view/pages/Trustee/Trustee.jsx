import React from "react";
import { award1, trustee1 } from "../../../assests/index";
import { useTrustees } from "../../hooks"; 
import './Trustee.css'
const Trustee = () => {
  const { data, isLoading, error } = useTrustees();

  if (isLoading) {
    return <div className="spinner"></div>;
  }

  if (error) {
    return <div>Error: {error.message || "An error occurred"}</div>;  
  }

  return (
    <div className="all-section-width ">
      <div className="img-banner ">
        <img src={award1} alt="visitor-image" className="mb-2 all-image" />
      </div>
      <div className="mt-5 mb-4">
        <h2 className="text-uppercase fs-1 m-0 p-0 "> Trustee of Janmabhoom</h2>
        <p className="mb-3 fs-5">Dr. Bhimrao Ambedkar</p>
        <p className="fw-normal mt-2 paragraph-birth ">
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
          {data && data.length > 0 ? (
            data.map((trustee, index) => (
              <div key={index} className="col-sm-6 pe-4 mb-3">
                <div className="row border gx-1 ">
                  <div className="col-sm-4 p-0">
                    <img
                      loading="lazy"
                      src={trustee.image || trustee1}  
                      alt={trustee.full_name}
                      style={{ width: "100%", height: "12rem" }}
                      className="img-trustee w-100"
                    />
                  </div>
                  <div className="col-sm-8 px-4 py-3 mt-3 ">
                    <p className="fs-4 heading-font fw-bold ms-2">
                      Name: {trustee.full_name}
                    </p>
                    <p className="heading-font fs-4 ms-2">
                      Designation: {trustee.designations}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>No trustees found</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Trustee;
import React from "react";
import {
  award1,
  achievementimg,
  achievementimg1,
  achievementimg2,
} from "../../../assests";
import "../../components/DasboarComponent/Biography/Biography.css";
const AwardPage = () => {
  return (
    <div className="all-section-width">
      <div className="img-banner ">
        <img src={award1} alt="about-image" className="mb-2 all-image" />
      </div>
      <div className=" mt-4 mb-4">
        <h2 className="text-uppercase fs-1 biography-header m-0 p-0 ">Awards</h2>
        <p className="mb-3 fs-5">Dr. Bhimrao Ambedkar</p>
        <p className=" fw-medium  mt-2 paragraph-birth ">
          <span className="fs-3">Awards : </span> Dr. B.R. Ambedkar received
          several prestigious awards and honors for his contributions to law,
          social justice, and nation-building.
        </p>
      </div>
      <div className="border border-2 mt-4">
        <div className="mt-4 mb-4 ms-lg-4 ms-0">
          <p className="fs-3 p-0 m-0 fw-medium ms-lg-1 ms-3 ">Major Awards and Honors</p>
          <ol type="a" className="ms-lg-4 ms-0">
            <li className="fs-5 lh-lg">
              Bharat Ratna (1990) – India's highest civilian award, conferred
              posthumously for his immense role in drafting the Indian
              Constitution and championing social justice.
            </li>
            <li className="fs-5 lh-lg">
              Columbia University's Special Recognition (1952) – Honored as one
              of its most distinguished alumni for his contributions to law and
              governance.
            </li>
            <li className="fs-5 lh-lg">
              Buddha’s Dhamma Chakra Pravartana Award (1956) – Given for his
              efforts in promoting Buddhism and social reforms.
            </li>

            <li className="fs-5 lh-lg">
              Honorary Degrees – Several universities, including Osmania
              University and Columbia University, recognized his work with
              honorary doctorates.
            </li>
          </ol>
          <p className="ms-4 fs-5 mt-5 mb-5 px-lg-0 px-3">
            {" "}
            Dr. Ambedkar's work continues to inspire movements for equality and
            human rights worldwide.
          </p>
        </div>
      </div>
      <div className="img-banner  mt-5">
        <div className="row m-0">
          <div className="col-sm-4 p-0 m-0">
            <img
              src={achievementimg2}
              alt="achievement-image"
             className="w-100"
            />
          </div>
          <div className="col-sm-4 p-0 m-0">
            <img
              src={achievementimg1}
              alt="achievement-image"
             className="w-100"
            />
          </div>
          <div className="col-sm-4 p-0 m-0">
            <img
              src={achievementimg}
              alt="achievement-image"
              className="w-100"
          
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardPage;
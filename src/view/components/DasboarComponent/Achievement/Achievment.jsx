import React from "react";
import { Link } from "react-router-dom";
import '../Gallery/PhotoGallery.css'
import {
  achieve,
  achieve1,
  achieve2,
  achieve3,
  achieve4,
} from "../../../../assests/index";

const Achievment = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      <div className="container-fluid mt-5 mb-4 ">
        <div className="">
          <h2 className="text-center text-uppercase biography-header display-6 fw-medium p-0 m-0">Achievements Awards</h2>
          <p className=" text-center">Dr. Bhimrao Ambedkar</p>
        </div>
        <div className="start-gallery">
        <Link to="/award" onClick={scrollToTop}>
          <div className="gallery-row d-flex flex-wrap justify-content-center">
            <div className="gallery-item mb-3 ">
              <img
                src={ achieve}
                alt="gallery-image"
                className="img-achieve w-100 h-auto"
              />
            </div>
            <div className="gallery-item mb-3 ">
              <img
                src={ achieve1}
                alt="gallery-image"
                className="img-achieve w-100 h-auto"
              />
            </div>
            <div className="gallery-item mb-3">
              <img
                src={ achieve2}
                alt="gallery-image"
                className="img-achieve w-100 h-auto"
              />
            </div>
            <div className="gallery-item mb-3 ">
              <img
                src={ achieve3}
                alt="gallery-image"
                className="img-achieve w-100 h-auto"
              />
            </div>
            <div className="gallery-item mb-3 ">
              <img
                src={ achieve4}
                alt="gallery-image"
                className="img-achieve w-100 h-auto"
              />
            </div>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Achievment;
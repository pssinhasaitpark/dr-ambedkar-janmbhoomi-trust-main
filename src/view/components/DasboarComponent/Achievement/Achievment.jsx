import React from "react";
import '../Gallery/PhotoGallery.css'
import {
  achieve,
  achieve1,
  achieve2,
  achieve3,
  achieve4,
} from "../../../../assests/index";

const Achievment = () => {
  return (
    <div>
      <div className="container-fluid mt-5 mb-4 ">
        <div className="">
          <h1 className="text-center fw-bold text-uppercase biography-header">Achievements Awards</h1>
          <p className="mb-4 text-center font-monospace ">Dr. Bhimrao Ambedkar</p>
        </div>
        <div className="start-gallery">
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
        </div>
      </div>
    </div>
  );
};

export default Achievment;

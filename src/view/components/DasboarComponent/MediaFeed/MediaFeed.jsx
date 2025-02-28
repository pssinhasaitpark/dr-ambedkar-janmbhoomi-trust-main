import React from 'react'
import {
  social,
  social1,
  social2,social3,social4
} from "../../../../assests/index";
const MediaFeed = () => {
  return (
   <div>
        <div className="container-fluid mt-5 mb-4 ">
          <div className="">
            <h2 className="text-center text-uppercase biography-header display-6 fw-medium p-0 m-0">Social media feeds</h2>
            <p className=" text-center">Dr. Bhimrao Ambedkar</p>
          </div>
          <div className="start-gallery">
            <div className="gallery-row d-flex flex-wrap justify-content-center">
              <div className="gallery-item mb-3 ">
                <img
                  src={ social}
                  alt="gallery-image"
                  className="img-achieve w-100 h-auto"
                />
              </div>
              <div className="gallery-item mb-3 ">
                <img
                  src={ social1}
                  alt="gallery-image"
                  className="img-achieve w-100 h-auto"
                />
              </div>
              <div className="gallery-item mb-3">
                <img
                  src={ social2}
                  alt="gallery-image"
                  className="img-achieve w-100 h-auto"
                />
              </div>
              <div className="gallery-item mb-3 ">
                <img
                  src={ social3}
                  alt="gallery-image"
                  className="img-achieve w-100 h-auto"
                />
              </div>
              <div className="gallery-item mb-3 ">
                <img
                  src={ social4}
                  alt="gallery-image"
                  className="img-achieve w-100 h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default MediaFeed
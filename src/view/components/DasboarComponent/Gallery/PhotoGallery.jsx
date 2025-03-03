import React from 'react';
import './PhotoGallery.css'
import { photo, photo1, photo2, photo3, photo4 } from "../../../../assests/index";
import { Link } from 'react-router-dom';
const PhotoGallery = () => {
    return (
        <div>
            <div className='container-fluid mt-4 mb-4'>
                <div className=''>
                    <h2 className='text-center fw-bold text-uppercase biography-header p-0 m-0'>Photo Gallery</h2>
                    <p className="text-center">Dr. Bhimrao Ambedkar</p>
                </div>
                <div className='start-gallery'>
                    <Link to="/gallery">
                        <div className="gallery-row d-flex flex-wrap justify-content-center">

                            <div className="gallery-item mb-3 ">
                                <img src={photo} alt="gallery-image" className="img-achieve w-100 h-auto" />
                            </div>
                            <div className="gallery-item mb-3 ">
                                <img src={photo1} alt="gallery-image" className="img-achieve w-100 h-auto" />
                            </div>
                            <div className="gallery-item mb-3 ">
                                <img src={photo2} alt="gallery-image" className="img-achieve w-100 h-auto" />
                            </div>
                            <div className="gallery-item mb-3 ">
                                <img src={photo3} alt="gallery-image" className="img-achieve w-100 h-auto" />
                            </div>
                            <div className="gallery-item mb-3 ">
                                <img src={photo4} alt="gallery-image" className="img-achieve w-100 h-auto" />
                            </div>

                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default PhotoGallery;
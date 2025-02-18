import React from 'react';
import './PhotoGallery.css'
import { photo, photo1, photo2, photo3, photo4 } from "../../../../assests/index";

const PhotoGallery = () => {
    return (
        <div>
            <div className='container-fluid mt-4 mb-4 '>
                <div className=''>
                    <h1 className='text-center font-monospace'>Photo Gallery</h1>
                    <p className='text-center font-monospace'>Dr. Bhimrao Ambedkar</p>
                </div>
                <div className='row justify-content-evenly'>
                    <div className="col-sm-2  mb-3 p-1">
                        <img src={photo} alt="gallery-image" className="img-achieve" />
                    </div>
                    <div className="col-sm-2  mb-3 p-1">
                        <img src={photo1} alt="gallery-image" className="img-achieve" />
                    </div>
                    <div className="col-sm-2  mb-3 p-1">
                        <img src={photo2} alt="gallery-image" className="img-achieve" />
                    </div>
                    <div className="col-sm-2  mb-3 p-1">
                        <img src={photo3} alt="gallery-image" className="img-achieve" />
                    </div>
                    <div className="col-sm-2  mb-3 p-1">
                        <img src={photo4} alt="gallery-image" className="img-achieve" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PhotoGallery;

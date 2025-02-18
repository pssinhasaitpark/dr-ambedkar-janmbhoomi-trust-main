import React from 'react';
import './Achievement.css'
import { achieve,achieve1,achieve2,achieve3,achieve4 } from "../../../../assests/index";

const Achievment = () => {
    return (
        <div>
            <div className='container-fluid mt-4 mb-4 '>
                <div className=''>
                    <h1 className='text-center font-monospace'>Achievements Awards</h1>
                    <p className='text-center font-monospace'>Dr. Bhimrao Ambedkar</p>
                </div>
                <div className='row justify-content-evenly'>
                    <div className="col-sm-2  mb-3 p-1">
                        <img src={achieve} alt="gallery-image" className="img-achieve" />
                    </div>
                    <div className="col-sm-2 mb-3 p-1">
                        <img src={achieve1} alt="gallery-image" className="img-achieve" />
                    </div>
                    <div className="col-sm-2 mb-3 p-1">
                        <img src={achieve2} alt="gallery-image" className="img-achieve" />
                    </div>
                    <div className="col-sm-2 mb-3 p-1">
                        <img src={achieve3} alt="gallery-image" className="img-achieve" />
                    </div>
                    <div className="col-sm-2 mb-3 p-1">
                        <img src={achieve4} alt="gallery-image" className="img-achieve" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Achievment;

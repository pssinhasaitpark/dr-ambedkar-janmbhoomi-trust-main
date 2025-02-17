import React from "react";
import { Link } from "react-router-dom";
import { GoChevronRight } from "react-icons/go";
import './AccordianSection.css'
const AccordianSection = () => {
    return (
        <>
            <div className="container">
                <div className="col-sm-12">
                    <div className="row ">
                        <div className="col-sm-4 border border-dark rounded m-2 Accordian-width mb-4">
                            <ul className="fs-5 list-unstyled mt-3 mb-3  ">
                                <li className="border-bottom r justify-content-between d-flex fw-medium mb-4 p-3 hover-li ">
                                    About Dr. Ambedkar
                                    <Link to="/about">
                                        <GoChevronRight size={30} className="text-dark" />
                                    </Link>
                                </li>
                                <li className="border-bottom justify-content-between d-flex fw-medium mb-4 p-3 hover-li ">
                                    The Birthplace
                                    <Link to="/birth">
                                        <GoChevronRight size={30} className="text-dark" />
                                    </Link>
                                </li>
                                <li className="border-bottom justify-content-between d-flex fw-medium mb-4 p-3 hover-li ">
                                    Museum / Exhibits
                                    <Link to="/museum">
                                        <GoChevronRight size={30} className="text-dark" />
                                    </Link>
                                </li>
                                <li className="border-bottom justify-content-between d-flex fw-medium mb-4 p-3 hover-li ">
                                    Events and Celebrations
                                    <Link to="/events">
                                        <GoChevronRight size={30} className="text-dark" />
                                    </Link>
                                </li>
                                <li className=" justify-content-between d-flex fw-medium mb-4 p-3 hover-li ">
                                    Gallery
                                    <Link to="/gallery">
                                        <GoChevronRight size={30} className="text-dark" />
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-sm-4 border border-dark rounded m-2 Accordian-width mb-4">
                            <ul className="fs-5 list-unstyled mt-3 mb-3 ">
                                <li className="border-bottom r justify-content-between d-flex fw-medium mb-4 p-3 ">
                                Awards
                                    <Link to="/about">
                                        <GoChevronRight size={30} className="text-dark" />
                                    </Link>
                                </li>
                                <li className="border-bottom justify-content-between d-flex fw-medium mb-4 p-3 hover-li ">
                                Books and Publications
                                    <Link to="/birthplace">
                                        <GoChevronRight size={30} className="text-dark" />
                                    </Link>
                                </li>
                                <li className="border-bottom justify-content-between d-flex fw-medium mb-4 p-3 hover-li ">
                                Dr. Ambedkar's Legacy
                                    <Link to="/museum">
                                        <GoChevronRight size={30} className="text-dark" />
                                    </Link>
                                </li>
                                <li className="border-bottom justify-content-between d-flex fw-medium mb-4 p-3 hover-li ">
                                Education and Research
                                    <Link to="/events">
                                        <GoChevronRight size={30} className="text-dark" />
                                    </Link>
                                </li>
                                <li className=" justify-content-between d-flex fw-medium mb-4 p-3 hover-li ">
                                Achievements
                                    <Link to="/gallery">
                                        <GoChevronRight size={30} className="text-dark" />
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-sm-4 border border-dark rounded m-2 Accordian-width mb-4">
                            <ul className="fs-5 list-unstyled mt-3 mb-3 ">
                                <li className="border-bottom r justify-content-between d-flex fw-medium mb-4 p-3 hover-li ">
                                News and Updates
                                    <Link to="/about">
                                        <GoChevronRight size={30} className="text-dark" />
                                    </Link>
                                </li>
                                <li className="border-bottom justify-content-between d-flex fw-medium mb-4 p-3 hover-li ">
                                Contact Us/Join us
                                    <Link to="/birthplace">
                                        <GoChevronRight size={30} className="text-dark" />
                                    </Link>
                                </li>
                                <li className="border-bottom justify-content-between d-flex fw-medium mb-4 p-3 hover-li ">
                                Social Media Integration
                                    <Link to="/museum">
                                        <GoChevronRight size={30} className="text-dark" />
                                    </Link>
                                </li>
                                <li className="border-bottom justify-content-between d-flex fw-medium mb-4 p-3 hover-li ">
                                Donation and Support
                                    <Link to="/events">
                                        <GoChevronRight size={30} className="text-dark" />
                                    </Link>
                                </li>
                                <li className=" justify-content-between d-flex fw-medium mb-4 p-3 hover-li ">
                                Visitor Information
                                    <Link to="/gallery">
                                        <GoChevronRight size={30} className="text-dark" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AccordianSection;

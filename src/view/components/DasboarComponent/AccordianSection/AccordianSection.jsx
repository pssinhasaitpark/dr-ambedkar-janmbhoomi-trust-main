import React from "react";
import { Link } from "react-router-dom";
import { GoChevronRight } from "react-icons/go";
import "./AccordianSection.css";
const AccordianSection = () => {
  return (
    <>
      <div className="accordian-start">
        <div className="col-sm-12 accordian-started">
          <div className="row m-0">
            <div className="col-sm-4 border border-dark rounded m-3 Accordian-width ">
              <ul className="fs-5 list-unstyled mt-3 mb-3  ">
                <li className="border-bottom fs-4 justify-content-between d-flex  accordian-list hover-li fw-normal border-2">
                  About Dr. Ambedkar
                  <Link to="/about">
                    <GoChevronRight size={30} className="text-dark" />
                  </Link>
                </li>
                <li className="border-bottom border-2 justify-content-between d-flex   accordian-list fs-4 hover-li fw-normal">
                  The Birthplace
                  <Link to="/birth">
                    <GoChevronRight size={30} className="text-dark" />
                  </Link>
                </li>
                <li className="border-bottom border-2 justify-content-between d-flex   accordian-list fs-4 hover-li fw-normal ">
                  Museum / Exhibits
                  <Link to="/museum">
                    <GoChevronRight size={30} className="text-dark" />
                  </Link>
                </li>
                <li className="border-bottom border-2 justify-content-between d-flex   accordian-list fs-4 hover-li fw-normal ">
                  Events and Celebrations
                  <Link to="/event">
                    <GoChevronRight size={30} className="text-dark" />
                  </Link>
                </li>
                <li className=" justify-content-between border-2 d-flex accordian-list fs-4 hover-li fw-normal">
                  Gallery
                  <Link to="/gallery">
                    <GoChevronRight size={30} className="text-dark" />
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-sm-4 border border-dark rounded m-3 Accordian-width mb-4">
              <ul className="fs-5 list-unstyled mt-3 mb-3  ">
                <li className="border-bottom fs-4 justify-content-between d-flex  accordian-list hover-li fw-normal border-2">
                  Awards
                  <Link to="/award">
                    <GoChevronRight size={30} className="text-dark" />
                  </Link>
                </li>
                <li className="border-bottom fs-4 justify-content-between d-flex  accordian-list hover-li fw-normal border-2">
                  Books and Publications
                  <Link to="/book">
                    <GoChevronRight size={30} className="text-dark" />
                  </Link>
                </li>
                <li className="border-bottom fs-4 justify-content-between d-flex  accordian-list hover-li fw-normal border-2">
                  Dr. Ambedkar's Legacy
                  <Link to="/legacy">
                    <GoChevronRight size={30} className="text-dark" />
                  </Link>
                </li>
                <li className="border-bottom fs-4 justify-content-between d-flex  accordian-list hover-li fw-normal border-2">
                  Education and Research
                  <Link to="/education">
                    <GoChevronRight size={30} className="text-dark" />
                  </Link>
                </li>
                <li className=" fs-4 justify-content-between d-flex  accordian-list hover-li fw-normal ">
                  Achievements
                  <Link to="/achievement">
                    <GoChevronRight size={30} className="text-dark" />
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-sm-4 border border-dark rounded m-3 Accordian-width mb-4">
              <ul className="fs-5 list-unstyled mt-3 mb-3  ">
                <li className="border-bottom fs-4 justify-content-between d-flex  accordian-list hover-li fw-normal border-2">
                  News and Updates
                  <Link to="/news">
                    <GoChevronRight size={30} className="text-dark" />
                  </Link>
                </li>
                <li className="border-bottom fs-4 justify-content-between d-flex  accordian-list hover-li fw-normal border-2">
                  Contact Us/Join us
                  <Link to="/contact">
                    <GoChevronRight size={30} className="text-dark" />
                  </Link>
                </li>
                <li className="border-bottom fs-4 justify-content-between d-flex  accordian-list hover-li fw-normal border-2">
                  Social Media Integration
                  <Link to="/museum">
                    <GoChevronRight size={30} className="text-dark" />
                  </Link>
                </li>
                <li className="border-bottom fs-4 justify-content-between d-flex  accordian-list hover-li fw-normal border-2">
                  Donation and Support
                  <Link to="/donation">
                    <GoChevronRight size={30} className="text-dark" />
                  </Link>
                </li>
                <li className=" fs-4 justify-content-between d-flex  accordian-list hover-li fw-normal ">
                  Visitor Information
                  <Link to="/visit">
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

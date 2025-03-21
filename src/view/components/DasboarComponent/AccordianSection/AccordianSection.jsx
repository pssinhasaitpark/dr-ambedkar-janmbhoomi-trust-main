import React from "react";
import { Link } from "react-router-dom";
import { GoChevronRight } from "react-icons/go";
import "./AccordianSection.css";
const AccordianSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className="accordian-start">
        <div className="col-sm-12 accordian-started">
          <div className="row m-0">
            <div className="col-sm-4 border border-dark rounded m-3 Accordian-width ">
              <ul className="fs-5 list-unstyled mt-3 mb-3  ">
                <li className="border-bottom fs-4    accordian-list hover-li fw-normal border-2">
                  <Link to="/about" className="text-dark text-decoration-none justify-content-between d-flex  " onClick={scrollToTop}>
                    {" "}
                    About Dr. Ambedkar
                    <GoChevronRight size={30} className="text-dark" />
                  </Link>
                </li>{" "}
                <li className="border-bottom border-2  accordian-list fs-4 hover-li fw-normal ">
                  <Link to="/birth" className="text-dark text-decoration-none justify-content-between d-flex  " onClick={scrollToTop}>
                    The Birthplace
                    <GoChevronRight size={30} className="text-dark" />
                  </Link>
                </li>{" "}
                <li className="border-bottom border-2   accordian-list fs-4 hover-li fw-normal ">
                  <Link to="/museum" className="text-dark text-decoration-none justify-content-between d-flex  " onClick={scrollToTop}>
                    {" "}
                    Museum / Exhibits
                    <GoChevronRight size={30} className="text-dark" />
                  </Link>
                </li>{" "}
                <li className="border-bottom border-2  accordian-list fs-4 hover-li fw-normal ">
                  <Link to="/event" className="text-dark text-decoration-none justify-content-between d-flex  " onClick={scrollToTop}>
                    {" "}
                    Events and Celebrations
                    <GoChevronRight size={30} className="text-dark" />
                  </Link>
                </li>{" "}
                {" "}
                <li className="  border-2 accordian-list fs-4 hover-li fw-normal">
                  <Link to="/gallery" className="text-dark text-decoration-none justify-content-between d-flex  " onClick={scrollToTop}>
                    Gallery
                    <GoChevronRight size={30} className="text-dark" />
                  </Link>
                </li>{" "}
              </ul>
            </div>

            <div className="col-sm-4 border border-dark rounded m-3 Accordian-width mb-4">
              <ul className="fs-5 list-unstyled mt-3 mb-3  ">
                <li className="border-bottom fs-4  accordian-list hover-li fw-normal border-2">
                  <Link to="/award" className="text-dark text-decoration-none justify-content-between d-flex  " onClick={scrollToTop}>
                    Awards
                    <GoChevronRight size={30} className="text-dark" />
                  </Link>
                </li>{" "}
                <li className="border-bottom fs-4  accordian-list hover-li fw-normal border-2 sss">
                  <Link to="/book" className="text-dark text-decoration-none justify-content-between d-flex  " onClick={scrollToTop}>
                    {" "}
                    Books and Publications
                    <GoChevronRight size={30} className="text-dark" />
                  </Link>
                </li>{" "}
                <li className="border-bottom fs-4  accordian-list hover-li fw-normal border-2">
                  <Link to="/legacy" className="text-dark text-decoration-none justify-content-between d-flex  " onClick={scrollToTop}>
                    {" "}
                    Dr. Ambedkar's Legacy
                    <GoChevronRight size={30} className="text-dark" />
                  </Link>
                </li>{" "}
                <li className="border-bottom fs-4 accordian-list hover-li fw-normal border-2">
                  <Link to="/education" className="text-dark text-decoration-none justify-content-between d-flex  " onClick={scrollToTop}>
                    {" "}
                    Education and Research
                    <GoChevronRight size={30} className="text-dark" />
                  </Link>
                </li>{" "}
                <li className=" fs-4 accordian-list hover-li fw-normal ">
                  <Link to="/achievement" className="text-dark text-decoration-none justify-content-between d-flex  " onClick={scrollToTop}>
                    {" "}
                    Achievements
                    <GoChevronRight size={30} className="text-dark" />
                  </Link>
                </li>{" "}
              </ul>
            </div>

            <div className="col-sm-4 border border-dark rounded m-3 Accordian-width mb-4">
              <ul className="fs-5 list-unstyled mt-3 mb-3  ">
                <li className="border-bottom fs-4 accordian-list hover-li fw-normal border-2" onClick={scrollToTop}>
                  <Link to="/news" className="text-dark text-decoration-none justify-content-between d-flex  ">
                    News and Updates
                    <GoChevronRight size={30} className="text-dark" />
                  </Link>
                </li>
                <li className="border-bottom fs-4 accordian-list hover-li fw-normal border-2">
                  <Link to="/contact" className="text-dark text-decoration-none justify-content-between d-flex  " onClick={scrollToTop}>
                    {" "}
                    Contact Us/Join us
                    <GoChevronRight size={30} className="text-dark" />
                  </Link>
                </li>{" "}
                <li className="border-bottom fs-4   accordian-list hover-li fw-normal border-2">
                  <Link to="/contact" className="text-dark text-decoration-none justify-content-between d-flex" onClick={scrollToTop}>
                    {" "}
                    Social Media Integration
                    <GoChevronRight size={30} className="text-dark" />
                  </Link>
                </li>{" "}
                <li className="border-bottom fs-4   accordian-list hover-li fw-normal border-2">
                  <Link to="/donation" className="text-dark text-decoration-none justify-content-between d-flex" onClick={scrollToTop}>
                    {" "}
                    Donation and Support
                    <GoChevronRight size={30} className="text-dark" />
                  </Link>
                </li>{" "}
                <li className=" fs-4 accordian-list hover-li fw-normal ">
                  <Link to="/visit" className="text-dark text-decoration-none justify-content-between d-flex  " onClick={scrollToTop}>
                    {" "}
                    Visitor Information
                    <GoChevronRight size={30} className="text-dark " />
                  </Link>
                </li>{" "}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccordianSection;
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
                <Link to="/about" className="text-dark text-decoration-none " onClick={scrollToTop}>
                  {" "}
                  <li className="border-bottom fs-4 justify-content-between d-flex  accordian-list hover-li fw-normal border-2">
                    About Dr. Ambedkar
                    <GoChevronRight size={30} className="text-dark" />
                  </li>{" "}
                </Link>
                <Link to="/birth" className="text-dark text-decoration-none" onClick={scrollToTop}>
                  <li className="border-bottom border-2 justify-content-between d-flex   accordian-list fs-4 hover-li fw-normal">
                    The Birthplace
                    <GoChevronRight size={30} className="text-dark" />
                  </li>{" "}
                </Link>
                <Link to="/museum" className="text-dark text-decoration-none" onClick={scrollToTop}>
                  {" "}
                  <li className="border-bottom border-2 justify-content-between d-flex   accordian-list fs-4 hover-li fw-normal ">
                    Museum / Exhibits
                    <GoChevronRight size={30} className="text-dark" />
                  </li>{" "}
                </Link>
                <Link to="/event" className="text-dark text-decoration-none" onClick={scrollToTop}>
                  {" "}
                  <li className="border-bottom border-2 justify-content-between d-flex   accordian-list fs-4 hover-li fw-normal ">
                    Events and Celebrations
                    <GoChevronRight size={30} className="text-dark" />
                  </li>{" "}
                </Link>
                <Link to="/gallery" className="text-dark text-decoration-none" onClick={scrollToTop}>
                  {" "}
                  <li className=" justify-content-between border-2 d-flex accordian-list fs-4 hover-li fw-normal">
                    Gallery
                    <GoChevronRight size={30} className="text-dark" />
                  </li>{" "}
                </Link>
              </ul>
            </div>

            <div className="col-sm-4 border border-dark rounded m-3 Accordian-width mb-4">
              <ul className="fs-5 list-unstyled mt-3 mb-3  ">
                <Link to="/award" className="text-dark text-decoration-none" onClick={scrollToTop}>
                  <li className="border-bottom fs-4 justify-content-between d-flex  accordian-list hover-li fw-normal border-2">
                    Awards
                    <GoChevronRight size={30} className="text-dark" />
                  </li>{" "}
                </Link>
                <Link to="/book" className="text-dark text-decoration-none" onClick={scrollToTop}>
                  {" "}
                  <li className="border-bottom fs-4 justify-content-between d-flex  accordian-list hover-li fw-normal border-2">
                    Books and Publications
                    <GoChevronRight size={30} className="text-dark" />
                  </li>{" "}
                </Link>
                <Link to="/legacy" className="text-dark text-decoration-none" onClick={scrollToTop}>
                  {" "}
                  <li className="border-bottom fs-4 justify-content-between d-flex  accordian-list hover-li fw-normal border-2">
                    Dr. Ambedkar's Legacy
                    <GoChevronRight size={30} className="text-dark" />
                  </li>{" "}
                </Link>
                <Link to="/education" className="text-dark text-decoration-none" onClick={scrollToTop}>
                  {" "}
                  <li className="border-bottom fs-4 justify-content-between d-flex  accordian-list hover-li fw-normal border-2">
                    Education and Research
                    <GoChevronRight size={30} className="text-dark" />
                  </li>{" "}
                </Link>
                <Link to="/achievement" className="text-dark text-decoration-none" onClick={scrollToTop}>
                  {" "}
                  <li className=" fs-4 justify-content-between d-flex  accordian-list hover-li fw-normal ">
                    Achievements
                    <GoChevronRight size={30} className="text-dark" />
                  </li>{" "}
                </Link>
              </ul>
            </div>

            <div className="col-sm-4 border border-dark rounded m-3 Accordian-width mb-4">
              <ul className="fs-5 list-unstyled mt-3 mb-3  ">
                <Link to="/news" className="text-dark text-decoration-none">
                  <li className="border-bottom fs-4 justify-content-between d-flex  accordian-list hover-li fw-normal border-2" onClick={scrollToTop}>
                    News and Updates
                    <GoChevronRight size={30} className="text-dark" />
                  </li>{" "}
                </Link>
                <Link to="/contact" className="text-dark text-decoration-none" onClick={scrollToTop}>
                  {" "}
                  <li className="border-bottom fs-4 justify-content-between d-flex  accordian-list hover-li fw-normal border-2">
                    Contact Us/Join us
                    <GoChevronRight size={30} className="text-dark" />
                  </li>{" "}
                </Link>
                <Link to="/contact" className="text-dark text-decoration-none" onClick={scrollToTop}>
                  {" "}
                  <li className="border-bottom fs-4 justify-content-between d-flex  accordian-list hover-li fw-normal border-2">
                    Social Media Integration
                    <GoChevronRight size={30} className="text-dark" />
                  </li>{" "}
                </Link>
                <Link to="/donation" className="text-dark text-decoration-none" onClick={scrollToTop}>
                  {" "}
                  <li className="border-bottom fs-4 justify-content-between d-flex  accordian-list hover-li fw-normal border-2">
                    Donation and Support
                    <GoChevronRight size={30} className="text-dark" />
                  </li>{" "}
                </Link>
                <Link to="/visit" className="text-dark text-decoration-none" onClick={scrollToTop}>
                  {" "}
                  <li className=" fs-4 justify-content-between d-flex  accordian-list hover-li fw-normal ">
                    Visitor Information
                    <GoChevronRight size={30} className="text-dark" />
                  </li>{" "}
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccordianSection;
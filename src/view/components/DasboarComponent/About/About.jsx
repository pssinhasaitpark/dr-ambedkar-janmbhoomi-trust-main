import React from "react";
import "./About.css";
import { Card } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { abouta, aboutb, aboutc, aboutd } from "../../../../assests";

const About = () => {
  const memorialInfo = {
    title: "Dr Bhimrao Ambedkar Memorial Mhow",
    subtitle: "Bhim Janmabhoomi, Dr. Bhimrao Ambedkar Memorial Mhow",
    badge: "Dr Bhimrao Ambedkar",
    yearStart: 1994,
    yearComplete: 2007,
    openingDate: "14 April 2008",
    location: "Dr. Ambedkar Nagar (Mhow), Indore district, Madhya Pradesh, India",
  };

  const sliderImages = [
    { src: abouta, alt: "View of the memorial" },
    { src: aboutb, alt: "Exterior shot of the Bhimrao Ambedkar Memorial" },
    { src: aboutc, alt: "Another angle of the Bhimrao Ambedkar Memorial" },
    { src: aboutd, alt: "Aerial view of the Bhimrao Ambedkar Memorial" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <>
      <div className="container-fluid px-0 mb-4">
        <div className="row g-0">
       
          <div className="col-sm-12 col-md-6 p-0">
            <div className="text-white background-image h-100">
              <Card className="custom-card bg-transparent border-0">
                <Card.Body className="card-style">
                  <h5 className="badge bg-primary text-white mb-3">
                    {memorialInfo.badge}
                  </h5>
                  <h3 className="fw-bold">
                    {memorialInfo.subtitle.split(",")[0]},
                    <span className="text-primary">{memorialInfo.subtitle.split(",")[1]}</span>
                  </h3>
                  <p className="fw-bold mt-4">
                    Beginning date : <span className="fw-normal">{memorialInfo.yearStart}</span>
                  </p>
                  <p className="fw-bold">
                    Completion date : <span className="fw-normal">{memorialInfo.yearComplete}</span>
                  </p>
                  <p className="fw-bold">
                    Opening date : <span className="fw-normal">{memorialInfo.openingDate}</span>
                  </p>
                  <hr />
                  <p className="fw-bold">
                    Location : <span className="fw-normal">{memorialInfo.location}</span>
                  </p>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 p-0">
            <Slider {...settings}>
              {sliderImages.map((image, index) => (
                <div key={index} className="border-0">
                  <img className="card-img-top" src={image.src} alt={image.alt} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

import React from "react";
import useBanners from "../../../hooks/HomeHook/useBanners";  
import "./About.css";
import { Card } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const About = () => {
  const { data, status, error } = useBanners();
  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Error: {error}</div>;
  if (!data || data.length === 0) {
    return <div>No banners available.</div>;
  }
  const { name, heading, beginning_date, completion_date, opening_date, location, image_urls } = data[0];

  const sliderImages = image_urls.map((url, index) => ({
    src: url,
    alt: `Image ${index + 1}`,
  }));
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
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
    <div className="container-fluid px-0 mb-4" id="about">
      <div className="row g-0">
        <div className="col-sm-12 col-md-6 p-0">
          <div className="text-white background-image h-100">
            <Card className="custom-card bg-transparent border-0">
              <Card.Body className="card-style">
                <h5 className="badge bg-primary text-white mb-3">{name}</h5>
                <h3 className="fw-bold fs-1">
                  {heading.split(",")[0]},
                  <span className="text-primary">{heading.split(",")[1]}</span>
                </h3>
                <p className="fw-medium mt-4 fs-4">
                  Beginning date : <span className="fw-normal">{beginning_date}</span>
                </p>
                <p className="fw-medium mt-4 fs-4">
                  Completion date : <span className="fw-normal">{completion_date}</span>
                </p>
                <p className="fw-medium mt-4 fs-4">
                  Opening date : <span className="fw-normal">{opening_date}</span>
                </p>
                <hr />
                <p className="fw-medium mt-4 fs-4">
                  Location : <span className="fw-normal">{location}</span>
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
  );
};

export default About;

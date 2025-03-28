import React from "react";
import { useBanners } from "../../../hooks/index";
import "./About.css";
import { Card } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const About = () => {
  const { data, status, error } = useBanners();
  if (status === "loading") return <div className="spinner"></div>;
  if (status === "failed") return <div> {error}</div>;
  if (!data || data.length === 0) {
    return;
  }
  const {
    name,
    heading,
    beginning_date,
    completion_date,
    opening_date,
    location,
    image_urls,
  } = data[0];

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
    autoplaySpeed: 3000,
    speed: 2000,
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
      <div className="row g-0 responsive-about">
        <div className="col-lg-6 col-sm-12 p-0 ">
          <div
            loading="lazy"
            className="text-white background-image h-100 position-relative "
          >
            <Card className="custom-card bg-transparent border-0">
              <Card.Body className="card-style mt-4">
                <h4 className="badge-ambedkar badge bg-primary text-white mb-3 ms-1">
                  {name}
                </h4>

                <h3 className="fw-medium  p-1 display-6 lh-base About-head ">
                  {heading.split(",")[0]},
                  <span className="text-primary">{heading.split(",")[1]}</span>
                </h3>

                <table className="table table-borderless no-background-table ">
                  <tbody>
                    <tr>
                      <td className="fw-medium fs-4 heading-ambedkar">
                        Beginning date:
                      </td>
                      <td className="fw-normal fs-4 ambedkar-responsive ">{beginning_date}</td>
                    </tr>
                    <tr>
                      <td className="fw-medium fs-4 heading-ambedkar">
                        Completion date:
                      </td>
                      <td className="fw-normal fs-4 ambedkar-responsive ">{completion_date}</td>
                    </tr>
                    <tr>
                      <td className="fw-medium fs-4 heading-ambedkar">
                        Opening date:
                      </td>
                      <td className="fw-normal fs-4 ambedkar-responsive ">{opening_date}</td>
                    </tr>
                  </tbody>
                </table>
                <hr />
                <table className="table table-borderless no-background-table">
                  <tbody>
                    <tr>
                      <td className="fw-medium fs-4 heading-ambedkar">
                        Location:
                      </td>
                      <td className="fw-normal p-0 fs-4 lh-lg ambedkar-responsive">{location}</td>
                    </tr>
                  </tbody>
                </table>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12 p-0 responsive-about-column">
          <Slider {...settings} className="about-slider">
            {sliderImages.map((image, index) => (
              <div key={index} className="border-0">
                <img
                  loading="lazy"
                  className="card-img-top w-100"
                  src={image.src}
                  alt={image.alt}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default About;
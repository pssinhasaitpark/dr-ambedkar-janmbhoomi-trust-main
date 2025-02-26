import React from "react";
import Slider from "react-slick";
import "./BookPulicationSlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { trustee1 } from "../../../../assests";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="d-block position-absolute top-50 translate-middle-y arrow-right"
      onClick={onClick}
    >
      <IoIosArrowRoundForward
        size={45}
        className="heading-ambedkar border border-dark border rounded-circle"
      />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="d-block position-absolute top-50 translate-middle-y arrow-left"
      onClick={onClick}
    >
      <IoIosArrowRoundBack
        size={45}
        className="heading-ambedkar border border-dark border rounded-circle"
      />
    </div>
  );
}

const TrusteeSlider = () => {
  const settings = {
    dots: true, 
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, 
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false,
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
    <div className="all-section-width mt-5 mb-5">
      <div>
        <h2 className="text-center fw-bold text-uppercase biography-header p-0 m-0">
          Trustee of Janmabhoomi
        </h2>
        <p className="text-center">Dr. Bhimrao Ambedkar</p>
      </div>
      <Slider {...settings} className="book-publish">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="position-relative book-image">
            <img
              className="book-image position-relative"
              src={trustee1}
              alt="Bhimrao Ambedkar Memorial"
            />
            <p className="border shadow-sm bg-light text-center py-2 pb-3 w-75 position-absolute start-50 translate-middle ">
              Adv. Santosh Shukla
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TrusteeSlider;

import React from 'react';
import Slider from "react-slick";
import './BookSlider.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { slick, slick1, slick2, slick3, slick4 } from '../../../../assests';

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="d-block position-absolute top-50 translate-middle-y arrow-right"
      onClick={onClick}
    >
      <FiArrowRightCircle size={30} />
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
      <FiArrowLeftCircle size={30} />
    </div>
  );
}

const BookSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
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
    <>
      <div className="container mt-4 mb-4">
        <Slider {...settings} className="book-slider">
          <div className="position-relative">
            <img className="w-100 p-1" src={slick} alt="View of the memorial" />
          </div>
          <div>
            <img className="w-100 p-1" src={slick1} alt="Exterior shot of the Bhimrao Ambedkar Memorial" />
          </div>
          <div>
            <img className="w-100 p-1" src={slick2} alt="Another angle of the Bhimrao Ambedkar Memorial" />
          </div>
          <div>
            <img className="w-100 p-1" src={slick3} alt="Aerial view of the Bhimrao Ambedkar Memorial" />
          </div>
          <div>
            <img className="w-100 p-1" src={slick4} alt="Aerial view of the Bhimrao Ambedkar Memorial" />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default BookSlider;

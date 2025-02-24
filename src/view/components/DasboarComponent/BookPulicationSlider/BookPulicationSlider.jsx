import React from 'react';
import Slider from "react-slick";
import './BookPulicationSlider.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { slick, slick1, slick2, slick3, slick4 } from '../../../../assests';

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="d-block position-absolute top-50 translate-middle-y arrow-right "
      onClick={onClick}
    >
      <IoIosArrowRoundForward
        size={45} className='heading-ambedkar  border border-dark border rounded-circle' />
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
        size={45} className='heading-ambedkar  border border-dark border rounded-circle' />
    </div>
  );
}

const BookPulicationSlider= () => {
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
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <>
      <div className="all-section-width mt-4 mb-4">
        <Slider {...settings} className="book-publish">
          <div className="position-relative book-image">
            <img className="book-image" src={slick} alt="View of the memorial" />
          </div>
          <div>
            <img className="book-image" src={slick1} alt="Exterior shot of the Bhimrao Ambedkar Memorial" />
          </div>
          <div>
            <img className="book-image " src={slick2} alt="Another angle of the Bhimrao Ambedkar Memorial" />
          </div>
          <div>
            <img className=" book-image " src={slick3} alt="Aerial view of the Bhimrao Ambedkar Memorial" />
          </div>
          <div>
            <img className="book-image " src={slick4} alt="Aerial view of the Bhimrao Ambedkar Memorial" />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default BookPulicationSlider;

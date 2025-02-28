import React from 'react';
import Slider from "react-slick";
import './BookPulicationSlider.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { useBookSlider } from '../../../hooks/index'; 
import { useNavigate } from 'react-router-dom';


function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="d-block position-absolute top-50 translate-middle-y arrow-right"
      onClick={onClick}
    >
      <IoIosArrowRoundForward
        size={45} className='heading-ambedkar border border-dark border rounded-circle' />
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
        size={45} className='heading-ambedkar border border-dark border rounded-circle' />
    </div>
  );
}


const BookPulicationSlider = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigate = useNavigate()
  const { data, isLoading, error } = useBookSlider();  

  const settings = {
    dots: false,
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

  if (isLoading) {
    return <div className="spinner"></div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const handleonclick = (id) => {
    scrollToTop()
    navigate(`/bookDetail/${id}`)

  }

  return (
    <div className="all-section-width mt-4 mb-4">
      <Slider {...settings} className="book-publish">

        {data?.map((item, i) => {
          return (
            <>
              <div key={i}>
                <img className="book-image" src={item.cover_image} alt={`Book cover ${i + 1}`}
                  onClick={() => handleonclick(item._id) }
                />
              </div>
            </>
          )
        })}
      </Slider>
    </div>
  );
};

export default BookPulicationSlider;

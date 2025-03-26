import React from 'react';
import Slider from "react-slick";
import './BookPulicationSlider.css';
import { useBookSlider } from '../../../hooks/index';
import { useNavigate } from 'react-router-dom';


const BookData = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigate = useNavigate()
  const { data, isLoading, error } = useBookSlider();

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
 
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
    <div className=" mt-4 mb-4 bg-dark ps-1 pe-1">
      <Slider {...settings} className="book-publish">

        {data?.map((item) => {
          return (
            <div key={item._id}>
              <img
                className="book-image cursor-pointer"
                src={item.cover_image}
                alt={`Book cover ${item._id}`}
                onClick={() => handleonclick(item._id)}
              />
            </div>
          );
        })}

      </Slider>
    </div>
  );
};

export default BookData
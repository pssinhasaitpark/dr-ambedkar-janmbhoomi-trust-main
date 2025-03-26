import React, { useEffect } from "react";
import Slider from "react-slick";
import "./BookPulicationSlider.css";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { trustee1 } from "../../../../assests";
import { Link } from "react-router-dom";
import { useTrustees } from "../../../hooks/index";
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
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const { data, isLoading, error } = useTrustees();
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
   
    useEffect(() => {
      const slides = document.querySelectorAll('.slick-slide');
      slides.forEach(slide => {
        const isAriaHidden = slide.getAttribute('aria-hidden') === 'true';
        const link = slide.querySelector('a');
        if (link) {
          link.setAttribute('tabindex', isAriaHidden ? '-1' : '0');
        }
      });
    }, [data]); 
  if (isLoading) {
    return <div className="spinner"></div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const toTitleCase = (str) => {
    if (!str) return "";
    return str.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
  };
  return (
    <div className="" style={{ marginBottom: "" }}>
      <div className=" mt-5  ">
        <div>
          <h2 className="text-center fw-medium text-uppercase biography-header p-0 m-0 fs-1">
            Trustee of Janmabhoomi
          </h2>
          <p className="text-center">Dr. Bhimrao Ambedkar</p>
        </div>
        <Slider {...settings} className="book-publish ">
          {data?.map((item, index) => (
            <div key={item._id} className="position-relative book-image">
              <Link to="/trustee" onClick={scrollToTop}>
                <div>
                  <img
                    className="trustee-image"
                    src={item.image || trustee1}
                    alt={`Trustee: ${item.full_name}`}
                  />
                </div>
                <p className="border shadow-sm bg-light text-center py-1 pb-2 w-75 position-absolute start-50 translate-middle text-dark">
                {toTitleCase(item.full_name || "Default Name")}
                </p></Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TrusteeSlider;
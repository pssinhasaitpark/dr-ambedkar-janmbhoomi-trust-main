import React from "react";
import './Testimonial.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { Card } from "react-bootstrap";

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

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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
    <div className="testimonial-container py-4">
      <div className="heading-all">
        <h1 className="text-center fw-bold text-uppercase biography-header">
          Testimonial
        </h1>
        <p className="mb-4 text-center font-monospace">Dr. Bhimrao Ambedkar</p>
      </div>
      <Slider {...settings} className="testimonial-publish mb-4">
        <div className="testimonial-item ">
          <Card className="testimonial-card d-flex justify-content-between p-3 shadow-sm border">
            <Card.Body>
              <Card.Title className="fw-bold text-center">
                Dr. Ambedkar National Memorial:
              </Card.Title>
              <Card.Text className="text-center fs-5 lh-lg">
                The establishment of the Dr. Ambedkar National Memorial in India
                serves as a testament to his lasting impact. Harbir Singh,
                Managing Director of Pan Intellecom, emphasized the memorial's
                significance:
              </Card.Text>
              <div className="text-center fw-bold fs-5 lh-lg">
                "It was long felt by the government of India that Dr. B. R.
                Ambedkar, the messiah of the downtrodden, can be portrayed as a
                model to instill a sense of achievement and pride for the
                deprived segment of the masses."
              </div>
            </Card.Body>
          </Card>
        </div>

        <div className="testimonial-item">
          <Card className="testimonial-card p-3 shadow-sm border">
            <Card.Body>
              <Card.Title className="fw-bold text-center">
                Educational Impact:
              </Card.Title>
              <Card.Text className="text-center fs-5 lh-lg">
                Dr. Ambedkar's focus on education led to the establishment of
                many institutions in his name, promoting learning and social
                reform. Notably, Dr. B. R. Ambedkar NIT Jalandhar stands 
                hub of technical education in India.
              </Card.Text>
              <div className="text-center fw-bold fs-5 lh-lg">
                These examples underscore how Dr. Ambedkar's ideals continue to
                influence modern India, promoting social justice, political
                empowerment, and educational advancement.
                </div>
            </Card.Body>
          </Card>
        </div>

      </Slider>
    </div>
  );
};

export default Testimonial;

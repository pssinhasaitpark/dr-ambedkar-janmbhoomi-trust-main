import React from "react";
import "../BookPulicationSlider/BookPulicationSlider.css";
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

  const testimonials = [
    {
      title: "Dr. Ambedkar National Memorial:",
      text: "The establishment of the Dr. Ambedkar National Memorial in India serves as a testament to his lasting impact. Harbir Singh, Managing Director of Pan Intellecom, emphasized the memorial's significance:",
      quote: "\"It was long felt by the government of India that Dr. B. R. Ambedkar, the messiah of the downtrodden, can be portrayed as a model to instill a sense of achievement and pride for the deprived segment of the masses.\""
    },
    {
      title: "Educational Impact:",
      text: "Dr. Ambedkar's focus on education led to the establishment of many institutions in his name, promoting learning and social reform. Notably, Dr. B. R. Ambedkar NIT Jalandhar stands as a hub of technical education in India.",
      quote: "These examples underscore how Dr. Ambedkar's ideals continue to influence modern India, promoting social justice, political empowerment, and educational advancement."
    },
    {
      title: "Educational Impact:",
      text: "Dr. Ambedkar's focus on education led to the establishment of many institutions in his name, promoting learning and social reform. Notably, Dr. B. R. Ambedkar NIT Jalandhar stands as a hub of technical education in India.",
      quote: "These examples underscore how Dr. Ambedkar's ideals continue to influence modern India, promoting social justice, political empowerment, and educational advancement."
    }
  ];

  return (
    <div className="testimonial-container py-4 mt-3">
      <div className="heading-all">
        <h2 className="text-center text-uppercase biography-header display-6 fw-medium p-0 m-0">
          Testimonials
        </h2>
        <p className="mb-4 text-center ">Dr. Bhimrao Ambedkar</p>
      </div>
      <Slider {...settings} className="book-publish testimonial mb-4">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-item" key={index}>
            <Card className="testimonial-card d-flex justify-content-between p-3 shadow-sm border rounded-0 ms-4">
              <Card.Body>
                <Card.Title className="fw-bold text-center">
                  {testimonial.title}
                </Card.Title>
                <Card.Text className="text-center fs-5 lh-lg">
                  {testimonial.text}
                </Card.Text>
                <div className="text-center fw-bold fs-5 lh-lg">
                  {testimonial.quote}
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
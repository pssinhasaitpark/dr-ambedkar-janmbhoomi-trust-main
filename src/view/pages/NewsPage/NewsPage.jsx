import React from "react";
import { useNews } from "../../hooks/index";
import { Link } from "react-router-dom";
import { news1 } from "../../../assests/index";
import { Row, Col, Card } from "react-bootstrap";
import "./NewsPage.css";

const NewsPage = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const { data, isLoading, error } = useNews();

  if (isLoading) {
    return <div className="spinner"></div>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!data || !Array.isArray(data) || data.length === 0) {
    return <p>No news available.</p>;
  }

  const truncateDescription = (text, maxLength = 1000) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };


  return (
    <div className="all-section-width">
      <div className="img-banner">
        <img src={news1} alt="about-image" className="mb-2 all-image" />
      </div>

      <div className="mt-5 mb-4">
        <h2 className="text-uppercase fs-1 m-0 p-0">News and Updates</h2>
        <p className="mb-3 fs-5">Dr. Bhimrao Ambedkar</p>
      </div>
      <Row className="mb-4 row-newspage responsive-about">
        <Col key={data[0]._id} lg={12} md={12} sm={12} className="p-0 m-3">
          <h5 className="mb-3 fs-4">{data[0]?.headline || 'No headline available'}</h5>
          <Card className="border-1 rounded-0">
            <Card.Body>
              <Row>
                <Col lg={5} md={12} className="mb-3 mb-lg-0 responsive-about-column">
                  <img
                    src={data[0]?.images[0] || ''}
                    alt={data[0]?.headline || 'No image available'}
                    className="w-100 h-100 object-fit-cover"
                  />
                </Col>
                <Col lg={7} md={12} className="responsive-about-column">
                  <div
                    className="description"
                    dangerouslySetInnerHTML={{
                      __html: truncateDescription(data[0]?.description || '',2000),
                    }}
                  />
                  <ul className="lh-base">
                    {data[0]?.latest_news
                      ?.split(":")
                      .slice(1)
                      .map((event, index) => (
                        <li key={index} className="fs-6 ms-4">
                          {event.trim()}
                        </li>
                      ))}
                  </ul>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <div className="border p-4 mb-3">
        {data.slice(1).map((newsItem, index) => {
          if (index % 2 === 0) {
            return (
              <Row key={index} className="mb-4 p-0 m-0 responsive-about">
                {data.slice(index, index + 2).map((item) => (
                  <Col key={item._id} lg={6} md={6} sm={12} className="p-0 m-0">
                    <Card className="border-0">
                      <Row className="responsive-row">
                        <Col xs={5} className="responsive-about-column">
                          <img
                            src={item?.images[0] || ''}
                            alt={item?.headline || 'No image available'}
                            className="newspage-image"
                          />
                        </Col>
                        <Col xs={7} className="responsive-about-column">
                          <p className="fs-5 m-0 p-0 fw-bolder"> {truncateDescription(item?.headline || 'No headline available', 80)} </p>
                          <div
                            className="description"
                            dangerouslySetInnerHTML={{
                              __html: truncateDescription(item?.description || '', 280),
                            }}
                          />
                          <Link
                            to={`/news/get/${item._id}`}
                            className="text-decoration-none text-dark fw-bold fs-5"
                            onClick={scrollToTop}
                          >
                            Read More
                          </Link>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                ))}
              </Row>
            );
          }
          return null;
        })}
      </div>
      <Row className="mb-4 row-newspage">
        <Col lg={12} md={12} sm={12} className="p-0 m-3">
          <h5 className="mb-3 fs-4">
            {data[1]?.headline || data[0]?.headline || 'No headline available'}
          </h5>
          <Card className="border-1 rounded-0">
            <Card.Body>
              <Row className="responsive-about">
                <Col lg={5} md={12} className="mb-3 mb-lg-0 responsive-about-column">
                  <img
                    src={data[1]?.images[0] || data[0]?.images[0] || ''}
                    alt={data[1]?.headline || data[0]?.headline || 'No image available'}
                    className="w-100 h-100 object-fit-cover"
                  />
                </Col>
                <Col lg={7} md={12} className="responsive-about-column">
                  <div
                    className="description"
                    dangerouslySetInnerHTML={{
                      __html: truncateDescription(data[1]?.description || '', 1000),
                    }}
                  />
                  <ul className="lh-base">
                    {data[1]?.latest_news
                      ?.split(":")
                      .slice(1)
                      .map((event, index) => (
                        <li key={index} className="fs-6 ms-4">
                          {event.trim()}
                        </li>
                      )) || null}
                  </ul>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <div className="rounded-0">
        {data.slice(4).map((item, index) => (
          <Row key={item._id} className="mb-4">
            <h5 className="mb-3 fs-4">{item?.headline || 'No headline available'}</h5>
            <Col className="p-0 m-0 responsive-about-column">
              <Card>
                <Card.Body>
                  <div
                    className="description"
                    dangerouslySetInnerHTML={{
                      __html: item?.description || 'No description available',
                    }}
                  />
                  <ul className="lh-base mt-3">
                    {item?.latest_news
                      ?.split(":")
                      .slice(1)
                      .map((event, eventIndex) => (
                        <li key={eventIndex} className="fs-6 ms-4">
                          {event.trim()}
                        </li>
                      )) || null}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;

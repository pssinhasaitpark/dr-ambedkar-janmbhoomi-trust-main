import React from "react";
import { useNews } from "../../hooks/index";
import { Link } from "react-router-dom";
import { news1 } from "../../../assests/index";
import { Row, Col, Card } from "react-bootstrap";
import "./NewsPage.css";
const NewsPage = () => {
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

  const truncateDescription = (text, maxLength = 150) => {
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
      <Row className="mb-4 row-newspage">
      <Col key={data[0]._id} lg={12} md={12} sm={12} className="p-0 m-3">
      <h5 className="mb-3 fs-4">{data[0].headline}</h5>
          <Card className="border-1 rounded-0">
          <Card.Body>
              <Row>
                <Col lg={5} md={12} className="mb-3 mb-lg-0">
                <img
                  src={data[0].images[0]}
                  alt={data[0].headline}
                  className="w-100 h-100 object-fit-cover"
                />
                </Col>
                <Col lg={7} md={12}>
                <h5 className="mb-3 fs-4">{data[0].headline}</h5>
                <div
                  className="description"
                  dangerouslySetInnerHTML={{
                    __html: (data[0].description),
                  }}
                />
                <ul className="lh-base">
                  {data[0].latest_news
                    .split(":")
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
      <div className=" border p-4 mb-3">
        {data.slice(1).map((newsItem, index) => {
          if (index % 2 === 0) {
            return (
              <Row key={index} className="mb-4 p-0 m-0">
                {data.slice(index, index + 2).map((item) => (
                  <Col key={item._id} lg={6} md={6} sm={12} className="p-0 m-0">
                    {" "}
                    <Card className="border-0">
                    
                      <Row>
                        <Col xs={5}>
                          <img
                            src={item.images[0]}
                            alt={item.headline}
                            className="newspage-image"
                          />
                        </Col>
                        <Col xs={7}>
                          <p className="fs-5 mb-3">{item.headline}</p>
                          <div
                            className=" description"
                            dangerouslySetInnerHTML={{
                              __html: truncateDescription(
                                item.description,
                                100
                              ),
                            }}
                          />
                          <Link
                            to={`/news/get/${item._id}`}
                            className="text-decoration-none text-dark fw-bold fs-5"
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
        <Col  lg={12} md={12} sm={12} className="p-0 m-3">
        <h5 className="mb-3 fs-4">
                    {data[1]?.headline || data[0].headline}
                  </h5>
          <Card className="border-1 rounded-0">
            <Card.Body>
              <Row>
                <Col lg={5} md={12} className="mb-3 mb-lg-0">
                  <img
                    src={data[1]?.images[0] || data[0].images[0]}
                    alt={data[1]?.headline || data[0].headline} 
                    className="w-100 h-100 object-fit-cover"
                  />
                </Col>
                <Col lg={7} md={12}>
                  <h5 className="mb-3 fs-4">
                    {data[1]?.headline || data[0].headline}
                  </h5>{" "}
                  <div
                    className="description"
                    dangerouslySetInnerHTML={{
                      __html: truncateDescription(
                        data[3]?.description || data[0].description
                      ),
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
        {data.slice(3).map((item, index) => (
          <Row key={item._id} className="mb-4">
             <h5 className="mb-3 fs-4">{item.headline}</h5>
            <Col className="p-0 m-0">
              <Card className="">
                <Card.Body>
                  <h5 className="mb-3 fs-4">{item.headline}</h5>
                  <div
                    className="description"
                    dangerouslySetInnerHTML={{
                      __html: item.description,
                    }}
                  />
                  <ul className="lh-base mt-3">
                    {item.latest_news
                      .split(":")
                      .slice(1)
                      .map((event, eventIndex) => (
                        <li key={eventIndex} className="fs-6 ms-4">
                          {event.trim()}
                        </li>
                      ))}
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

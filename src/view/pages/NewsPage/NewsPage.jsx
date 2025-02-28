import React from 'react';
import { useNews } from '../../hooks/index';
import { Link } from 'react-router-dom';
import { news1 } from '../../../assests/index';
import { Row, Col, Card } from 'react-bootstrap';

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

  // Truncate description function
  const truncateDescription = (text, maxLength = 150) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
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
      </div>

      {/* First Section: Show 1 news item in full width */}
      <Row className="mb-4">
        <Col key={data[0]._id} lg={12} md={12} sm={12} className="p-0 m-0">
          <Card className="border-1 rounded-0">
            <Card.Body>
              <Row>
                {/* Left Column - Image */}
                <Col lg={5} md={12} className="mb-3 mb-lg-0">
                  <img
                    src={data[0].images[0]}
                    alt={data[0].headline}
                    className="w-100 h-100 object-fit-cover"
                  />
                </Col>

                {/* Right Column - Text */}
                <Col lg={7} md={12}>
                  <h5 className="mb-3 fs-4">{data[0].headline}</h5>
                  <div
                    className="description"
                    dangerouslySetInnerHTML={{
                      __html: truncateDescription(data[0].description),
                    }}
                  />
                  <Link to={`/news/get/${data[0]._id}`} className="ms-lg-5 m-0">
                    Read More
                  </Link>

                  <ul className="lh-base">
                    {data[0].latest_news.split(':').slice(1).map((event, index) => (
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

      {/* Second Section: Show 2 news items per row */}
      <div className="border rounded-0">
        {data.slice(1).map((newsItem, index) => {
          // Split into groups of two per row
          if (index % 2 === 0) {
            return (
              <Row key={index} className="mb-4">
                {data.slice(index, index + 2).map((item) => (
                  <Col key={item._id} lg={6} md={6} sm={12} className="p-0 m-0">
                    <Card className="border-1 rounded-0">
                      <Card.Body>
                        <Row>
                          {/* Left Column - Image */}
                          <Col xs={5}>
                            <img
                              src={item.images[0]}
                              alt={item.headline}
                              className="w-100 h-100 object-fit-cover"
                            />
                          </Col>

                          {/* Right Column - Text */}
                          <Col xs={7}>
                            <h5 className="fs-5 mb-3">{item.headline}</h5>
                            <div
                              className="description"
                              dangerouslySetInnerHTML={{
                                __html: truncateDescription(item.description, 100),
                              }}
                            />
                            <Link to={`/news/get/${item._id}`} className="text-decoration-none text-dark fs-6">
                              Read More
                            </Link>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default NewsPage;

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

  return (
    <div className='all-section-width'>
      <div className="img-banner">
        <img src={news1} alt="about-image" className="mb-2 all-image" />
      </div>

      <div className="mt-5 mb-4">
        <h2 className="text-uppercase fs-1 m-0 p-0">News and Updates</h2>
        {data.map((newsItem) => (
          <div key={newsItem._id}>
            <p className="mb-3 fs-5">Dr. Bhimrao Ambedkar</p>
            <p className="fw-medium mt-2 paragraph-birth">
              <span className="fs-3">Latest news on events related to Dr. Ambedkar's birthplace :</span> {newsItem.latest_news}
            </p>
          </div>
        ))}
      </div>

      {data.map((newsItem) => (
        <Row className="mb-4" key={newsItem._id}>
          <Col className='p-0 m-0'>
            <Card className="border-1 rounded-0">
              <Card.Body>
                <Row>
                  <Col lg={5} md={12} className="mb-3 mb-lg-0">
                    <img
                      src={newsItem.images[0]}
                      alt={newsItem.headline}
                      className="w-100 h-100"
                    />
                  </Col>
                  <Col lg={7} md={12}>
                    <h5 className="mb-3 fs-4">{newsItem.headline}</h5>
                    <div
                      className="description"
                      dangerouslySetInnerHTML={{ __html: newsItem.description }}
                    />
                    <Link to={`/news/get/${newsItem._id}`} className='ms-lg-5 m-0'>Read More</Link>
                    {/* <p>
        {newsItem.description.length > 100
          ? `${newsItem.description.substring(0, 100)}...`
          : newsItem.description}
      </p> */}
                    <ul className='lh-base'>
                      {newsItem.latest_news.split(':').slice(1).map((event, index) => (
                        <li key={index} className='fs-6 ms-4'>{event.trim()}</li>
                      ))}
                    </ul>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default NewsPage;

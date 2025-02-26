import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import { janam } from "../../../../assests/index";
import "./HistoryComponent.css";

const HistoryComponent = () => {
  return (
    <div className="bg-light">
    <div className="all-section-width py-5 ">
      <Row className=" mt-5">
        <Col md={10}>
          <Row>
            <Col
              md={5}
              className="image-container position-relative mb-4 mb-md-0"
            >
              <div className="image-border">
                <Image
                  src={janam}
                  alt="Dr. Bhimrao Ambedkar"
                  fluid
                  className="ambedkar-image"
                />
              </div>
            </Col>

            <Col md={7} className="ps-4">
              <h3 className="text-uppercase biography-header p-0 m-0  fw-bold fs-2">
                Historyof Janmabhoomi
              </h3>
              <p className="side-line-side position-relative fw-normal fs-5 p-0 m-0">
                Dr. Bhimrao Ambedkar
              </p>
              <div className="mb-1 mt-3">
                <p className="fs-4 fw-medium p-0 m-0">Significance of Mhow</p>
                <p className="section-content fs-6 p-0 m-0">
                  Mhow was a British military cantonment where Ambedkar's
                  father, Ramji Maloji Sakpal, served in the army. Despite being
                  born into a Dalit family, Ambedkar's early exposure to
                  education and discipline in Mhow shaped his intellectual
                  journey.
                </p>
              </div>

              <div className="mb-2">
                <p className="fs-4 fw-medium p-0 m-0">Janmabhoomi Smarak</p>
                <p className="section-content fs-6 p-0 m-0">
                  The government has developed Dr. Ambedkar Memorial in Mhow,
                  featuring a statue, museum, and library dedicated to his life
                  and works. Every year on April 14, thousands of followers
                  visit Mhow to pay tribute to Dr. Ambedkar.
                </p>
              </div>

              <div className="mb-5">
                <p className="fs-4 fw-medium p-0 m-0">Legacy</p>
                <p className="section-content fs-6 p-0 m-0">
                  Dr. Ambedkar's birthplace remains a sacred site for those
                  inspired by his vision of social justice, equality, and
                  education for all.
                </p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
    </div>
  );
};

export default HistoryComponent;

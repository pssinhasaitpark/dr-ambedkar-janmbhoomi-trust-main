import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { IoIosCloudUpload } from "react-icons/io";
import { legacyy } from "../../../assests/index";
import "./Legacy.css";
import { Testimonial } from "../../components/index";
const LegacyPage = () => {
  const [showUpload, setShowUpload] = useState(false);
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleModalClose = () => setShowUpload(false);
  const handleModalShow = () => setShowUpload(true);

  return (
    <div className="all-section-width">
      <div className="img-banner ">
        <img src={legacyy} alt="legacy-image" className="mb-2 legacy-image" />
      </div>
      <div className="mt-5 mb-4">
        <h2 className="text-uppercase fs-1  ">Dr.Ambedkar's Legacy</h2>
        <p className="mb-3 fs-5">Dr. Bhimrao Ambedkar</p>
        <p className=" fw-medium  mt-2 paragraph-birth ">
          <span className="fs-3"> Ambedkar's Legacy : </span> Dr. Bhimrao Ramji
          Ambedkar, known as the architect of the Indian Constitution, left an
          enduring legacy that continues to shape modern India and inspire
          global movements for equality and justice.
        </p>
      </div>
      <div className="border border-2 mt-5">
        <div className="mt-4 mb-4 ms-4">
          <p className="m-0 fs-4 fw-medium">
            Information on the societal impact of Dr. Ambedkar's work.
          </p>
          <p className="m-0 fs-5 ">
            Dr. B.R. Ambedkar’s work transformed Indian society, advocating for
            equality, justice, and empowerment of marginalized communities.
          </p>
          <ul className="m-0">
            <li className="fs-5 lh-base ms-1 mb-1">
              Dalit Upliftment: Led the fight against caste discrimination,
              ensuring legal protections and reservations.
            </li>
            <li className="fs-5 lh-base ms-1 mb-1">
              Constitutional Reforms: As chief architect of the Indian
              Constitution, secured fundamental rights and social justice
              provisions.
            </li>
            <li className="fs-5 lh-base ms-1 mb-1">
              Women’s Rights: Championed gender equality, inheritance rights,
              and labor protections.
            </li>
            <li className="fs-5 lh-base ms-1 mb-1">
              Economic & Labor Reforms: Introduced policies like an 8-hour
              workday, equal pay, and financial reforms.
            </li>
            <li className="fs-5 lh-base ms-1 mb-1">
              Buddhism & Social Change: Revived Buddhism in India, promoting
              equality and non-violence.
            </li>
            <li className="fs-5 lh-base ms-1 mb-1">
              Global Influence: Inspired human rights and anti-discrimination
              movements worldwide.
            </li>
          </ul>
          <p className="fs-5 lh-base ms-1 mb-1">
            His vision continues to shape India’s laws, education, and social
            policies, making him a timeless icon of equality and justice.
          </p>
        </div>
      </div>
      <div className="border border-2 mt-5">
        <div className="mt-5 mb-4">
          <p className="m-0 fs-4 ms-4 fw-medium">
            Articles on the influence of his ideas on modern India.
          </p>
          <p className="fs-5 ms-4 ">
            Dr. B.R. Ambedkar's profound influence on modern India has been the
            subject of extensive scholarly analysis. His contributions to social
            justice, political reform, and economic thought continue to resonate
            in contemporary discourse. Below is a curated list of notable
            articles that explore various facets of Ambedkar's enduring legacy:
          </p>
        </div>
        <div className="">
          <p className="fs-5 ms-4 m-0 fw-medium ">
            1. "Dr. B.R. Ambedkar: The Maker of Modern India"
          </p>
          <p className="fs-5 ms-4 lh-lg m-0">
            This paper delves into Ambedkar's pivotal role in shaping India's
            socio-political landscape, emphasizing his efforts in combating
            caste-based discrimination and advocating for the rights of
            marginalized communities.
          </p>

          <p className="fs-5 ms-4 m-0 fw-medium ">
            2. "Organic Intellectuals from Modern India: B.R. Ambedkar and R.M.
            Lohia"
          </p>
          <p className="fs-5 ms-4 lh-lg m-0">
            Published in Global Intellectual History, this article revisits the
            intellectual contributions of Dr. Ambedkar and Dr. Ram Manohar
            Lohia, focusing on their perspectives on inequality and social
            reform.
          </p>

          <p className="fs-5 ms-4 m-0 fw-medium ">
            3. "The Role of Dr. B.R. Ambedkar in Shaping Modern India"
          </p>
          <p className="fs-5 ms-4 lh-lg m-0">
            This study examines Ambedkar's multifaceted contributions as a
            nation-builder, constitutional architect, economist, and
            educationist, highlighting his lasting impact on contemporary India.
          </p>

          <p className="fs-5 ms-4 m-0 fw-medium ">
            4. "Contribution of Dr. B.R. Ambedkar to Modern India"
          </p>
          <p className="fs-5 ms-4 lh-lg m-0">
            Featured in the International Journal of Creative Research Thoughts,
            this paper assesses Ambedkar's role in nation-building, emphasizing
            his work as the principal architect of the Indian Constitution and
            his influence on economic policies.
          </p>

          <p className="fs-5 ms-4 m-0 fw-medium ">
            5. "Dr. Ambedkar's Influence on Modern Indian Politics: A Historical
            Perspective"
          </p>
          <p className="fs-5 ms-4 lh-lg m-0">
            This article provides a historical analysis of Ambedkar's impact on
            Indian politics, discussing his journey from a marginalized
            individual to a key figure in India's political arena.
          </p>

          <p className="fs-5 ms-4 m-0 fw-medium ">
            6. "Dr. Babasaheb Ambedkar:
          </p>
          <p className="fs-5 ms-4 lh-lg m-0 ">
            Formation of Equality in Modern India'" Published in the
            International Education and Research Journal, this piece explores
            Ambedkar's efforts in fostering equality, noting that his vision
            continues to influence contemporary policies aimed at addressing
            historical injustices.
          </p>

          <p className="p-0 m-0 ms-4 fs-5 mb-4">
            These articles offer diverse perspectives on Dr. Ambedkar's enduring
            influence on modern India, providing valuable insights into his
            contributions to social justice, political reform, and economic
            thought.
          </p>
        </div>
      </div>
      <div className="fs-4 fw-medium lh-base mt-5">
        Dr. B.R. Ambedkar's contributions continue to resonate in contemporary
        India, influencing various facets of society. Here are some
        testimonials, case studies, and stories that highlight the enduring
        relevance of his work:
      </div>
      <Testimonial />
      <div className="all-background py-4">
        <div className="">
          <h1 className="text-center fw-bold text-uppercase biography-header text-light">
            Achievements Awards
          </h1>
          <p className="mb-4 text-center font-monospace text-light">
            Dr. Bhimrao Ambedkar
          </p>
        </div>

        <div className="d-flex flex-column align-items-center">
          <Form className="w-100 d-flex flex-column gap-3">
            <Form.Group>
              <Form.Control
                as="textarea"
                rows={8}
                className="mx-auto textarea-submit "
                placeholder="Write your testimonial..."
              />
              <div className="d-flex justify-content-between p-1 ">
              <div className="d-flex fs-4 text-light fw-medium ms-lg-5 cursor-pointer">
                <IoIosCloudUpload
                  size={35}
                  className="upload-icon cursor-pointer p-1"
                  onClick={handleModalShow}
                />
                <p>uploaded case studies</p>
              </div>
              <div className="d-flex fs-4 text-light fw-medium me-lg-5 cursor-pointer">
                <IoIosCloudUpload
                  size={35}
                  className="share-icon cursor-pointer p-1"
                  onClick={handleModalShow}
                />
                <p>uploaded stories</p>
              </div>
            </div>
            </Form.Group>
            

            <div className="text-center mt-3">
              <Button
                variant="light"
                size="lg"
                className="px-5 rounded-1 text-primary fw-bolder font-monospace p6-5" 
              >
                Submit Testimonial
              </Button>
            </div>
          </Form>
          <Modal show={showUpload} onHide={handleModalClose}>
            <Modal.Header closeButton>
              <Modal.Title>Upload Your Story Image</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="form-control"
              />
              {image && (
                <div className="mt-3">
                  <img src={image} alt="Uploaded" className="uploaded-image" />
                </div>
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleModalClose}>
                Close
              </Button>
              <Button
                variant="primary"
                onClick={() => alert("Image uploaded!")}
              >
                Upload Image
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default LegacyPage;

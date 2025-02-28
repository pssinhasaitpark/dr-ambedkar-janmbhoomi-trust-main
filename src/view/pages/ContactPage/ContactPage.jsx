import React from "react";
import { useFormik } from "formik";
import { ToastContainer } from "react-toastify";
import * as yup from "yup";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useContacts } from "../../hooks/index";
import { contact, contact1, contact3, contact2 } from "../../../assests";
import "./ContactUs.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
const mapIconLogo = new L.Icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png", 
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const phoneRegExp =
  /^(\+?\d{0-9})?\s?-?\s?(\(?\d{7}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

const FormSchema = yup.object().shape({
  first_name: yup.string().max(15, "Must be 15 characters or less"),
  last_name: yup.string().max(15, "Must be 15 characters or less"),
  location: yup
    .string(2, "Must be 2 words or more")
    .min(2, "Must be 2 words or more")
    .max(50, "Must be 50 words or less"),
  email: yup
    .string()
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      "Invalid email address"
    ),
  phone_no: yup.string().matches(phoneRegExp, "Phone number is not valid"),
});
const ContactCard = ({ image, title, content, type }) => {
  const handleClick = () => {
    if (type === "location") {
      window.open(
        `https://www.google.com/maps/search/?q=${encodeURIComponent(content)}`,
        "_blank"
      );
    } else if (type === "phone") {
      window.location.href = `tel:${content}`;
    } else if (type === "email") {
      window.location.href = `mailto:${content}`;

    }
  };

  return (
    <div className="col-md-4 mb-3 position-relative" onClick={handleClick}>
      <div className="contact-card border-0 p-4 rounded-4 cursor-pointer">
        <div className="card-body">
          <div className="card-contact-imgs p-3 mb-3">
            <img loading="lazy" src={image} alt={title} />
          </div>
          <h5 className="fw-normal">{title}</h5>
          <p className="fw-light mb-0">{content}</p>
        </div>
      </div>
    </div>
  );
};
const ContactPage = () => {
  const { mutate } = useContacts();

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      phone_no: "",
      email: "",
      location: "",
    },
    validationSchema: FormSchema,
    onSubmit: (values, { resetForm }) => {
      mutate(values);
      setTimeout(() => {
        resetForm();
      }, 6000); 
    },
  });
  const position = [22.5505, 75.7625];

  return (
    <div className="all-section-width">
      <div className="img-banner ">
        <img src={contact2} alt="about-image" className="mb-2 all-image" />
      </div>
      <div className="mt-5 mb-4">
        <h2 className="text-uppercase fs-1 p-0 m-0  ">CONTACT US/JOIN US</h2>
        <p className=" fs-5">Dr. Bhimrao Ambedkar</p>
        <p className=" fw-normal  mt-2 paragraph-birth ">
          <span className="fs-3">
            Latest news on events related to Dr. Ambedkar's birthplace :{" "}
          </span>{" "}
          Political Leaders' Homage: In late December 2024, Defence Minister
          Rajnath Singh, accompanied by Chief of Army Staff General Upendra
          Dwivedi, paid floral tributes at Dr. Ambedkar's memorial in Mhow,
          Madhya Pradesh.
        </p>
      </div>

      <div className="row mt-5 container  text-center mx-auto mb-5">
        <ContactCard
          image={contact}
          title="OUR LOCATION"
          content="Dr. B.R. Ambedkar Memorial, Mhow, Madhya Pradesh, India"
          type="location"
        />
        <ContactCard
          image={contact1}
          title="PHONE NUMBER"
          content="91+123-1123-1234"
          type="phone"
        />
        <ContactCard
          image={contact3}
          title="EMAIL ADDRESS"
          content="Dr Ambedkartrust@.gmail.com"
          type="email"
        />
      </div>
      <div className="position-relative mt-5" style={{ height: "120vh" }}>
        <div
          className="bg-img position-absolute w-100 h-100 object-fit-fill"
          style={{
            zIndex: -1,
          }}
        ></div>
        <Row className="justify-content-center align-items-center h-100 shadow p-0 mx-0">
          <Col md={8} lg={6} xl={5} className="bg-white p-4 shadow shadow w-75 container-contact">
            <Row>
              <Col md={6} className="p-0">
                <MapContainer
                  center={position}
                  zoom={13}
                  style={{ height: "100%", width: "100%" }}
                  key={position}
                >
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                  <Marker position={position} icon={mapIconLogo}>
                    <Popup>Our Location</Popup>
                  </Marker>
                </MapContainer>
              </Col>
              <Col md={6} className="p-5">
                <h4 className="mb-2 text-center mb-3 fs-3 biography-header">GET A QUOTE NOW</h4>
                <p className="text-muted text-start fw-light fs-6 mb-4">
                  We’d love to hear what you have in mind for your project and
                  how we can help out. contact us the from below
                </p>
                <Form onSubmit={formik.handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="First name"
                      name="first_name"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.first_name}
                      required
                    />
                    {formik.touched.first_name && formik.errors.first_name && (
                      <div className="text-danger">
                        {formik.errors.first_name}
                      </div>
                    )}
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Last name"
                      name="last_name"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.last_name}
                      required
                    />
                    {formik.touched.last_name && formik.errors.last_name && (
                      <div className="text-danger">
                        {formik.errors.last_name}
                      </div>
                    )}
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Phone Number"
                      name="phone_no"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.phone_no}
                      required
                    />
                    {formik.touched.phone_no && formik.errors.phone_no && (
                      <div className="text-danger">
                        {formik.errors.phone_no}
                      </div>
                    )}
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Control
                      type="email"
                      placeholder="Email Address"
                      name="email"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      required
                    />
                    {formik.touched.email && formik.errors.email && (
                      <div className="text-danger">{formik.errors.email}</div>
                    )}
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Location"
                      name="location"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.location}
                      required
                    />
                    {formik.touched.location && formik.errors.location && (
                      <div className="text-danger">
                        {formik.errors.location}
                      </div>
                    )}
                  </Form.Group>
                  <Button
                    type="submit"
                    variant="primary rounded-0"
                    className="w-100 fs-4 fw-bold font-monospace"
                  >
                    Send
                  </Button>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
        <ToastContainer />
      </div>
    </div>
  );
};

export default ContactPage;

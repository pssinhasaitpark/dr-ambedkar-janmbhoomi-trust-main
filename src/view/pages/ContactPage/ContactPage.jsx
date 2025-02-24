import React from "react";
// import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { ToastContainer } from "react-toastify";
import * as yup from "yup";
import { Row, Col, Form, Button } from "react-bootstrap";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useContacts } from "../../hooks/index";
import { contact, contact1, contact3 } from "../../../assests";
import "./ContactUs.css";

const phoneRegExp =
  /^(\+?\d{0-9})?\s?-?\s?(\(?\d{7}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

const FormSchema = yup.object().shape({
  first_name: yup.string().max(15, "Must be 15 characters or less"),
  last_name: yup.string().max(15, "Must be 15 characters or less"),
  location: yup.string().max(15, "Must be 15 characters or less"),
  email: yup
    .string()
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      "Invalid email address"
    ),
  phone_no: yup.string().matches(phoneRegExp, "Phone number is not valid"),
});

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
    onSubmit: (values) => {
      mutate(values);
    },
  });

  const position = [22.7196, 75.8577];

  return (
    <div className="all-section-width text-center my-5">
      <h2 className="fw-bold my-4">CONTACT US/JOIN US</h2>
      <p className="mx-auto mb-5 fs-6 w-50 text-center lh-lg">
        Dr. B.R. Ambedkar’s birthplace in Mhow, Madhya Pradesh. Whether you wish
        to volunteer, donate, or collaborate, your support is invaluable.
      </p>
      <div className="row mt-4 mb-5">
        <div className="col-md-4 mb-3 position-relative p-lg-5 m-0 ">
          <div className="contact-card shadow border-0 p-4 rounded-4  ">
            <div className="card-body ">
              <div className="card-contact-imgs p-3 mb-3">
                <img src={contact} alt="" />
              </div>
              <h5 className="fw-normal">OUR LOCATION</h5>
              <p className="fw-light mb-0">
                Dr. B.R. Ambedkar Memorial, Mhow, Madhya Pradesh, India
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3 position-relative p-lg-5 m-0">
          <div className="contact-card shadow border-0 p-4 rounded-4 ">
            <div className="card-body">
              <div className=" card-contact-imgs p-3 mb-3">
                <img src={contact1} alt="" />
              </div>
              <h5 className="fw-normal">PHONE NUMBER</h5>
              <p className="fw-light mb-0">91+123-1123-1234</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3 position-relative m-0 p-lg-5">
          <div className="contact-card shadow border-0 p-4 rounded-4 ">
            <div className="card-body">
              <div className="card-contact-imgs p-3 mb-3">
                <img src={contact3} alt="" />
              </div>
              <h5 className="fw-normal">EMAIL ADDRESS</h5>
              <p className=" fw-light mb-0">DrAmbedkartrust@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="position-relative mt-5" style={{ height: "120vh" }}>
        <div
          className="bg-img position-absolute w-100 h-100 object-fit-fill"
          style={{
            zIndex: -1,
          }}
        ></div>
        <Row className="justify-content-center align-items-center h-100 shadow p-0">
          <Col md={8} lg={6} xl={5} className="bg-white p-4 shadow shadow w-75">
            <Row>
              <Col md={6} className="p-0">
                <MapContainer
                  center={position}
                  zoom={13}
                  style={{ height: "100%", width: "100%" }}
                >
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                  <Marker position={position}>
                    <Popup>Our Location</Popup>
                  </Marker>
                </MapContainer>
              </Col>
              <Col md={6} className="p-5">
                <h4 className="mb-2 text-start">GET A QUOTE NOW</h4>
                <p className="text-muted text-start fw-light fs-6">
                  We’d love to hear what you have in mind for your project and
                  how we can help out. contact us the from below
                </p>
                <Form onSubmit={formik.handleSubmit}>
                  <Form.Group className="mb-2">
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

                  <Form.Group className="mb-2">
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

                  <Form.Group className="mb-2">
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

                  <Form.Group className="mb-2">
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


import React from "react";
import { contact,contact1,contact3} from "../../../assests";
import "./ContactUs.css";
import {  Row, Col, Form, Button } from "react-bootstrap";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const ContactPage =() => {
  const position = [22.7196, 75.8577]; 
  return (
    <div className="container text-center my-5">
      <h2 className="fw-bold my-4">CONTACT US/JOIN US</h2>
      <p className="mx-auto mb-5 fs-6 w-50 text-center lh-lg">
        Dr. B.R. Ambedkar’s birthplace in Mhow, Madhya Pradesh. Whether you
        wish <br /> to volunteer, donate, or collaborate, your support is invaluable.
      </p>
      <div className="row mt-4">
        <div className="col-md-4 mb-3 position-relative">
          <div className="contact-card shadow border-0 p-4 rounded-4">
            <div className="card-body">
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
        <div className="col-md-4 mb-3 position-relative">
          <div className="contact-card shadow border-0 p-4 rounded-4">
            <div className="card-body">
              <div className=" card-contact-imgs p-3 mb-3">
                <img src={contact1} alt="" />

              </div>
              <h5 className="fw-normal">PHONE NUMBER</h5>
              <p className="fw-light mb-0">91+123-1123-1234</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3 position-relative">
          <div className="contact-card shadow border-0 p-4 rounded-4">
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
      <div className="position-relative" style={{ height: "120vh" }}>
        <div
          className="bg-img position-absolute w-100 h-100 object-fit-fill"
          style={{
            zIndex: -1,
          }}
        ></div>
        <Row className="justify-content-center align-items-center h-100 shadow p-0">
          <Col md={8} lg={6} xl={5} className="bg-white p-4 shadow shadow w-75">
            <Row>
              {/* Map Section */}
              <Col md={6} className="p-0">
                <MapContainer center={position} zoom={13} style={{ height: "100%", width: "100%" }}>
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={position}>
                    <Popup>Our Location</Popup>
                  </Marker>
                </MapContainer>
              </Col>

              {/* Form Section */}
              <Col md={6} className="p-5">
                <h4 className="mb-2 text-start">GET A QUOTE NOW</h4>
                <p className="text-muted text-start fw-light fs-6">
                  We’d love to hear what you have in mind for your project and how we can help out. contact us the from below
                </p>
                <Form>
                  <Form.Group className="mb-2">
                    <Form.Control type="text" placeholder="First name" className="input-contact-fields" />
                  </Form.Group>
                  <Form.Group className="mb-2">
                    <Form.Control type="text" placeholder="Last name" className="input-contact-fields"/>
                  </Form.Group>
                  <Form.Group className="mb-2">
                    <Form.Control type="text" placeholder="Phone Number" className="input-contact-fields"/>
                  </Form.Group>
                  <Form.Group className="mb-2">
                    <Form.Control type="email" placeholder="Email Address" className="input-contact-fields"/>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Location" className="input-contact-fields"/>
                  </Form.Group>
                  <Button variant="primary rounded-0" className="w-100 fw-bold font-monospace">Send</Button>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default  ContactPage ;
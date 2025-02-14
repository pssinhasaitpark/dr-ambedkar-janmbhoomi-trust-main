import React from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import { useFormik } from "formik";
import * as yup from "yup";
import { EnvelopeFill, TelephoneFill, GeoAltFill } from "react-bootstrap-icons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  message: yup.string().required("Message is required"),
});

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: FormSchema,
    onSubmit: (values) => {
      toast.success("Message sent successfully!");
      formik.resetForm();
    },
  });

  return (
    <Container id="contact" className="py-5 rounded-lg border-2">
      <Row className="justify-content-center mb-5">
        <Col xs={12} md={8}>
          <h2 className="text-center mb-4 text-uppercase font-weight-bold">
            Get in Touch
          </h2>
          <p className="text-center text-muted">
            Have a question or want to work together? Leave us a message!
          </p>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col xs={12} md={4} className="mb-4 mb-md-0">
          <Card className="h-100 border-1 rounded shadow-sm bg-dark text-white">
            <Card.Body>
              <h4 className="mb-4 text-primary">Contact Information</h4>

              <div className="d-flex mb-3">
                <EnvelopeFill className="text-primary me-3 fs-5" />
                <div>
                  <h6 className="mb-1">Email</h6>
                  <p className="text-muted mb-0">contact@example.com</p>
                </div>
              </div>

              <div className="d-flex mb-3">
                <TelephoneFill className="text-primary me-3 fs-5" />
                <div>
                  <h6 className="mb-1">Phone</h6>
                  <p className="text-muted mb-0">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="d-flex">
                <GeoAltFill className="text-primary me-3 fs-5" />
                <div>
                  <h6 className="mb-1">Address</h6>
                  <p className="text-muted mb-0">
                    123 Business Street
                    <br />
                    New York, NY 10001
                  </p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={8}>
          <Card className="border-1 rounded shadow-sm bg-dark text-white">
            <Card.Body className="p-4">
              <Form onSubmit={formik.handleSubmit}>
                <Row>
                  <Col xs={12} md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Name *</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="Your name"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        onBlur={formik.handleBlur}
                        className="border-0 shadow-sm rounded"
                      />
                      {formik.errors.name && formik.touched.name && (
                        <div className="text-danger">{formik.errors.name}</div>
                      )}
                    </Form.Group>
                  </Col>

                  <Col xs={12} md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Email *</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Your email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        onBlur={formik.handleBlur}
                        className="border-0 shadow-sm rounded"
                      />
                      {formik.errors.email && formik.touched.email && (
                        <div className="text-danger">{formik.errors.email}</div>
                      )}
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    type="text"
                    name="subject"
                    placeholder="Subject (optional)"
                    value={formik.values.subject}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="border-0 shadow-sm rounded"
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Message *</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    rows={5}
                    placeholder="Your message"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="border-0 shadow-sm rounded"
                  />
                  {formik.errors.message && formik.touched.message && (
                    <div className="text-danger">{formik.errors.message}</div>
                  )}
                </Form.Group>

                <div className="text-center">
                  <Button
                    variant="primary"
                    type="submit"
                    size="lg"
                    className="px-5 py-2 rounded-pill shadow-sm"
                  >
                    Send Message
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;

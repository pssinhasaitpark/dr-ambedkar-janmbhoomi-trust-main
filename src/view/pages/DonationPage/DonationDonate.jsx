import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button, Card, Row, Col } from 'react-bootstrap';
import { useDonates } from '../../hooks/index';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ToastContainer } from "react-toastify";
const phoneRegExp =
  /^(\+?\d{0-9})?\s?-?\s?(\(?\d{7}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

const DonationDonate = () => {
    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        formik.handleSubmit();
      }
    };
  const mutation = useDonates();
  const validationSchema = Yup.object({
    amount: Yup.number().required('Amount is required').positive('Amount must be a positive number'),
    fullName: Yup.string().max(15, "Must be 15 characters or less"),
   email: Yup
       .string()
       .matches(
         /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
         "Invalid email address"
       ),
    phone: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
  });

  const formik = useFormik({
    initialValues: {
      amount: '',
      fullName: '',
      email: '',
      phone: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      mutation.mutate({
        amount: values.amount,
        full_name: values.fullName,
        email: values.email,
        phone: values.phone,
      });
      setTimeout(() => {
        resetForm();
      }, 6000); 
    },
  });
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={10} lg={8}>
          <Card className="shadow-lg border-0 rounded-lg">
            <Card.Header className="bg-gradient text-center py-4" style={{ backgroundColor: '#f8f9fa', borderBottom: '3px solid#0160D8' }}>
              <h3 className="font-weight-bold mb-0" style={{ color: '#2c3e50' }}>Bhim Janmabhoomi, Dr. Bhimrao Ambedkar Memorial Mhow</h3>
              <p className="text-muted mt-2 mb-0">Donation Form</p>
            </Card.Header>

            <Card.Body className="px-4 py-4">
              <Form onSubmit={formik.handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-4">
                      <Form.Label className="fw-bold">Amount:</Form.Label>
                      <Form.Control
                        type="number"
                        name="amount"
                        value={formik.values.amount}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        onKeyPress={handleKeyPress}
                        className="py-2 shadow-sm"
                              placeholder="Enter your Amount"
                        isInvalid={formik.touched.amount && formik.errors.amount}
                        required
                      />
                      <Form.Control.Feedback type="invalid">{formik.errors.amount}</Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-4">
                      <Form.Label className="fw-bold">Full Name:</Form.Label>
                      <Form.Control
                        type="text"
                        name="fullName"
                        value={formik.values.fullName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        onKeyPress={handleKeyPress}
                        className="py-2 shadow-sm"
                        placeholder="Enter your full name"
                        isInvalid={formik.touched.fullName && formik.errors.fullName}
                        required
                      />
                      <Form.Control.Feedback type="invalid">{formik.errors.fullName}</Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-4">
                      <Form.Label className="fw-bold">Email:</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        onKeyPress={handleKeyPress}
                        className="py-2 shadow-sm"
                        placeholder="Enter your email address"
                        isInvalid={formik.touched.email && formik.errors.email}
                        required
                      />
                      <Form.Control.Feedback type="invalid">{formik.errors.email}</Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-4">
                      <Form.Label className="fw-bold">Phone:</Form.Label>
                      <Form.Control
                        type="tel"
                        name="phone"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                                 onKeyPress={handleKeyPress}
                        className="py-2 shadow-sm"
                        placeholder="Enter your phone number"
                        isInvalid={formik.touched.phone && formik.errors.phone}
                        required
                      />
                      <Form.Control.Feedback type="invalid">{formik.errors.phone}</Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <div className="text-center mt-4">
                  <div className="d-grid gap-2 col-md-6 mx-auto">
                    <Button
                      type="submit"
                      className="py-3 fw-bold"
                      style={{
                        backgroundColor: '#0160D8',
                        borderColor: '#0160D8',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      Proceed to pay now
                    </Button>
                  </div>
                  <p className="text-muted mt-3 small">Your donation is eligible for tax deduction under Section 80G</p>
                </div>
              </Form>

           
            </Card.Body>
                  <ToastContainer />
            <Card.Footer className="text-center py-3 bg-light text-muted">
              <small>Secure payment processing • All information is encrypted</small>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DonationDonate;

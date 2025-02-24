import React, { useState } from 'react';
import './Footer.css';
import * as yup from "yup";
import { useFormik } from "formik";
import { Link } from 'react-router-dom';
import FooterBottom from "./FooterBottom.jsx";
import { yt, fb, app, insta } from "../../../../assests/index.js";
import { useSubscribes } from "../../../hooks/index.js";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const { mutate: subscribe, isLoading } = useSubscribes();
  const [subscribed, setSubscribed] = useState(false);

  const quickLinks1 = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "History", path: "/museum" },
    { name: "Books", path: "/book" }
  ];

  const quickLinks2 = [
    { name: "News", path: "/news" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" }
  ];

  const FormSchema = yup.object().shape({
    email: yup
      .string()
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        "Invalid email address"
      ),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: FormSchema,
    onSubmit: (values, { resetForm }) => {
      const subscribeData = { email: values.email };
      subscribe(subscribeData, {
        onSuccess: () => {
          setSubscribed(true);
          resetForm();
        },
        onError: (error) => {
          console.error("Subscription error:", error.message);
        }
      });
    },
  });

  return (
    <>
      <div className="footer bg-dark text-light py-5">
        <div className="p-0 m-0">
          <div className="row m-0 mb-5">
            <div className="col-md-4 footer-section w-25 ms-5 mt-2">
              <span className="ms-4 badge-ambedkar badge bg-primary mb-3">Dr Bhimrao Ambedkar</span>
              <h5 className="mb-4 ms-4 fs-4 lh-base">Bhim Janmabhoomi, Dr. Bhimrao Ambedkar Memorial Mhow</h5>
              <div>
                <h6 className="ms-4 fs-4">Locate us</h6>
                <p className="text-light ms-4 fs-5 lh-lg">
                  Dr. Ambedkar Nagar (Mhow), Indore district, Madhya Pradesh, India
                </p>
              </div>
            </div>

            <div className="col-md-4 footer-section mt-2">
              <div className="quick-links-container">
                <div className="quick-links">
                  <p className="mb-3 fs-4 mt-5 ms-5">Quick Links</p>
                </div>
                <div className="row ms-5">
                  <div className="col-6 p-0 pe-5 right-footer">
                    <div className="ms-5">
                      {quickLinks1.map((link, index) => (
                        <div key={index}>
                          <Link to={link.path} className="text-light text-decoration-none fs-5 lh-lg" onClick={scrollToTop}>
                            {link.name}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-6 ps-4 left-footer">
                    {quickLinks2.map((link, index) => (
                      <div key={index}>
                        <Link to={link.path} className="text-light text-decoration-none fs-5 lh-lg" onClick={scrollToTop}>
                          {link.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 mt-5 footer-section footer-middle">
              <h5 className="mb-3 fs-4 fw-medium mt-2">Sign up for our newsletter</h5>
              <form onSubmit={formik.handleSubmit}>
                <div className="d-flex newsletter-container align-items-center">
                  <input
                    type="email"
                    name="email"
                    className="form-control newsletter-email border rounded-start"
                    placeholder="Enter Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <button
                    type="submit"
                    className="btn btn-primary footer-button px-5 rounded-end text-light fs-5 fw-bolder"
                    disabled={isLoading || !formik.isValid || formik.isSubmitting}
                  >
                    {subscribed ? 'Subscribed' : isLoading ? 'Subscribing...' : 'Subscribe'}
                  </button>
                </div>

                {formik.touched.email && formik.errors.email && (
                  <div className="text-danger">{formik.errors.email}</div>
                )}
              </form>

              <div className="d-flex social-icons-container">
                <Link to="https://web.whatsapp.com/">
                  <img src={app} alt="WhatsApp" className="me-2 footer-icons" />
                </Link>
                <Link to="https://www.facebook.com/">
                  <img src={fb} alt="Facebook" className="me-2 footer-icons" />
                </Link>
                <Link to="https://www.instagram.com/?hl=en">
                  <img src={insta} alt="Instagram" className="me-2 footer-icons" />
                </Link>
                <Link to="https://www.youtube.com/">
                  <img src={yt} alt="YouTube" className="me-2 footer-icons" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterBottom />
    </>
  );
};

export default Footer;

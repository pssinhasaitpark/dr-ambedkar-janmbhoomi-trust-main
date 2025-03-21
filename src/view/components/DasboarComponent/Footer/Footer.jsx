import React, { useState } from "react";
import "./Footer.css";
import { useFormik } from "formik";
import * as yup from "yup";
import { useSubscribes, useSocials } from "../../../hooks/index.js";
// import { yt, fb, app, insta } from "../../../../assests/index.js";
import FooterBottom from "./FooterBottom.jsx";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FiInstagram } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";
const Footer = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const { mutate: subscribe, isLoading } = useSubscribes();
  const [subscribed, setSubscribed] = useState(false);
  const { data: socialLinks, isLoading: socialLoading } = useSocials();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openExternalLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      formik.handleSubmit();
    }
  };

  const quickLinks1 = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "History", path: "/history" },
    { name: "Books", path: "/book" },
  ];

  const quickLinks2 = [
    { name: "News", path: "/news" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
    { name: "Trustee", path: "/trustee" },
  ];

  const FormSchema = yup.object().shape({
    email: yup
      .string()
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        "Invalid email address"
      )
     
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
          setErrorMessage("");
          resetForm();
        },
        onError: (error) => {
          const errorMsg = error?.response?.data?.message?.toLowerCase();
          if (errorMsg?.includes("already subscribed")) {
            setErrorMessage("This email is already subscribed.");
          } else {
            setErrorMessage("Something went wrong. Please try again.");
          }
          resetForm();
        },
      });
    },
  });
  const handleEmailChange = (e) => {
    formik.handleChange(e);
    if (subscribed) {
      setSubscribed(false);
    }
  };
  return (
    <>
      <div className="footer bg-dark text-light py-5">
        <div className="p-0 m-0">
          <div className="row m-0 mb-5">
            <div className="col-md-4 footer-section w-25 ms-5 mt-2 p-0 mx-0 ps-4">
              <span className="ms-4 badge-ambedkar badge bg-primary mb-3">
                Dr Bhimrao Ambedkar
              </span>
              <h2 className="mb-4 ms-4 fs-4 lh-base">
                Bhim Janmabhoomi, Dr. Bhimrao Ambedkar Memorial Mhow
              </h2>
              <div>
                <h3 className="ms-4 fs-4">Locate us</h3>
                <p className="text-light ms-4 fs-5 lh-lg">
                  Dr. Ambedkar Nagar (Mhow), Indore district, Madhya Pradesh,
                  India
                </p>
              </div>
            </div>
            <div className="col-md-4 footer-section mt-2">
              <div className="quick-links-container">
                <div className="quick-links ms-5">
                  <p className="mb-3 fs-4 mt-5 ms-lg-5">Quick Links</p>
                </div>
                <div className="row ms-5">
                  <div className="col-6 p-0 pe-lg-5 right-footer">
                    <div className="ms-lg-5">
                      {quickLinks1.map((link, index) => (
                        <div key={index}>
                          <Link
                            to={link.path}
                            className="text-light text-decoration-none fs-5 lh-lg"
                            onClick={scrollToTop}
                          >
                            {link.name}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-6 ps-lg-4 left-footer">
                    {quickLinks2.map((link, index) => (
                      <div key={index}>
                        <Link
                          to={link.path}
                          className="text-light text-decoration-none fs-5 lh-lg"
                          onClick={scrollToTop}
                        >
                          {link.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-5 footer-section p-lg-0 m-0 p-2">
              <h3 className="mb-3 fs-4 fw-medium mt-3 ps-lg-0 ps-5">
                Sign up for our newsletter
              </h3>

              <form onSubmit={formik.handleSubmit}>
                <div
                  className="d-flex mt-4 "
                  style={{ height: "60px", width: "102%" }}
                >
                  <input
                    type="email"
                    name="email"
                    className="form-control newsletter-email border rounded-start rounded-0"
                    placeholder="Enter Email"
                    value={formik.values.email}
                    onChange={handleEmailChange}
                    onBlur={formik.handleBlur}
                    onKeyPress={handleKeyPress}
                  />
                  <button
                    type="submit"
                    className="btn btn-primary  px-5 text-light fs-4 fw-medium rounded-end rounded-0"
                    disabled={
                      isLoading || !formik.isValid || formik.isSubmitting
                    }
                  >
                    {subscribed
                      ? "Subscribed"
                      : isLoading
                      ? "Subscribing..."
                      : "Subscribe"}
                  </button>
                </div>

                {formik.touched.email && formik.errors.email && (
                  <div className="text-danger">{formik.errors.email}</div>
                )}
                {errorMessage && (
                  <div className="text-danger">{errorMessage}</div>
                )}
              </form>
              <div className="d-flex social-icons-container mt-4">
                {!socialLoading && socialLinks && (
                  <>
                    <Link
                      to="#"
                      onClick={() =>
                        openExternalLink(socialLinks.whatsapp.link)
                      } aria-label="Follow us on WhatsApp"
                    >
                      <div className="icon-container px-2 py-2 rounded-2 bg-light mt-2 me-3">
                        <FaWhatsapp className="fs-2 " />
                      </div>
                    </Link>
                    <Link
                      to="#"
                      onClick={() =>
                        openExternalLink(socialLinks.facebook.link)
                      }
                       aria-label="Follow us on Facebook"
                    >
                      <div className=" icon-container px-2 py-2 rounded-2 bg-light mt-2 me-3">
                        <RiFacebookCircleLine className="fs-2 " />{" "}
                      </div>
                    </Link>
                    <Link
                      to="#"
                      onClick={() =>
                        openExternalLink(socialLinks.instagram.link)
                      }
                        aria-label="Follow us on Instagram"
                    >
                      {" "}
                      <div className=" icon-container px-2 py-2 rounded-2 bg-light mt-2 me-3 ">
                        <FiInstagram className="fs-2 " />
                      </div>
                    </Link>
                    <Link
                      to="#"
                      onClick={() => openExternalLink(socialLinks.youtube.link)}
                        aria-label="Follow us on YouTube"
                    >
                      <div className=" icon-container px-2 py-2 rounded-2 bg-light mt-2 ">
                        <FiYoutube className="fs-2" />
                      </div>
                    </Link>
                  </>
                )}
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

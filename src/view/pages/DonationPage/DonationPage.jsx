

import React from "react";
import {
  donation,
  donationImgs1,
  donationImgs2,
  donationImgs3,
} from "../../../assests/index";
import { Link } from "react-router-dom";
import "./Donation.css";
const DonationPage = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="all-section-width my-4">
      <div className="img-banner ">
        <img src={donation} alt="about-image" className="mb-2 all-image" />
      </div>
      <div className="mt-5 mb-4">
      <div className="d-flex justify-content-between">
      <h2 className="text-uppercase fs-1  p-0 m-0"> Donation and Support</h2>
      <button className="btn btn-primary" ><Link to="/donate" className="text-light fs-4 text-decoration-none">Donate</Link></button></div>
     
       
        <p className="mb-3 fs-5">Dr. Bhimrao Ambedkar</p>
        <p className=" fw-medium  mt-2 paragraph-birth ">
          <span className="fs-3">Donation and Support :</span> Dr. B.R.
          Ambedkar's birthplace in Mhow, Madhya Pradesh, is a historic site that
          symbolizes his enduring legacy of equality, justice, and empowerment.
          To preserve and develop this sacred space, we invite you to contribute
          towards its maintenance and enhancement.
        </p>
        
      </div>
      <div className="border p-4 mb-4">
      <p className="fs-4 p-0 m-0  fw-medium">
          A section dedicated to donations for the maintenance and development
          of the birthplace.
        </p>
        <p className="fs-5 p-0 m-0  fw-medium">
          Your Contributions Will Help:
        </p>
        <div className="">
          <div className="mb-2">
          <p className="fs-5 p-0 m-0 ">
            <span className="me-2">✅</span>
            Restoration & upkeep of the memorial site</p>
          </div>
          <div className="mb-2">
          <p className="fs-5 p-0 m-0 "><span className="me-2">✅</span>
            Development of educational & research facilities
            </p> </div>
          <div className="mb-2">     <p className="fs-5 p-0 m-0 ">
            <span className="me-2">✅</span>
            Promotion of social awareness programs</p>
          </div>
          <div className="mb-2">     <p className="fs-5 p-0 m-0 ">
            <span className="me-2">✅</span>
            Organizing events to spread Dr. Ambedkar's teachings</p>
          </div>
          <div className=" ">
          <p className="fs-5 p-0 m-0  fw-medium">
            <span className="me-2">💙</span>
            Be a Part of This Noble Cause
            </p>
          </div>
        </div>
        <p className="fs-5 p-0 m-0 mb-2">
          Your donation will help future generations learn about Dr. Ambedkar's
          invaluable contributions and continue his mission for a just and
          equitable society.
        </p>

        <div className="mb-3">
          <div className="d-flex justify-content-between overflow-hidden">
            <img
              src={donationImgs1}
              alt="Children"
              className="donationImg img-fluid"
            />
            <img
              src={donationImgs2}
              alt="People"
              className="donationImgs img-fluid"
            />
            <img
              src={donationImgs3}
              alt="Historic "
              className="donationImgs img-fluid"
            />
          </div>
        </div>
      </div>
      <div className="border p-4 mb-4">
      <p className="fs-4 p-0 m-0  fw-medium">Volunteering opportunities.</p>
      <p className="fs-5 p-0 m-0 ">
          Be a part of the movement to preserve and promote the teachings of Dr.
          B.R. Ambedkar by volunteering at his birthplace in Mhow, Madhya
          Pradesh, or in various social initiatives inspired by his vision.
        </p>
   <p className="fs-5 p-0 m-0  fw-medium">
          <strong>Volunteering Opportunities:</strong>
        </p>
        <div className="">
          <div className="mb-2">
          <p className="fs-5 p-0 m-0 ">
            <span className="me-2">✅</span>
            Educational Programs – Teach underprivileged children about
            Ambedkar's philosophy and rights.
            </p>
          </div>
          <div className="mb-2">
          <p className="fs-5 p-0 m-0 ">
            <span className="me-2">✅</span>
            Memorial Maintenance – Help in the upkeep, beautification, and
            promotion of Dr. Ambedkar's birthplace.  </p>
          </div>
          <div className="mb-2">   <p className="fs-5 p-0 m-0 ">
            <span className="me-2">✅</span>
            Awareness Campaigns – Conduct workshops and events on social
            justice, equality, and constitutional rights.  </p>
          </div>
          <div className="mb-2">   <p className="fs-5 p-0 m-0 ">
            <span className="me-2">✅</span>
            Community Service – Work on projects related to Dalit empowerment,
            women's rights, and economic upliftment. </p>
          </div>
          <div className="mb-2"><p className="fs-5 p-0 m-0 ">
            <span className="me-2">✅</span>
            Event Organization – Assist in planning and managing celebrations on
            Ambedkar Jayanti (April 14) and other important days. </p>
          </div>
          <div className="">
          <p className="fs-5 p-0 m-0  fw-medium">
            <span className="me-2">💙</span>
            Join Us & Make an Impact
            </p>
          </div>
        </div>
        <p className="fs-5 p-0 m-0 mb-2">
          Your time and skills can help in spreading Dr. Ambedkar's mission of
          liberty, equality, and fraternity.
        </p>
      </div>
      <div className="border p-4 mb-4">
      <p className="fs-4 p-0 m-0  fw-medium">Support the Legacy of Dr. B.R. Ambedkar</p>
      <p className="fs-5 p-0 m-0 ">
          Dr. B.R. Ambedkar dedicated his life to social justice, equality, and
          empowerment. You can play a vital role in preserving his legacy and
          supporting the development of his birthplace in Mhow, Madhya Pradesh
          by contributing in various ways.
        </p>

        <p className="fs-5 p-0 m-0  fw-medium">
         Ways to Support the Cause:
        </p>

        <div className="mb-3">
        <p className="fs-5 p-0 m-0  fw-medium">
            
            <span className="me-2">📌</span> 1. Donate for Development &
            Maintenance
          </p>
          <p className="fs-5 p-0 m-0 ">Your financial contributions help in:</p>
          <div className="ml-3">
            <div className="mb-2">
            <p className="fs-5 p-0 m-0 ">
              <span className="me-2">✅</span>
              Maintaining and restoring Dr. Ambedkar's birthplace </p>
            </div>
            <div className="mb-2">
            <p className="fs-5 p-0 m-0 ">
              <span className="me-2">✅</span>
              Developing educational and research facilities</p>
            </div>
            <div className="mb-2">  <p className="fs-5 p-0 m-0 ">
              <span className="me-2">✅</span>
              Organizing awareness programs on social justice</p>
            </div>
          </div>
        </div>

        <div className="mb-3 mt-5">
        <p className="fs-5 p-0 m-0  fw-medium">
            <span className="me-2">📢</span> 2. Volunteer Your Time & Skills
          </p>
          <p className="fs-5 p-0 m-0 ">Join as a volunteer to:</p>
          <div className="ml-3">
            <div className="mb-2">     <p className="fs-5 p-0 m-0 ">
              <span className="me-2">✅</span>
              Educate underprivileged communities about Ambedkar's teachings</p>
            </div>
            <div className="mb-2"> <p className="fs-5 p-0 m-0 ">
              <span className="me-2">✅</span>
              Assist in organizing events and awareness programs</p>
            </div>
            <div className="mb-2"> <p className="fs-5 p-0 m-0 ">
              <span className="me-2">✅</span>
              Contribute to social welfare projects for Dalits and marginalized
              groups</p>
            </div>
          </div>
        </div>

     
        <div className="mb-3 mt-5">
        <p className="fs-5 p-0 m-0  fw-medium">
            <span className="me-2">🙌</span> 3. Spread Awareness & Advocate for
            Change
          </p>
          <div className="ml-3">
            <div className="mb-2">  <p className="fs-5 p-0 m-0 ">
              <span className="me-2">🔷</span>
              Share Dr. Ambedkar's vision on social media</p>
            </div>
            <div className="mb-2">  <p className="fs-5 p-0 m-0 ">
              <span className="me-2">🔷</span>
              Organize discussions, workshops, and study groups</p>
            </div>
            <div className="mb-2">  <p className="fs-5 p-0 m-0 ">
              <span className="me-2">🔷</span>
              Support policies and initiatives that promote social justice</p>
            </div>
          </div>
        </div>

       
        <div className="mb-3 mt-5">
        <p className="fs-5 p-0 m-0  fw-medium">
            <span className="me-2">🎓</span> 4. Educate & Empower the Next
            Generation
          </p>
          <div className="ml-3">
            <div className="mb-2">   <p className="fs-5 p-0 m-0 ">
              <span className="me-2">📚</span>
              Sponsor education for students from marginalized communities</p>
            </div>
            <div className="mb-2">   <p className="fs-5 p-0 m-0 ">
              <span className="me-2">🏢</span>
              Support institutions working to promote Ambedkar's philosophy</p>
            </div>
            <div className="">   <p className="fs-5 p-0 m-0 ">
              <span className="me-2">🌟</span>
              Together, Let's Keep His Mission Alive!</p>
            </div>
          </div>
        </div>
        <p className="fs-5 p-0 m-0 mb-2">
          Every effort, big or small, contributes to the vision of an equal and
          just society. Join us in honoring Dr. Ambedkar's legacy!
        </p>
      </div>
      <div className=" text-center">
      <button className="btn btn-primary w-25" onClick={scrollToTop}><Link to="/donate" className="text-light fs-4 text-decoration-none w-50">Donate</Link></button></div>
    </div>

    

  );
};

export default DonationPage;



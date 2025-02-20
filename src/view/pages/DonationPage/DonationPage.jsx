import React from "react";
import {
  donation,
  donationImgs1,
  donationImgs2,
  donationImgs3,
} from "../../../assests/index";
import "./Donation.css";
const DonationPage = () => {
  return (
    <div className="all-section-width my-4">
      <div className="img-banner ">
        <img src={donation} alt="about-image" className="mb-2 all-image" />
      </div>
      <div className="mt-5 mb-4">
        <h2 className="text-uppercase fs-1  "> Donation and Support</h2>
        <p className="mb-3 fs-5">Dr. Bhimrao Ambedkar</p>
        <p className=" fw-medium  mt-2 paragraph-birth ">
          <span className="fs-3">Donation and Support :</span> Dr. B.R.
            Ambedkar's birthplace in Mhow, Madhya Pradesh, is a historic site
            that symbolizes his enduring legacy of equality, justice, and
            empowerment. To preserve and develop this sacred space, we invite
            you to contribute towards its maintenance and enhancement.
        </p>
      </div>
      <div className="border p-4 mb-4">
      <h5 className="fs-4">
          A section dedicated to donations for the maintenance and development
          of the birthplace.
        </h5>
        <p className=" fw-medium  mt-2 paragraph-birth ">
         Your Contributions Will Help:
        </p>
        <div className="mb-3">
          <div className="mb-2">
            <span className="me-2">✅</span>
            Restoration & upkeep of the memorial site
          </div>
          <div className="mb-2">
            <span className="me-2">✅</span>
            Development of educational & research facilities
          </div>
          <div className="mb-2">
            <span className="me-2">✅</span>
            Promotion of social awareness programs
          </div>
          <div className="mb-2">
            <span className="me-2">✅</span>
            Organizing events to spread Dr. Ambedkar's teachings
          </div>
          <div className="mb-2 fw-bold">
            <span className="me-2">💙</span>
            Be a Part of This Noble Cause
          </div>
        </div>
        <p className="mb-4">
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

      {/* Volunteering Opportunities Section */}
      <div className="border p-4 mb-4">
        <h5 className="mb-3">Volunteering opportunities.</h5>
        <p>
          Be a part of the movement to preserve and promote the teachings of Dr.
          B.R. Ambedkar by volunteering at his birthplace in Mhow, Madhya
          Pradesh, or in various social initiatives inspired by his vision.
        </p>
        <p className="mb-2">
          <strong>Volunteering Opportunities:</strong>
        </p>
        <div className="mb-3">
          <div className="mb-2">
            <span className="me-2">✅</span>
            Educational Programs – Teach underprivileged children about
            Ambedkar's philosophy and rights.
          </div>
          <div className="mb-2">
            <span className="me-2">✅</span>
            Memorial Maintenance – Help in the upkeep, beautification, and
            promotion of Dr. Ambedkar's birthplace.
          </div>
          <div className="mb-2">
            <span className="me-2">✅</span>
            Awareness Campaigns – Conduct workshops and events on social
            justice, equality, and constitutional rights.
          </div>
          <div className="mb-2">
            <span className="me-2">✅</span>
            Community Service – Work on projects related to Dalit empowerment,
            women's rights, and economic upliftment.
          </div>
          <div className="mb-2">
            <span className="me-2">✅</span>
            Event Organization – Assist in planning and managing celebrations on
            Ambedkar Jayanti (April 14) and other important days.
          </div>
          <div className="mb-2">
            <span className="me-2">💙</span>
            Join Us & Make an Impact
          </div>
        </div>
        <p>
          Your time and skills can help in spreading Dr. Ambedkar's mission of
          liberty, equality, and fraternity.
        </p>
      </div>

      {/* Support the Legacy Section */}
      <div className="border p-4 mb-4">
        <h5 className="mb-3">Support the Legacy of Dr. B.R. Ambedkar</h5>
        <p>
          Dr. B.R. Ambedkar dedicated his life to social justice, equality, and
          empowerment. You can play a vital role in preserving his legacy and
          supporting the development of his birthplace in Mhow, Madhya Pradesh
          by contributing in various ways.
        </p>

        <p className="mb-2">
          <strong>Ways to Support the Cause:</strong>
        </p>

        <div className="mb-3">
          <p className="mb-1 fw-bold">
            <span className="me-2">📌</span> 1. Donate for Development &
            Maintenance
          </p>
          <p className="mb-2 ml-3">Your financial contributions help in:</p>
          <div className="ml-3">
            <div className="mb-2">
              <span className="me-2">✅</span>
              Maintaining and restoring Dr. Ambedkar's birthplace
            </div>
            <div className="mb-2">
              <span className="me-2">✅</span>
              Developing educational and research facilities
            </div>
            <div className="mb-2">
              <span className="me-2">✅</span>
              Organizing awareness programs on social justice
            </div>
          </div>
        </div>

        <div className="mb-3">
          <p className="mb-1 fw-bold">
            <span className="me-2">📢</span> 2. Volunteer Your Time & Skills
          </p>
          <p className="mb-2 ml-3">Join as a volunteer to:</p>
          <div className="ml-3">
            <div className="mb-2">
              <span className="me-2">✅</span>
              Educate underprivileged communities about Ambedkar's teachings
            </div>
            <div className="mb-2">
              <span className="me-2">✅</span>
              Assist in organizing events and awareness programs
            </div>
            <div className="mb-2">
              <span className="me-2">✅</span>
              Contribute to social welfare projects for Dalits and marginalized
              groups
            </div>
          </div>
        </div>

        <div className="mb-3">
          <p className="mb-1 fw-bold">
            <span className="me-2">🙌</span> 3. Spread Awareness & Advocate for
            Change
          </p>
          <div className="ml-3">
            <div className="mb-2">
              <span className="me-2">🔷</span>
              Share Dr. Ambedkar's vision on social media
            </div>
            <div className="mb-2">
              <span className="me-2">🔷</span>
              Organize discussions, workshops, and study groups
            </div>
            <div className="mb-2">
              <span className="me-2">🔷</span>
              Support policies and initiatives that promote social justice
            </div>
          </div>
        </div>

        <div className="mb-3">
          <p className="mb-1 fw-bold">
            <span className="me-2">🎓</span> 4. Educate & Empower the Next
            Generation
          </p>
          <div className="ml-3">
            <div className="mb-2">
              <span className="me-2">📚</span>
              Sponsor education for students from marginalized communities
            </div>
            <div className="mb-2">
              <span className="me-2">🏢</span>
              Support institutions working to promote Ambedkar's philosophy
            </div>
            <div className="mb-2">
              <span className="me-2">🌟</span>
              Together, Let's Keep His Mission Alive!
            </div>
          </div>
        </div>
        <p>
          Every effort, big or small, contributes to the vision of an equal and
          just society. Join us in honoring Dr. Ambedkar's legacy!
        </p>
      </div>
    </div>
  );
};

export default DonationPage;

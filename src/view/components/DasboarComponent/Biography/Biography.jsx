import React from "react";
import "./Biography.css";


const biographyData = [
  {
    date: "14th April 1891",
    text: "Born at Mahu (Madhya Pradesh), the fourteenth child of Subhedar Ramji Sakpal and Mrs Bhimabai Ambedkar.",
  },
  {
    date: "6 December 1956",
    text: "Three days after completing his final manuscript The Buddha and His Dhamma, Ambedkar died in his sleep on 6 December, 1956, at his home in Delhi.",
  },
  {
    date: "Awards",
    text: "In 1990, B. R. Ambedkar, a social reformer and leader of the Dalits, was posthumously awarded the Bharat Ratna, India's highest civilian award.",
  },
  {
    date: "Achievements",
    text: "B.R. Ambedkar, a key figure in India's history, is best known for his role as the principal architect of the Indian Constitution, his advocacy for social justice, and his efforts to uplift marginalized communities.",
  },
];

const Biography = () => {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-sm-12 ">
          <div className="p-2 border ">
            <div className="row p-2  mt-3 ">
              <div className="col-sm-3 ">
                <h2 className="text-uppercase fw-bold biography-header ms-5 fs-1">Biography</h2>
                <p className="mb-4 ms-5 font-monospace">Dr. Bhimrao Ambedkar<span className=""></span></p>
              </div>
              <div className="col-sm-9 ">
                <p className="fw-bold lh-lg fs-5  biography-head">
                  Dr. Bhimrao Ramji Ambedkar (1891-1956), known as Babasaheb, was a visionary leader, social reformer, and the principal architect of the Indian Constitution, fighting caste discrimination and advocating for the rights of marginalized communities
                </p>
              </div>
            </div>
            <div className="biography-component">
              <ul className="timeline-1 text-black mt-3">
                {biographyData.map((event, index) => (
                  <li className="event" key={index} data-date={event.date}>
                    <p className="biography-text fs-5">{event.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biography;

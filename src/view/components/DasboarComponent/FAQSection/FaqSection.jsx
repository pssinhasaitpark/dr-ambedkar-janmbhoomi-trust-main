import React, { useState } from "react";
import './FaqSection.css'

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      items: [
        {
          question: "Who was Dr. B.R. Ambedkar?",
          answer:
            "Dr. B R Ambedkar and his contributions toward country is of no bound. His contribution towards formation of the constitution and other policies earned him global recognition and admiration.",
        },
        {
          question: "Where was Dr. Ambedkar born?",
          answer:
            "Dr. B R Ambedkar and his contributions toward country is of no bound. His contribution towards formation of the constitution and other policies earned him global recognition and admirationn.",
        },
        {
          question: "What were Dr. Ambedkar’s major contributions?",
          answer:
            "Dr. B R Ambedkar and his contributions toward country is of no bound. His contribution towards formation of the constitution and other policies earned him global recognition and admiration.",
        },
        {
          question:
            "Why is Dr. Ambedkar called the 'Father of the Indian' Constitution?",
          answer:
            "Dr. B R Ambedkar and his contributions toward country is of no bound. His contribution towards formation of the constitution and other policies earned him global recognition and admiration.",
        },
        {
          question: "What is Dr. Ambedkar’s role in social justice?",
          answer:
            "Dr. B R Ambedkar and his contributions toward country is of no bound. His contribution towards formation of the constitution and other policies earned him global recognition and admiration.",
        },
        {
          question: "What were Dr. Ambedkar’s major contributions?",
          answer:
            "Dr. B R Ambedkar and his contributions toward country is of no bound. His contribution towards formation of the constitution and other policies earned him global recognition and admiration.",
        },
        {
          question: "What were Dr. Ambedkar’s major contributions?",
          answer:
            "Dr. B R Ambedkar and his contributions toward country is of no bound. His contribution towards formation of the constitution and other policies earned him global recognition and admiration.",
        },
        {
          question: "Why is Dr. Ambedkar called the Father of the Indian Constitution?",
          answer:
            "Dr. B R Ambedkar and his contributions toward country is of no bound. His contribution towards formation of the constitution and other policies earned him global recognition and admiration.",
        },
        {
          question: "Why is Dr. Ambedkar called the Father of the Indian Constitution?",
          answer:
            "Dr. B R Ambedkar and his contributions toward country is of no bound. His contribution towards formation of the constitution and other policies earned him global recognition and admiration.",
        },
      ],
    },
  ];

  return (
    <div className="Faq-section p-1 mt-5">
      <div className="container my-5 faq-container">
        <h2 className="text-center text-uppercase  fs-1 biography-header p-0 m-0">
          Frequently Asked Questions
        </h2>
        <p className="text-center">Dr. Bhimrao Ambedkar</p>
        {faqs.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-4">
            <h4 className="fw-bold">{section.category}</h4>
            <div className="accordion mt-5">
              {section.items.map((item, index) => {
                const isOpen = openIndex === `${sectionIndex}-${index}`;
                return (
                  <div key={index} className="FAQ-Section">
                    <div className="accordion-item border-bottom border-0 border-1 rounded-0  border-dark ">
                      <h2 className="accordion-header">
                        <button
                          className={`accordion-button fs-3 font-weight-light mt-3 ${
                            isOpen ? "" : "collapsed"
                          }`}
                          type="button"
                          onClick={() => toggleAccordion(`${sectionIndex}-${index}`)}
                        >
                          {item.question}
                        </button>
                      </h2>
                      {isOpen && (
                        <div className="accordion-collapse collapse show">
                          <div className="accordion-body">{item.answer}</div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
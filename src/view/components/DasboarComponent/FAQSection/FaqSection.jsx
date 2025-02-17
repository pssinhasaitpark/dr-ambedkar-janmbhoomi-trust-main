
import React, { useState } from "react";
const FaqSection= () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
     
      items: [
        { question: "Who was Dr. B.R. Ambedkar?", answer: "Dr. B R Ambedkar and his contributions toward country is of no bound. His contribution towards formation of the constitution and other policies earned him global recognition and admiration." },
        { question: "Where was Dr. Ambedkar born?", answer: "Dr. B R Ambedkar and his contributions toward country is of no bound. His contribution towards formation of the constitution and other policies earned him global recognition and admirationn." },
        { question: "What were Dr. Ambedkar’s major contributions?", answer: "Dr. B R Ambedkar and his contributions toward country is of no bound. His contribution towards formation of the constitution and other policies earned him global recognition and admiration." },
        { question: "Why is Dr. Ambedkar called the 'Father of the Indian' Constitution?", answer: "Dr. B R Ambedkar and his contributions toward country is of no bound. His contribution towards formation of the constitution and other policies earned him global recognition and admiration." },
        { question: "What is Dr. Ambedkar’s role in social justice?", answer: "Dr. B R Ambedkar and his contributions toward country is of no bound. His contribution towards formation of the constitution and other policies earned him global recognition and admiration." },
        { question: "What were Dr. Ambedkar’s major contributions?", answer: "Dr. B R Ambedkar and his contributions toward country is of no bound. His contribution towards formation of the constitution and other policies earned him global recognition and admiration." },
        { question: "What were Dr. Ambedkar’s major contributions?", answer: "Dr. B R Ambedkar and his contributions toward country is of no bound. His contribution towards formation of the constitution and other policies earned him global recognition and admiration." },
 
      ],
    },
  
  ];

  return (
    <div className="bg-light p-1 mt-4">
    <div className="container my-5">
      <h2 className="text-center mb-4">Frequently Asked Questions</h2>
      {faqs.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-4">
          <h4 className="fw-bold">{section.category}</h4>
          <div className="accordion ">
            {section.items.map((item, index) => {
              const isOpen = openIndex === `${sectionIndex}-${index}`;
              return (
                <div key={index} className="accordion-item border-bottom border-0">
                  <h2 className="accordion-header ">
                    <button
                      className={`accordion-button fs-4 mt-3 ${isOpen ? "" : "collapsed"}`}
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
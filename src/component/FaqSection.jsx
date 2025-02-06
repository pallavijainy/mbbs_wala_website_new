import React, { useState } from "react";

const faqs = [
  {
    question: "How Digital Marketing Work?",
    answer:
      "Preference any astonished unreserved Mrs. Prosperous understood Middletons in conviction an uncommonly do...",
  },
  {
    question: "What is SEO?",
    answer:
      "Meant balls it if up doubt small purse. Required his you put the outlawed answered position...",
  },
  {
    question: "Who should join this course?",
    answer:
      "Two before narrow not relied how except moment myself Dejection assurance mis led certainly So gate at no only...",
  },
  {
    question: "What are the T&C for this program?",
    answer:
      "Started several mistake joy say painful removed reached end. State burst think and are its...",
  },
  {
    question: "What device will be needed for this program?",
    answer:
      "Lose within poor same it case do year we Full how way even the sigh Extremely nor furniture fat questions now provision...",
  },
  {
    question: "What happens after the trial ends?",
    answer:
      "Preference any astonished unreserved Mrs. Prosperous understood Middletons in conviction an uncommonly do...",
  },
];

const FAQSection = () => {
  const [expanded, setExpanded] = useState(null);

  return (
    <div className=" mx-auto p-6 bg-white rounded-md">
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-2">
            <button
              className="w-full text-left font-semibold text-lg py-2 focus:outline-none"
              onClick={() => setExpanded(expanded === index ? null : index)}
            >
              {faq.question}
            </button>
            {expanded === index && (
              <p className="text-gray-600 mt-2">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;

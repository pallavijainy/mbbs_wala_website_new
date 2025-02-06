import React, { useState } from "react";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      title: "📌 Truly Individualized Counseling",
      description: "15+ years of excellence and unmatched expertise in medical admissions.",
      details: [
        "Receive personalized counseling tailored to your strengths, weaknesses, and ambitions. We'll work closely with you to develop a customized plan for success."
      ]
    },
    {
      title: "📌 Dedicated One-on-One Mentorship",
      description: "Complete support with personalized guidance for every step of admissions.",
      details: [
        "Benefit from the wisdom and experience of a dedicated mentor – an experienced doctor or successful MBBS Wala alumnus – who will guide you every step of the way."
      ]
    },
    {
      title: "📌 Unwavering Support",
      description: "Proven success with top admissions and glowing student testimonials.",
      details: [
        "Our dedicated support team is available to answer your questions, address your concerns, and aid whenever you need it. We're here for you, every step of the journey."
      ]
    },
    {
      title: "📌 24/7 Availability",
      description: "Proven success with top admissions and glowing student testimonials.",
      details: [
        "We understand that your schedule may be demanding. That's why we offer flexible scheduling options and are available to support you even outside of regular business hours."
      ]
    },
    {
      title: "📌 Uncompromising Personalized Attention",
      description: "Proven success with top admissions and glowing student testimonials.",
      details: [
        "We maintain a small counselor-to-student ratio so that you receive the personalized attention and support you need to thrive."
      ]
    },
  ];

  return (
    <div className="space-y-6">
      {faqs.map((item, index) => (
        <div
          key={index}
          className="bg-gray-100 p-3 rounded-lg shadow cursor-pointer"
          onClick={() => toggleAccordion(index)}
        >
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-xl">{item.title}</h3>
            <span className="text-2xl font-bold lg:mt-8">{activeIndex === index ? "−" : "+"}</span>
          </div>
          
          <div
            className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
          >
            <ul className="mt-4 list-disc list-inside text-gray-600">
              {item.details.map((point, i) => (
                <p key={i} className="text-md mt-3">{point}</p>
              ))}
            </ul>
          </div>
        </div>
      ))}
      
      <button className="w-full bg-red-600 text-white p-4 rounded-lg font-semibold hover:bg-blue-800">
        Book a Free Call
      </button>
    </div>
  );
};

export default Accordion;

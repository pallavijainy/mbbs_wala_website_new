import React, { useState } from "react";
import faq from "../assets/faq.jpg";

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const faqs = [
        { question: "What is MBBS Wala, and what do you do?", answer: "MBBS Wala is a leading education consultancy specializing in guiding aspiring medical professionals through the complex journey of NEET preparation and medical school admissions. We offer expert coaching, personalized counseling, and comprehensive support to help you achieve your medical dreams." },
        { question: "How is MBBS Wala different from other counseling services?", answer: "We differentiate ourselves through our personalized approach, experienced team of experts, comprehensive resources, and proven track record of success. We're not just counselors; we're your partners in medical success." },
        { question: "What services do you offer?", answer: "We offer a range of services, including NEET preparation coaching (online and offline), personalized admissions counseling, application assistance, interview preparation, and more. You can find a detailed list of our services on our website." },
        { question: "Do you offer any guarantees?", answer: "We are so confident in our comprehensive program that we offer a conditional guarantee of admission to a medical college. (Conditions apply.)" },
        { question: "What are your fees?", answer: "Our fee structure varies depending on the services you choose. We offer flexible payment plans to make our services accessible. Please contact us for a personalized quote." },
        { question: "How can I contact MBBS Wala?", answer: "You can contact us through our website's contact form, by phone at [phone number], or by email at [email address]. We're also available on social media." },
        { question: "Do you conduct mock tests?", answer: "Yes, we conduct regular mock tests that simulate the actual NEET exam, helping you assess your preparation and identify areas for improvement." },
        { question: "Do you offer personalized doubt-clearing sessions?", answer: "Yes, we offer doubt-clearing sessions with our expert faculty to address your specific questions and concerns." },
        { question: "What kind of support do you provide for medical college applications?", answer: "We provide end-to-end application support, including assistance with college selection, application form filling, document review, personal statement/essay editing, and interview preparation." },
        { question: "How can I enroll in MBBS Wala's programs?", answer: "You can enroll online through our website or by contacting us directly. [Provide clear instructions on how to enroll.]" }
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className="flex flex-col items-center py-10 px-4 md:px-16">
            <div className="w-full max-w-6xl bg-gray-50 rounded-2xl p-6">
                <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
                <p className="text-gray-600 mb-6">Find answers to common queries about our services and support.</p>
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                        <img
                            src={faq}
                            alt="FAQ illustration"
                            className="rounded-lg"
                        />
                    </div>
                    <div className="flex-1">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="border-b border-gray-300 py-3 cursor-pointer"
                                onClick={() => toggleFAQ(index)}
                            >
                                <div className="flex justify-between items-center">
                                    <h3 className="text-gray-700 font-medium">{faq.question}</h3>
                                    <span>{activeIndex === index ? "-" : "+"}</span>
                                </div>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index ? "max-h-40" : "max-h-0"
                                        }`}
                                >
                                    <p className="mt-2 text-gray-600">{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;

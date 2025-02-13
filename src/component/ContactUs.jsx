import React from "react";

const ContactUs = () => {
    return (
        <div className="flex flex-col items-center py-10 px-5 md:px-8 lg:px-16">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2347.2034579334127!2d77.4410328448765!3d23.16979543376425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c43e7057a12df%3A0x8540307b019e9774!2sMBBS%20Wala%20-%20No1%20consultant%20for%20medical%20Admission!5e0!3m2!1sen!2sin!4v1739343965826!5m2!1sen!2sin"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                className="w-full max-w-6xl h-96 mb-8 rounded-2xl border-2 border-gray-300"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <div className="w-full max-w-6xl bg-gray-50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                        <label className="block text-gray-700 mb-2">
                            Full Name*
                        </label>
                        <input
                            type="text"
                            className="w-full p-3 border rounded border-[#00000051] outline-none"
                            placeholder="Your Name"
                        />
                    </div>
                    <div className="">
                        <label className="block text-gray-700 mb-2">
                            Email Address*
                        </label>
                        <input
                            type="email"
                            className="w-full p-3 border rounded border-[#00000051] outline-none"
                            placeholder="Your Email"
                        />
                    </div>
                    <div className="">
                        <label className="block text-gray-700 mb-2">
                            Phone Number*
                        </label>
                        <input
                            type="tel"
                            className="w-full p-3 border rounded border-[#00000051] outline-none"
                            placeholder="Your Phone Number"
                        />
                    </div>
                    <div className="">
                        <label className="block text-gray-700 mb-2">
                            Select Date*
                        </label>
                        <input
                            type="date"
                            className="w-full p-3 border rounded border-[#00000051] outline-none"
                        />
                    </div>
                    <div className="">
                        <label className="block text-gray-700 mb-2">
                            Select Time*
                        </label>
                        <input
                            type="time"
                            className="w-full p-3 border rounded border-[#00000051] outline-none"
                        />
                    </div>
                    <div className=" md:col-span-2">
                        <label className="block text-gray-700 mb-2">
                            Message
                        </label>
                        <textarea
                            className="w-full p-3 border rounded border-[#00000051] outline-none"
                            placeholder="Write your message here..."
                            rows="4"
                        ></textarea>
                    </div>
                    <div className=" md:col-span-2">
                        <button
                            type="submit"
                            className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                        >
                            Send Message →
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialSection = () => {
  const testimonials=[
      {
        "id": 1,
        "name": "Anika Sharma",
        "college": "AIIMS Delhi",
        "review": "MBBS Wala was a LIFESAVER for me. Their expert guidance and personalized support helped me navigate the complex admissions process and get into my dream medical college. I couldn't have done it without them!",
        "rating": 5,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxW2gvtCFH3lQJFmjp3NuoydvBgsFqV04POg&s"
      },
      {
        "id": 2,
        "name": "Rohan Gupta",
        "college": "JIPMER Puducherry",
        "review": "I was struggling with NEET preparation, but MBBS Wala's comprehensive resources and dedicated mentors helped me improve my score significantly. I'm now on my way to becoming a doctor, thanks to their unwavering support!",
        "rating": 4,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxW2gvtCFH3lQJFmjp3NuoydvBgsFqV04POg&s"
      },
      {
        "id": 3,
        "name": "Priya Patel",
        "college": "CMC Vellore",
        "review": "The personalized counseling I received from MBBS Wala was invaluable. They understood my strengths and weaknesses and helped me choose the right medical college for my aspirations. I highly recommend their services!",
        "rating": 5,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxW2gvtCFH3lQJFmjp3NuoydvBgsFqV04POg&s"
      },
      {
        "id": 4,
        "name": "Aditya Singh",
        "college": "Maulana Azad Medical College",
        "review": "MBBS Wala's NEET crash course was instrumental in my success. The instructors were incredibly knowledgeable, and the study materials were top-notch. I felt fully prepared for the exam, and it paid off!",
        "rating": 4,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxW2gvtCFH3lQJFmjp3NuoydvBgsFqV04POg&s"
      },
      {
        "id": 5,
        "name": "Diya Kapoor",
        "college": "Lady Hardinge Medical College",
        "review": "I used MBBS Wala's online platform for NEET preparation, and it was fantastic. The practice tests, mock interviews, and expert feedback were incredibly helpful. I improved my score by over 100 points!",
        "rating": 2,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxW2gvtCFH3lQJFmjp3NuoydvBgsFqV04POg&s"
      },
      {
        "id": 6,
        "name": "Vikram Reddy",
        "college": "Osmania Medical College",
        "review": "I was overwhelmed by the medical college application process, but MBBS Wala made it so much easier. Their counselors guided me through every step, from choosing the right colleges to writing compelling personal statements. I'm so grateful for their help!",
        "rating": 5,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxW2gvtCFH3lQJFmjp3NuoydvBgsFqV04POg&s"
      },
      {
        "id": 7,
        "name": "Neha Joshi",
        "college": "Grant Medical College",
        "review": "MBBS Wala's assistance with my college applications was invaluable. They helped me craft a strong application package that highlighted my strengths and made me stand out from the crowd. I got accepted into multiple top colleges!",
        "rating": 5,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxW2gvtCFH3lQJFmjp3NuoydvBgsFqV04POg&s"
      },
      {
        "id": 8,
        "name": "Aryan Khan",
        "college": "King George's Medical University",
        "review": "The one-on-one mentorship I received from MBBS Wala was life-changing. My mentor was an experienced doctor who provided invaluable advice and support. They helped me stay motivated and focused on my goals.",
        "rating": 3,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxW2gvtCFH3lQJFmjp3NuoydvBgsFqV04POg&s"
      },
      {
        "id": 9,
        "name": "Shreya Mishra",
        "college": "Bangalore Medical College",
        "review": "MBBS Wala's counselors truly care about their students. They were always available to answer my questions and provide encouragement. I felt like they were invested in my success, and that made all the difference.",
        "rating": 5,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxW2gvtCFH3lQJFmjp3NuoydvBgsFqV04POg&s"
      },
      {
        "id": 10,
        "name": "David Lee",
        "college": "Kasturba Medical College (Manipal)",
        "review": "As an NRI student, I was facing many challenges with the Indian medical admissions process. MBBS Wala's expert guidance and support made it possible for me to secure a seat in a reputed medical college. I highly recommend their services to other NRI students.",
        "rating": 4,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxW2gvtCFH3lQJFmjp3NuoydvBgsFqV04POg&s"
      },
      {
        "id": 11,
        "name": "Simran Kaur",
        "college": "Armed Forces Medical College",
        "review": "MBBS Wala's mock interview sessions were incredibly helpful. They gave me the confidence and skills I needed to ace my medical school interviews. I highly recommend them to anyone applying to medical colleges.",
        "rating": 5,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxW2gvtCFH3lQJFmjp3NuoydvBgsFqV04POg&s"
      },
      {
        "id": 12,
        "name": "Rahul Verma",
        "college": "Vardhman Mahavir Medical College",
        "review": "The personalized study plan created by MBBS Wala's experts was exactly what I needed to stay organized and focused during my NEET preparation. It helped me maximize my study time and achieve my target score.",
        "rating": 4,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxW2gvtCFH3lQJFmjp3NuoydvBgsFqV04POg&s"
      },
      {
        "id": 13,
        "name": "Anjali Sharma",
        "college": "Madras Medical College",
        "review": "MBBS Wala's services were incredibly affordable, especially considering the level of support and guidance I received. It was a great investment in my future.",
        "rating": 4,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxW2gvtCFH3lQJFmjp3NuoydvBgsFqV04POg&s"
      }
    ]
  
  

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover:false,
    arrows: false,
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2">
      <div className="mb-12">
        <span className="text-blue-500 font-medium mb-2 block">Testimonial</span>
        <h2 className="text-4xl font-bold mb-4">
          Experiences Shared
          <br />
          by Our Students
        </h2>
        <p className="text-gray-600 mb-6">Our Team Provide 100% Students Satiation From Every Stats.</p>
        <div className="flex justify-evenly items-center gap-7">
          <button className="inline-flex items-center bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
            View All
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <div className="flex justify-center gap-4">
            <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

      </div>

      <div>
        <div>
          <div>
            <Slider {...settings}>
              {testimonials?.map((testimonial) => (
                <div key={testimonial.id} className="p-6 rounded-xl bg-[#F9F9FB]">
                  <div className="text-blue-600 text-4xl mb-4">❝</div>
                  <p className="text-gray-700 mb-6">{testimonial.review}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                        <p className="text-gray-500">{testimonial.college}</p>
                      </div>
                    </div>

                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, index) => (
                        <svg key={index} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>


        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;

import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const TestimonialCard = () => {

  const reviews=[
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
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay:true,
    autoplaySpeed:3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    pauseOnHover:false,
    rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="overflow-hidden">
      <Slider {...settings}>
        {reviews?.map((el) => (
          <div className="max-w-md space-y-5 mt-10">
            <div className=" border-gray-400 border p-5 rounded-3xl relative lg:h-60">
              <div className="absolute -top-4 bg-white left-[45%]">
                <div className="border border-gray-400 rounded-full w-8 h-8 flex justify-center items-center">
                  <FaQuoteLeft color="blue" />
                </div>
              </div>

              <p className="text-xl text-[#808080] p-3 line-clamp-6 overflow-hidden">
                {el.review}
              </p>
            </div>
            <div className="flex justify-center items-center gap-5">
              <div>
                <img
                  src={el.image}
                  alt=""
                  className="w-20 h-20 rounded-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-xl">{el.name}</h1>
                <p className="text-[#808080]">{el.college}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCard;

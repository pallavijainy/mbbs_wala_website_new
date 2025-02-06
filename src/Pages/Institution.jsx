import Card from "../component/Card";
import Navbar from "../layout/Navbar";
import hero_section_girl from "../assets/hero_section_girl.png";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";

const Institution = () => {
  const CollegeList = [
    {
      id: 1,
      badge: "Basic",
      levelColor: "text-red-500",
      title: "AIIMS Delhi",
      description:
        " A top-ranked medical college with a strong reputation for academics, research, and infrastructure.",
      time: "01 hr 12 mins",
      rating: "4.3",
      reviews: "(1,253)",
      teacher: "Jane Cooper",
      teacherimage:
        "https://plus.unsplash.com/premium_vector-1731922571914-9d0161b5e7b7?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      image:
        "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      badge: "Intermediate",
      levelColor: "text-yellow-500",
      title: "MBBS",
      description: "Demo demo demo demo demo demo demo demo demo demo.",
      time: "01 hr 12 mins",
      rating: "3.9",
      reviews: "(823)",
      teacher: "Jenny Wilson",
      teacherimage:
        "https://plus.unsplash.com/premium_vector-1731922571914-9d0161b5e7b7?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      image:
        "https://images.unsplash.com/photo-1592930954854-7d00c87d0cf4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      badge: "Advanced",
      levelColor: "text-green-500",
      title: "MBBS",
      description: "Demo demo demo demo demo demo demo demo demo demo.",
      time: "01 hr 12 mins",
      rating: "4.2",
      reviews: "(1,251)",
      teacher: "Esther Howard",
      teacherimage:
        "https://plus.unsplash.com/premium_vector-1731922571914-9d0161b5e7b7?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      image:
        "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      badge: "Basic",
      levelColor: "text-red-500",
      title: "MBBS",
      description: "Demo demo demo demo demo demo demo demo demo demo.",
      time: "01 hr 12 mins",
      rating: "4.2",
      reviews: "(1,253)",
      teacher: "Esther Howard",
      teacherimage:
        "https://plus.unsplash.com/premium_vector-1731922571914-9d0161b5e7b7?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      image:
        "https://images.unsplash.com/photo-1617135042790-7f8c4ea4d4d8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      badge: "Basic",
      levelColor: "text-red-500",
      title: "AIIMS Delhi",
      description:
        " A top-ranked medical college with a strong reputation for academics, research, and infrastructure.",
      time: "01 hr 12 mins",
      rating: "4.3",
      reviews: "(1,253)",
      teacher: "Jane Cooper",
      teacherimage:
        "https://plus.unsplash.com/premium_vector-1731922571914-9d0161b5e7b7?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      image:
        "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      badge: "Intermediate",
      levelColor: "text-yellow-500",
      title: "MBBS",
      description: "Demo demo demo demo demo demo demo demo demo demo.",
      time: "01 hr 12 mins",
      rating: "3.9",
      reviews: "(823)",
      teacher: "Jenny Wilson",
      teacherimage:
        "https://plus.unsplash.com/premium_vector-1731922571914-9d0161b5e7b7?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      image:
        "https://images.unsplash.com/photo-1592930954854-7d00c87d0cf4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 7,
      badge: "Advanced",
      levelColor: "text-green-500",
      title: "MBBS",
      description: "Demo demo demo demo demo demo demo demo demo demo.",
      time: "01 hr 12 mins",
      rating: "4.2",
      reviews: "(1,251)",
      teacher: "Esther Howard",
      teacherimage:
        "https://plus.unsplash.com/premium_vector-1731922571914-9d0161b5e7b7?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      image:
        "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 8,
      badge: "Basic",
      levelColor: "text-red-500",
      title: "MBBS",
      description: "Demo demo demo demo demo demo demo demo demo demo.",
      time: "01 hr 12 mins",
      rating: "4.2",
      reviews: "(1,253)",
      teacher: "Esther Howard",
      teacherimage:
        "https://plus.unsplash.com/premium_vector-1731922571914-9d0161b5e7b7?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      image:
        "https://images.unsplash.com/photo-1617135042790-7f8c4ea4d4d8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <div>
      <div className="bg-[#002A9A] md:pt-6 rounded-3xl">
        <Navbar color="white" />
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8 p-5 lg:p-10 md:p-20">
          <div className="text-center md:text-right lg:mt-36 ml-0 flex justify-end">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white max-w-80">Best Place To</h1>
          </div>

          <div className="relative flex justify-center">
            <div className="relative w-full max-w-md">
              <img src={hero_section_girl} alt="" className="object-contain w-140 h-140" />
              <img
                src={img1}
                alt=""
                className="absolute lg:block hidden bottom-20 md:bottom-28 -left-6 md:-left-0 w-16 md:w-24"
              />
              <img
                src={img2}
                alt=""
                className="absolute lg:block hidden right-10 md:right-0 top-10 md:top-32 w-16 md:w-24"
              />
              <img src={img3} alt="" className="absolute lg:block hidden top-0 md:left-6 w-16 md:w-24" />
              <img
                src={img4}
                alt=""
                className="absolute lg:block hidden -right-4 md:right-0 bottom-4 md:bottom-14 w-16 md:w-24"
              />

              <h1 className="absolute top-1/2 transform -translate-y-1/2 left-4 md:-left-8 text-5xl md:text-7xl text-white font-bold">
                Find Colleges
              </h1>
            </div>
          </div>

          <div className="text-center md:text-left">
            <p className="text-white text-lg md:text-xl lg:mt-80">
              Choosing the right college is a crucial step in shaping your academic and professional future. We provide
              comprehensive information about top colleges worldwide, helping students make informed decisions based on
              their interests, career goals, and budget.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
        {CollegeList.map((college) => (
          <Card key={college.id} redirect="/institutiondetail" {...college} />
        ))}
      </div>
    </div>
  );
};

export default Institution;

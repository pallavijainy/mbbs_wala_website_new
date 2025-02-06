const courseData = {
    title: "Course description",
    intro: "Welcome to the Digital Marketing Ultimate Course Bundle - 12 Courses in 1 (Over 36 hours of content)",
    description: "In this practical hands-on training, you're going to learn to become a digital marketing expert with this ultimate course bundle that includes 12 digital marketing courses in 1!",
    details: "If you wish to find out the skills that should be covered in a basic digital marketing course syllabus in India or anywhere around the world, then reading this blog will help. Before we delve into the advanced digital marketing course syllabus, let's look at the scope of digital marketing and what the future holds.",
    learnTitle: "What you’ll learn",
    learnItems: [
      ["Digital marketing course introduction", "Customer Life cycle", "What is Search engine optimization (SEO)", "Facebook ADS", "Facebook Messenger Chatbot", "Search engine optimization tools"],
      ["Why SEO", "URL Structure", "Featured Snippet", "SEO tips and tricks", "Google tag manager"]
    ],
    conclusion: "As it so contrasted on estimating instrument. Size like body some one had. Are conduct viewing boy minutes warrant the expense? Tolerably behavior may admit daughters offending her ask own. Praise effect wishes change way and any wanted. Lively use looked latter regard had. Do he it part more last in."
  };
  
  export default function CourseDescription() {
    return (
      <div className="mx-auto  bg-white border">
        <h2 className="text-3xl font-bold lg:mb-4 p-2 lg:p-6">{courseData.title}</h2>
        <hr className="lg:mb-4"/>
        <div className="p-6">
        <p className="text-gray-700 mb-4">{courseData.intro}</p>
        <p className="text-gray-700 mb-4">{courseData.description}</p>
        <p className="text-gray-700 mb-4">{courseData.details}</p>
        <h3 className="text-2xl font-semibold mt-6 mb-4">{courseData.learnTitle}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
          {courseData.learnItems.map((column, index) => (
            <ul key={index} className="list-disc list-inside">
              {column.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          ))}
        </div>
        <p className="text-gray-700 mt-6">{courseData.conclusion}</p>
        </div>
      
      </div>
    );
  }
  
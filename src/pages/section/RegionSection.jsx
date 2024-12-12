// Import necessary modules
import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

function RegionSection() {
  useEffect(() => {
    // Initialize ScrollReveal
    ScrollReveal().reveal(".reveal", {
      origin: "bottom",
      distance: "50px",
      duration: 1000,
      delay: 200,
      reset: false,
    });
  }, []);

  const data = [
    {
      heading: "Develop an Entrepreneurial Mindset",
      summary:
        "Think like an entrepreneur by identifying problems and creating innovative solutions.",
    },
    {
      heading: "Learn Practical Skills",
      summary:
        "Gain hands-on experience in creating business plans and understanding market research.",
    },
    {
      heading: "Participate in Events and Competitions",
      summary:
        "Join hackathons, pitching events, and ideathons to boost your confidence and enhance your thinking.",
    },
    {
      heading: "Gain Leadership Experience",
      summary:
        "Take on leadership roles to build communication, team management, and leadership skills.",
    },
    {
      heading: "Explore Real-World Entrepreneurship",
      summary:
        "Work on projects and interact with startups to experience the life of an entrepreneur.",
    },
  ];

  return (
    <div className="py-20 bg-gradient-to-r from-sky-300 via-sky-100 to-white h-auto">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          Benefits of Joining E-Cell
        </h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white h-auto p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 reveal"
            >
              <div className="flex justify-center items-center w-12 h-12 rounded-full bg-blue-500 text-white font-bold mb-4">
                {index + 1}
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 text-center md:text-left">
                {item.heading}
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed text-center md:text-left">
                {item.summary}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RegionSection;

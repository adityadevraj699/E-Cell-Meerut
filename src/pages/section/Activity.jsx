// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";

function Activity() {
  useEffect(() => {
    // Add ScrollReveal script dynamically
    const script = document.createElement("script");
    script.src = "https://unpkg.com/scrollreveal";
    script.onload = () => {
      const ScrollReveal = window.ScrollReveal;
      ScrollReveal().reveal(".reveal", {
        origin: "bottom",
        distance: "50px",
        duration: 1000,
        delay: 200,
        reset: false, // Animation will not reset on scroll back
      });
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const activities = [
    {
      title: "Interactive Seminars",
      description:
        "Sessions by successful entrepreneurs to provide insights into entrepreneurship.",
    },
    {
      title: "Pitching Competitions",
      description:
        "Showcase innovative solutions and gain exposure to the entrepreneurial world.",
    },
    {
      title: "Mentorship Programs",
      description:
        "Connect with mentors to refine ideas and implement ventures.",
    },
    {
      title: "Networking Opportunities",
      description:
        "Expand your network with industry experts and professionals.",
    },
    {
      title: "Skill Development",
      description:
        "Enhance critical thinking, decision-making, and leadership capabilities.",
    },
  ];

  return (
    <div className="py-16 bg-gradient-to-t from-gray-300 via-gray-100 to-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Activities and Programs
        </h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-white h-auto p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 reveal"
            >
              <div className="flex justify-center items-center w-12 h-12 rounded-full bg-blue-500 text-white font-bold mb-4">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center md:text-left">
                {activity.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed text-center md:text-left">
                {activity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Activity;

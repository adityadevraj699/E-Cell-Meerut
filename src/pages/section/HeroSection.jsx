// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import Background from '../../assets/images/Home_background.jpg';

function HeroSection() {
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

  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative h-screen bg-fixed bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(${Background})`, // Correctly setting the image URL
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 p-8 rounded-lg max-w-4xl text-center reveal">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to E-Cell MIT
          </h1>
          <p className="text-lg md:text-xl mb-4">
            Fostering entrepreneurial thinking and innovation among students,
            empowering them to create impactful ventures while still in college.
          </p>
          <a href="/about" className="inline-block">
            <button className="mt-4 px-6 py-3 bg-sky-500 hover:bg-sky-600 transition duration-300 text-white font-semibold rounded-lg shadow-md">
              Learn More
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

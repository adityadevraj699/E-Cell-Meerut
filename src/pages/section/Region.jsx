import React, { useEffect } from "react";
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { FaArrowDown } from "react-icons/fa"; // Import an arrow icon
import Background from "../../assets/images/Home_background.jpg"; // Adjust the path as necessary
import RegionSection from "./RegionSection";
import Activity from "./Activity";

function Region() {
  useEffect(() => {
    // Initialize AOS for scroll animations
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animation happens only once
    });
  }, []);

  return (
    <div>
      {/* Join E-Cell Section with Smooth Scroll, Background Image, and Full Screen Height */}
      <section
        className="py-16 bg-cover bg-center relative overflow-hidden"
        style={{
          backgroundImage: `url(${Background})`, // Replace with your image URL
          height: "100vh", // Full screen height
          display: "flex", // Use flex to center align
          alignItems: "center", // Center vertically
          justifyContent: "center", // Center horizontally
          backgroundAttachment: "fixed", // Smooth scrolling background
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div> {/* Overlay */}
        <div className="text-center relative z-10">
          <h2
            className="text-4xl font-bold text-sky-500 mb-8"
            data-aos="fade-up" // AOS fade-up effect
          >
            Why Join E-Cell?
          </h2>
          <p
            className="text-lg text-white mb-6 max-w-2xl mx-auto"
            data-aos="fade-up" // AOS fade-up effect
            data-aos-delay="200" // Delay animation
          >
            Joining E-Cell is a gateway to personal and professional growth.
            It allows the students to explore their passion, build essential
            skills, and connect with inspiring individuals. Here is why joining
            E-Cell is worth considering:
          </p>
          {/* Button with scroll functionality */}
          <Link
            to="nextSection" // Target section ID
            smooth={true}
            duration={500}
            className="inline-flex items-center px-6 py-3 bg-sky-500 text-white font-medium text-lg rounded-full shadow-lg hover:bg-sky-600 transition-all duration-300 cursor-pointer"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Learn More <FaArrowDown className="ml-2" />
          </Link>
        </div>
      </section>

      {/* Placeholder for the next section */}
      <section
        id="nextSection"
        className="py-0  text-center"
        style={{ height: "auto" }}
      >
       
        <RegionSection/>
        {/* <Activity/> */}
      </section>
    </div>
  );
}

export default Region;

// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

function Contact() {
  useEffect(() => {
    // ScrollReveal animation for sections
    ScrollReveal().reveal('.contact-section', {
      origin: 'bottom',
      distance: '50px',
      duration: 1000,
      delay: 200,
      reset: true,
    });
    ScrollReveal().reveal('.contact-info', {
      origin: 'left',
      distance: '50px',
      duration: 1000,
      delay: 400,
      reset: true,
    });
    ScrollReveal().reveal('.contact-form', {
      origin: 'right',
      distance: '50px',
      duration: 1000,
      delay: 600,
      reset: true,
    });
  }, []);

  return (
    <div
      className="min-h-screen flex items-center justify-center p-8 bg-fixed bg-cover bg-no-repeat contact-section"
      style={{
        backgroundImage: "url('https://tse4.mm.bing.net/th?id=OIP.5en_aI1pnDe_G2eBHwD-HAAAAA&pid=Api&P=0&h=180')",
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // Smooth scroll effect
        paddingTop: 'calc(50px + 1rem)', // Account for the navbar height
      }}
    >
      <div className="px-5 shadow-2xl rounded-xl w-full max-w-7xl backdrop-blur-xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-8 text-gray-700 pt-10">
          Get in Touch
        </h1>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
          {/* Left Section - Contact Info */}
          <div className="contact-info flex flex-col items-center text-center lg:items-start lg:text-left space-y-6 px-4 py-10 w-full lg:w-1/3 rounded-xl transform hover:scale-105 transition-all duration-300">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-white">Contact Information</h2>
              <p className="text-gray-200 mt-2 text-sm md:text-base">
                We are here to help and answer any questions you might have. Reach out to us!
              </p>
            </div>
            <div className="space-y-4 text-white">
              <div className="flex items-center space-x-4">
                <span className="text-lg md:text-xl">
                  <i className="fas fa-phone"></i>
                </span>
                <p>+123 456 7890</p>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-lg md:text-xl">
                  <i className="fas fa-envelope"></i>
                </span>
                <p>contact@example.com</p>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-lg md:text-xl">
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                <p>123 Main Street, Your City, Your Country</p>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="contact-form p-4 md:p-6 rounded-lg flex items-center justify-center w-full lg:w-2/3 transform hover:scale-105 transition-all duration-300">
            <form className="space-y-4 w-full max-w-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="p-2 md:p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="p-2 md:p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <input
                type="text"
                placeholder="Mobile Number"
                className="p-2 md:p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="text"
                placeholder="Subject"
                className="p-2 md:p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <textarea
                placeholder="Your Message"
                className="p-2 md:p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows="5"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 md:py-3 rounded-lg hover:bg-blue-600 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

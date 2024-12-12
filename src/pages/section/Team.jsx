// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

function Team() {
  useEffect(() => {
    // Initialize ScrollReveal for reveal effect
    ScrollReveal().reveal('.team-member', {
      origin: 'bottom',
      distance: '50px',
      duration: 1000,
      delay: 300,
      reset: false, // Keeps animation from resetting on scroll back
    });
  }, []);

  return (
    <div className="team-section py-16 bg-gray-100 bg-cover bg-fixed bg-center" style={{
      backgroundImage: "url('https://tse1.mm.bing.net/th?id=OIP.zLayYMlSvk-48IuxvlNpMwHaEK&pid=Api&P=0&h=180')", // Replace with your desired image URL
    }}>
      <div className="container mx-auto px-5 text-center relative z-10">
        <h2 className="text-4xl font-bold text-sky-500 mb-10">Meet Our Team</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Leader */}
          <div className="team-member transform hover:scale-105 hover:rotate-3d transition-all duration-700  p-8 rounded-xl ">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.nDqQzawjhtuIf9fdUWFFZAHaHa&pid=Api&P=0&h=180"
              alt="Leader"
              className="w-32 h-32 mx-auto rounded-full mb-4 shadow-lg"
            />
            <h3 className="text-xl font-semibold text-sky-800 mb-2">Leader</h3>
            <p className="text-white">A visionary who guides the team towards success and innovation.</p>
          </div>

          {/* Manager */}
          <div className="team-member transform hover:scale-105 hover:rotate-3d transition-all duration-700  p-8 rounded-xl ">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.nDqQzawjhtuIf9fdUWFFZAHaHa&pid=Api&P=0&h=180"
              alt="Manager"
              className="w-32 h-32 mx-auto rounded-full mb-4 shadow-lg"
            />
            <h3 className="text-xl font-semibold text-sky-800 mb-2">Manager</h3>
            <p className="text-white">Efficiently manages resources, time, and communication to ensure smooth project flow.</p>
          </div>

          {/* Developer */}
          <div className="team-member transform hover:scale-105 hover:rotate-3d transition-all duration-700  p-8 rounded-xl ">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.nDqQzawjhtuIf9fdUWFFZAHaHa&pid=Api&P=0&h=180"
              alt="Developer"
              className="w-32 h-32 mx-auto rounded-full mb-4 shadow-lg"
            />
            <h3 className="text-xl font-semibold text-sky-800 mb-2">Developer</h3>
            <p className="text-white">Crafts and builds the technology to bring ideas to life and make things happen.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;

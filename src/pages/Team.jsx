// eslint-disable-next-line no-unused-vars
import React from 'react';

function Team() {
  const teamMembers = [
    {
      name: 'Rahul',
      position: 'CEO',
      image: 'https://tse3.mm.bing.net/th?id=OIP.2TBlFmTmCrCphzvo4qo-gQHaHa&pid=Api&P=0&h=180',
      instagram: 'https://www.instagram.com',
      linkedin: 'https://www.linkedin.com',
      twitter: 'https://www.twitter.com',
    },
    {
      name: 'Tabish',
      position: 'CTO',
      image: 'https://tse3.mm.bing.net/th?id=OIP.2TBlFmTmCrCphzvo4qo-gQHaHa&pid=Api&P=0&h=180',
      instagram: 'https://www.instagram.com',
      linkedin: 'https://www.linkedin.com',
      twitter: 'https://www.twitter.com',
    },
    {
      name: 'Ajay',
      position: 'Developer',
      image: 'https://tse3.mm.bing.net/th?id=OIP.2TBlFmTmCrCphzvo4qo-gQHaHa&pid=Api&P=0&h=180',
      instagram: 'https://www.instagram.com',
      linkedin: 'https://www.linkedin.com',
      twitter: 'https://www.twitter.com',
    },
    {
      name: 'Rishu',
      position: 'Designer',
      image: 'https://tse3.mm.bing.net/th?id=OIP.2TBlFmTmCrCphzvo4qo-gQHaHa&pid=Api&P=0&h=180',
      instagram: 'https://www.instagram.com',
      linkedin: 'https://www.linkedin.com',
      twitter: 'https://www.twitter.com',
    },
    {
        name: 'Rahul',
        position: 'CEO',
        image: 'https://tse3.mm.bing.net/th?id=OIP.2TBlFmTmCrCphzvo4qo-gQHaHa&pid=Api&P=0&h=180',
        instagram: 'https://www.instagram.com',
        linkedin: 'https://www.linkedin.com',
        twitter: 'https://www.twitter.com',
      },
      {
        name: 'Tabish',
        position: 'CTO',
        image: 'https://tse3.mm.bing.net/th?id=OIP.2TBlFmTmCrCphzvo4qo-gQHaHa&pid=Api&P=0&h=180',
        instagram: 'https://www.instagram.com',
        linkedin: 'https://www.linkedin.com',
        twitter: 'https://www.twitter.com',
      },
      {
        name: 'Ajay',
        position: 'Developer',
        image: 'https://tse3.mm.bing.net/th?id=OIP.2TBlFmTmCrCphzvo4qo-gQHaHa&pid=Api&P=0&h=180',
        instagram: 'https://www.instagram.com',
        linkedin: 'https://www.linkedin.com',
        twitter: 'https://www.twitter.com',
      },
      {
        name: 'Rishu',
        position: 'Designer',
        image: 'https://tse3.mm.bing.net/th?id=OIP.2TBlFmTmCrCphzvo4qo-gQHaHa&pid=Api&P=0&h=180',
        instagram: 'https://www.instagram.com',
        linkedin: 'https://www.linkedin.com',
        twitter: 'https://www.twitter.com',
      },
  ];

  return (
    <div className="relative bg-gradient-to-r from-blue-500 to-indigo-500 py-20">
      {/* Background with Parallax Effect */}
      <div className="absolute inset-0 z-0 bg-cover bg-fixed" style={{ backgroundImage: 'url(https://tse2.mm.bing.net/th?id=OIP.PcX5mOVMNF6P3LafvjBAUQHaE7&pid=Api&P=0&h=180)' }} />
      <div className="relative z-10 container mx-auto px-4">
        <h2 className="text-5xl font-extrabold text-center text-blue-700 mb-12 animate__animated animate__fadeIn">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-tl from-green-200 to-green-400 relative"
            >
              {/* Circular Image with Hover Effects */}
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-40 h-40 rounded-full object-cover mx-auto mt-6 transform group-hover:scale-110 transition-all duration-300"
                />
              
                
              </div>
              {/* Member Details */}
              <div className="p-6 text-center">
              <div className="text-red-500 text-xl font-semibold">{member.name}</div>
                <h3 className="text-xl font-semibold text-gray-600 mb-3">{member.position}</h3>
                {/* Social Media Icons */}
                <div className="flex justify-center gap-6">
                  <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500 transition-all duration-300">
                    <i className="fab fa-instagram text-2xl"></i>
                  </a>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500 transition-all duration-300">
                    <i className="fab fa-linkedin-in text-2xl"></i>
                  </a>
                  <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500 transition-all duration-300">
                    <i className="fab fa-twitter text-2xl"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;

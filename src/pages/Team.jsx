// eslint-disable-next-line no-unused-vars
import React from 'react';

function Team() {
  const teamMembers = [
    {
      name: 'Vanshika Saxena',
      position: 'Co-Ordinator',
      image: 'https://tse3.mm.bing.net/th?id=OIP.LhGcO_gnxGBIqHMR3D4zCAAAAA&pid=Api&P=0&h=180',
      email: 'mailto:vanshika.saxena.cs.2022@mitmeerut.ac.in',
      linkedin: 'https://www.linkedin.com/in/vanshika-saxena-5v?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
    {
      name: 'Rahul Kr. Singh',
      position: 'Head Operator',
      image: 'https://tse3.mm.bing.net/th?id=OIP.EyoxKwoHzZnbWlF3B5O0EwHaFO&pid=Api&P=0&h=180',
      email: 'mailto:rahul.singh.ds.2022@mitmeerut.ac.in',
      linkedin: 'https://linkedin.com/in/rrrahulsingh',
    },
    {
      name: 'Md Tabish Manzer',
      position: 'Social Media Head',
      image: 'https://tse4.mm.bing.net/th?id=OIP.nDdVGtbkY-1CS_BBGPaIKQHaHa&pid=Api&P=0&h=180',
      email: 'mailto:mdtabish.manzer.cs.2022@mitmeerut.ac.in',
      linkedin: 'https://linkedin.com/in/md-tabish-manzer-18aa7b241',
    },
    {
      name: 'Anubhav Raj',
      position: 'Co-Operative Head',
      image: 'https://tse4.mm.bing.net/th?id=OIP.UexoP4Tvd6jJ9WzbK6QhfwHaEK&pid=Api&P=0&h=180',
      email: 'mailto:anubhav.raj.aiml.2022@mitmeerut.ac.in',
      linkedin: 'https://linkedin.com/in/anubhav-raj-537915258',
    },
    {
      name: 'Rishu Kumar',
      position: 'Graphic Head',
      image: 'https://tse4.mm.bing.net/th?id=OIP.hVgph_cSXkho_csoZh6TTwHaJS&pid=Api&P=0&h=180',
      email: 'mailto:rishu.kumar.aiml.2022@mitmeerut.ac.in',
      linkedin: 'https://linkedin.com/in/rishu-kumar-496933227',
    },
    {
      name: 'Ajay Kumar',
      position: 'Web Designing',
      image: 'https://tse4.mm.bing.net/th?id=OIP.66TlKL0IgZ7ehw7tl95UsAHaGW&pid=Api&P=0&h=180',
      email: 'mailto:ajay.kumar.aiml.2022@mitmeerut.ac.in',
      linkedin: 'https://linkedin.com/in/ajay-kumar-429944298',
    },
    {
      name: 'Ayush Raj',
      position: 'Event Manager',
      image: 'https://tse4.mm.bing.net/th?id=OIP.JZoat9gfzikncsOgB0MuMQHaIg&pid=Api&P=0&h=180',
      email: 'mailto:ayush.raj.bpharma.2022@mitmeerut.ac.in',
      linkedin: 'https://linkedin.com/in/ayush-raj-0453a3264',
    },
    {
      name: 'Reshu Sharma',
      position: 'Event Manager',
      image: 'https://tse2.mm.bing.net/th?id=OIP.wDL-A_lXH2fAbz05adCx_AHaEo&pid=Api&P=0&h=180',
      email: 'mailto:reshu.sharma.cs.2022@mitmeerut.ac.in',
      linkedin: 'https://linkedin.com/in/reshu-sharma-1bb377259',
    },
    {
      name: 'Nancy',
      position: 'Event Manager',
      image: 'https://tse3.mm.bing.net/th?id=OIP.X11iwWjyvhrH6ZXerL3OOwHaIy&pid=Api&P=0&h=180',
      email: 'mailto:nancy.aiml.2022@mitmeerut.ac.in',
      linkedin: 'https://linkedin.com/in/nancy-singh-83069b258',
    },
  ];

  return (
    <div className="relative bg-gradient-to-r from-blue-500 to-indigo-500 py-20">
      {/* Background with Parallax Effect */}
      <div className="absolute inset-0 z-0 bg-cover bg-fixed" style={{ backgroundImage: 'url(https://tse2.mm.bing.net/th?id=OIP.PcX5mOVMNF6P3LafvjBAUQHaE7&pid=Api&P=0&h=180)' }} />
      <div className="relative z-10 container mx-auto px-4">
        <h2 className="text-5xl font-extrabold text-center text-blue-700 mb-12 animate__animated animate__fadeIn">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
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
                  <a href={member.email} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500 transition-all duration-300">
                    <i className="fas fa-envelope text-2xl"></i>
                  </a>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500 transition-all duration-300">
                    <i className="fab fa-linkedin-in text-2xl"></i>
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

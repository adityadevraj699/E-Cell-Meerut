// eslint-disable-next-line no-unused-vars
import React from "react";
import mission from '../../assets/images/MIssionImage.jpg'

function Mission() {
  return (
    <div>
      {/* Website History Section */}
      <div
        className="relative bg-fixed bg-cover bg-center py-10"
        style={{
          backgroundImage:
            "url('https://d.newsweek.com/en/full/2219726/new-ideas.jpg')",
        }}
      >
        {/* Overlay Layer */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold text-sky-500 mb-6">
            Mission and Vision
          </h2>
          <p className="text-gray-200 mb-6">
            Founded with the aim of delivering excellence, our journey has been
            remarkable. From a small idea to a leading platform, we have come a
            long way in achieving our goals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-sky-500">Mission</h3>
              <p className="mt-4 text-gray-700">
                Fostering innovation, building entrepreneurial capabilities, and
                empowering students.
              </p>
            </div>
            <img
              src={mission}
              alt="Mission and Vision"
              className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
            <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-sky-500">Vision</h3>
              <p className="mt-4 text-gray-700">
                Bridging the gap between theoretical knowledge and practical
                applications by creating a vibrant ecosystem where students
                develop entrepreneurial mindset and skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mission;

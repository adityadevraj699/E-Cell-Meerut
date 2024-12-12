// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import '../assets/CSS/Gallery.css'; // Add a separate CSS file for styling

function Gallery() {
  const branches = [
    {
      name: "Innovations",
      type: "image",
      items: [
        { src: "https://tse2.mm.bing.net/th?id=OIP.ewRfMU-58Iustx-NiDinuAHaEo&pid=Api&P=0&h=180", alt: "Innovation 2" },
      ],
    },
    {
      name: "Idea Pitches",
      type: "image",
      items: [
        { src: "https://tse3.mm.bing.net/th?id=OIP.ExUMGcgLhnkYGwDJXWDd1QHaF8&pid=Api&P=0&h=180", alt: "Pitch Event 2" },
      ],
    },
    {
      name: "Showcase Videos",
      type: "video",
      items: [
        {
          src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          title: "Idea Pitch Event",
        },
        {
          src: "https://www.youtube.com/embed/3JZ_D3ELwOQ",
          title: "Innovation Showcase",
        },
      ],
    },
  ];

  const [activeBranch, setActiveBranch] = useState("All");
  const [modalContent, setModalContent] = useState(null);

  const filteredItems =
    activeBranch === "All"
      ? branches.flatMap((branch) => branch.items.map((item) => ({ ...item, type: branch.type })))
      : branches
          .filter((branch) => branch.name === activeBranch)
          .flatMap((branch) => branch.items.map((item) => ({ ...item, type: branch.type })));

  const openModal = (item) => {
    setModalContent(item);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <div className="gallery-bg">
      <div className="container mx-auto px-6 py-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-gray-100 tracking-tight pt-5">
          Gallery
          </h2>
          <p className="text-gray-200 mt-4 text-lg">
            Dive into creativity, innovation, and groundbreaking ideas.
          </p>
        </div>

        {/* Filters */}
<div className="flex flex-wrap justify-center gap-2 mb-10">
  {["All", ...branches.map((branch) => branch.name)].map((branch) => (
    <button
      key={branch}
      onClick={() => setActiveBranch(branch)}
      className={`px-4 py-2 rounded-full text-sm font-medium transform transition-all duration-300 ${
        activeBranch === branch
          ? "bg-blue-600 text-white scale-105 shadow-lg"
          : "bg-white text-gray-700 hover:bg-blue-100 hover:text-blue-600"
      }`}
    >
      {branch}
    </button>
  ))}
</div>


        {/* Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              onClick={() => openModal(item)}
              className="group relative cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transform transition-all duration-300 hover:scale-105"
            >
              {item.type === "video" ? (
                <iframe
                  width="100%"
                  height="200"
                  src={item.src}
                  title={item.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="group-hover:opacity-90 transition-opacity duration-300"
                ></iframe>
              ) : (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-lg font-semibold">
                  {item.title || item.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {modalContent && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 shadow-xl transform scale-95 transition-transform duration-300">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 text-2xl"
              >
                &times;
              </button>
              {modalContent.type === "video" ? (
                <iframe
                  width="100%"
                  height="315"
                  src={modalContent.src}
                  title={modalContent.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <img
                  src={modalContent.src}
                  alt={modalContent.alt}
                  className="w-full h-auto rounded-lg"
                />
              )}
              <p className="text-center mt-6 text-xl font-bold text-gray-800">
                {modalContent.title || modalContent.alt}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Gallery;
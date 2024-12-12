// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";

function Media() {
  const [instagramFollowers, setInstagramFollowers] = useState(0);
  const [facebookLikes, setFacebookLikes] = useState(0);
  const [twitterFollowers, setTwitterFollowers] = useState(0);

  // Simulate follower increase animation
  useEffect(() => {
    const revealAndIncrease = () => {
      ScrollReveal().reveal(".media-card", {
        distance: "50px",
        duration: 1000,
        easing: "ease-in-out",
        interval: 200,
        scale: 0.8,
        reset: false,
      });

      const animateFollowers = (setter, maxFollowers) => {
        let count = 0;
        const interval = setInterval(() => {
          if (count >= maxFollowers) {
            clearInterval(interval);
          } else {
            count += 1;
            setter(count);
          }
        }, 30);
      };

      animateFollowers(setInstagramFollowers, 100);
      animateFollowers(setFacebookLikes, 100);
      animateFollowers(setTwitterFollowers, 100);
    };

    revealAndIncrease();
  }, []);

  return (
    <div>
      {/* Instagram Followers Section */}
      <div className="bg-light-green-100 py-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-sky-500 mb-6">
            Our Social Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Instagram */}
            <div className="media-card p-6 flex flex-col items-center justify-center transform hover:scale-105 transition-all">
              <a href="https://www.instagram.com/ecell_mit" target="_blank" rel="noopener noreferrer" className="text-5xl text-light-green-500 relative group">
                <i className="fab fa-instagram"></i>
                <span className="absolute opacity-0 transform translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-sm bg-gradient-to-r from-purple-400 to-pink-500 text-white px-3 py-1 rounded-full top-full mt-2 shadow-lg">
                  @ecell_mit
                </span>
              </a>
              <div className="mt-4">
                <h3 className="text-xl font-semibold">Instagram</h3>
                <p className="text-gray-700">{instagramFollowers}+ Followers</p>
              </div>
            </div>

            {/* Facebook */}
            <div className="media-card p-6 flex flex-col items-center justify-center transform hover:scale-105 transition-all">
              <a href="https://www.facebook.com/ecellmit" target="_blank" rel="noopener noreferrer" className="text-5xl text-blue-500 relative group">
                <i className="fab fa-facebook"></i>
                <span className="absolute opacity-0 transform translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-sm bg-gradient-to-r from-blue-400 to-blue-600 text-white px-3 py-1 rounded-full top-full mt-2 shadow-lg">
                  @ecellmit_fb
                </span>
              </a>
              <div className="mt-4">
                <h3 className="text-xl font-semibold">Facebook</h3>
                <p className="text-gray-700">{facebookLikes}+ Followers</p>
              </div>
            </div>

            {/* Twitter */}
            <div className="media-card p-6 flex flex-col items-center justify-center transform hover:scale-105 transition-all">
              <a href="https://twitter.com/ecellmit" target="_blank" rel="noopener noreferrer" className="text-5xl text-blue-400 relative group">
                <i className="fab fa-twitter"></i>
                <span className="absolute opacity-0 transform translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-sm bg-gradient-to-r from-blue-300 to-blue-500 text-white px-3 py-1 rounded-full top-full mt-2 shadow-lg">
                  @ecellmit_tw
                </span>
              </a>
              <div className="mt-4">
                <h3 className="text-xl font-semibold">Twitter</h3>
                <p className="text-gray-700">{twitterFollowers}+ Followers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Media;

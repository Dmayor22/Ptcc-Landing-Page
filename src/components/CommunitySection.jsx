import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const images = [
  "/images/community1.jpg",
  "/images/community2.jpg",
  "/images/community3.jpg",
  "/images/community4.jpg",
  "/images/community5.jpg",
  "/images/community6.jpg",
  "/images/community7.jpg",
  "/images/community8.jpg",
  "/images/community9.jpg",
  "/images/community10.jpg",
  "/images/community11.jpg",
  "/images/community12.jpg",
];

const CommunitySection = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase leading-tight">
            Bringing <span className="text-orange-500">Community</span> To Your
            <br />
            Neighborhood
          </h2>

          <button className="mt-8 px-8 py-3 border border-orange-500 text-orange-500 rounded-full hover:bg-orange-500 hover:text-white transition">
            Join A Cell Community
            <FontAwesomeIcon icon={faArrowRight} className="text-sm ml-2" />
          </button>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden bg-white shadow-sm">
              <img
                src={image}
                alt={`Community ${index + 1}`}
                className="w-full h-48 object-cover hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const locations = [
  {
    name: "OJODU",
    image: "../../public/images/ojodu.jpg",
  },
  {
    name: "IKORODU",
    image: "../../public/images/ikorodu.jpg",
  },
  {
    name: "YABA",
    image: "../../public/images/yaba.jpg",
  },
];
const ExpressionSection = () => {
  return (
    <section className="bg-white py-7 md:py-25 md:pr-16 md:pl-18.25 px-4 text-center">
      {/* HEADER */}
      <div className="max-w-2xl mx-auto">
        <h2 className="text-5xl md:text-5xl font-bold">
          All Our Ministry <span className="text-red-600">Expressions</span>
        </h2>

        <p className="mt-4 text-[#364153] text-sm md:text-4.5 w-97.5 text-center mx-auto ">
          Join a vibrant community at The Potter’s Center, where believers
          gather to worship God, grow spiritually, and impact lives.
        </p>
      </div>

      {/* IMAGE CARDS */}
      <div className="mt-8 md:mt-12 grid gap-6 md:grid-cols-3">
        {locations.map((location, index) => (
          <div
            key={index}
            className="relative h-72.75 rounded-lg overflow-hidden group"
          >
            {/* IMAGE */}
            <img
              src={location.image}
              alt={location.name}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* TEXT */}
            <div className="absolute bottom-4 left-4">
              <h3 className="text-white font-semibold tracking-wide">
                {location.name}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* BUTTON */}
      <div className="mt-12">
        <button className="border border-[#E23E22] text-[#E23E22] px-6 py-2 rounded-full hover:bg-[#E23E22] hover:text-white transition">
          SEE ALL EXPRESSION
          <FontAwesomeIcon icon={faArrowRight} className="ml-1 text-sm" />
        </button>
      </div>
    </section>
  );
};

export default ExpressionSection;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const PastorSection = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-20">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* LEFT IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center  md:h-136 rounded-[97px]">
          <div
            className="relative  md:w-124.75 rotate-6
            md:h-136 overflow-hidden"
          >
            <div className="absolute inset-0 blur-3xl bg-white/20 rounded-full scale-110"></div>

            <img
              src="../../public/images/senior-pastor.jpg"
              alt="Senior Pastor"
              className="relative w-75 md:w-full -z-10 object-cover "
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full md:w-1/2 max-w-xl ">
          {/* TAG */}
          <span className="bg-[#E23E22] text-white text-xs px-4 py-1 rounded-full uppercase tracking-wide">
            The King Maker
          </span>

          {/* TITLE */}
          <h2 className="mt-4 text-5xl md:text-4xl font-extrabold">
            SENIOR PASTOR
          </h2>

          {/* TEXT */}
          <p className="mt-4 text-[#D1D5DC] text-sm leading-relaxed">
            With deep conviction and genuine care, Pastor Mavis Orji guides our
            church family toward spiritual transformation through God's Word.
            Having served in ministry for more than 20 years, he and his loved
            ones are committed to cultivating a community rooted in Christ's
            love and mercy.
          </p>

          <p className="mt-4 text-[#D1D5DC] text-sm leading-relaxed">
            His mission is beautifully straightforward: helping individuals
            uncover their divine calling and embrace a journey of joyful living
            through faith in Jesus.
          </p>

          {/* BUTTON */}
          <button className="mt-6 border border-red-600 text-red-600 px-6 py-2 rounded-full hover:bg-red-600 hover:text-white transition">
            LEARN MORE
            <FontAwesomeIcon icon={faArrowRight} className="ml-1 text-sm" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PastorSection;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Welcome = () => {
  return (
    <section className="w-full h-94.5 md:h-148.75 md:flex border">
      {/* LEFT SIDE CONTENT*/}
      <div className="w-full h-full md:w-2/3 bg-white flex items-center">
        <div className="w-154.25 px-8 md:px-10 py-12  mx-auto">
          <h1 className="text-4xl md:text-[60px] font-medium leading-tight w-123.5">
            THE <span className="text-red-600">POTTER’S</span> CENTRE
          </h1>

          <p className="hidden md:block mt-4 text-[#364153] text-sm leading-relaxed font-medium">
            We are a community of Christ-like disciples who are purpose-driven,
            passionately ablaze for God, and set for global impact.
          </p>

          <p className="hidden md:block mt-4 text-[#364153] text-sm leading-relaxed font-medium">
            At The Potter’s Centre, every service, every gathering, and every
            encounter is designed to draw you closer to God and connect you to
            people who will walk alongside you. We believe that the local church
            is God’s greatest vehicle for transformation.
          </p>

          <p className="hidden md:block mt-4 text-[#364153] text-sm font-medium">
            Come as you are. Grow into who you were made to be.
          </p>

          {/* Mobile Text */}
          <p className="md:hidden mt-4 text-gray-700 text-sm leading-relaxed font-medium">
            Join a vibrant community at The Potter’s Center, where believers
            gather to worship God, grow spiritually, and impact lives. Together,
            we build meaningful relationships, strengthen our faith through the
            Word, and serve our communities with love living out the message of
            Christ and making a difference in our neighborhoods and beyond.
          </p>

          <div className="mt-6 flex gap-4">
            <button className="bg-[#E23E22] text-white px-6 py-2 rounded-full hover:text-white cursor-pointer">
              SCHEDULE A VISIT
            </button>

            <button className="border border-red-600 text-red-600 px-6 py-2 rounded-full hover:bg-red-600 hover:text-white transition cursor-pointer">
              EXPLORE MORE
              <FontAwesomeIcon icon={faArrowRight} className="ml-1 text-sm" />
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="hidden md:block md:w-1/2 md:h-148.75">
        <img
          src="/images/welcome-image.jpg"
          alt="Church audience"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Welcome;

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const UpcomingEvent = () => {
  const targetDate = new Date("2026-06-15T08:00:00");

  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        return;
      }

      const time = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hrs: Math.floor((difference / (1000 * 60 * 60)) % 24),
        mins: Math.floor((difference / (1000 * 60)) % 60),
        secs: Math.floor((difference / 1000) % 60),
      };

      setTimeLeft(time);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gray-100 py-7.5 px-4 md:px-16 text-center">
      {/* HEADER */}
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold">
          Upcoming <span className="text-red-600">Event</span>
        </h2>
        <p className="mt-4 text-gray-600 text-sm">
          Join a vibrant community at The Potter's Center, where believers
          gather to worship God, grow spiritually, and impact lives.
        </p>
      </div>

      {/* EVENT CARD */}
      <div className="mt-10 relative h-70 md:h-80 rounded-lg overflow-hidden">
        {/* IMAGE */}
        <img
          src="../../public/images/event.jpg"
          alt="Event"
          className="w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* CONTENT */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
          <span className="hidden md:block bg-red-600 text-xs px-3 py-1 rounded-full mb-3">
            Women
          </span>

          {/* TITLE */}
          <h3 className="text-lg md:text-2xl font-bold">
            Mothers & Daughter Prayer Conference
          </h3>

          {/* DATE */}
          <div className="flex items-center juster-cneter gap-3">
            <p className="text-gray-300 text-sm mt-2">
              <FontAwesomeIcon icon={faCalendar} className="text-sm mr-2" />
              JUNE 15 7:00PM
            </p>
            <p className="text-gray-300 text-sm mt-2">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-sm mr-2" />
              PTCC Auditorium
            </p>
          </div>

          {/* BUTTON */}
          <button className="mt-4 bg-red-600 px-4 py-1 rounded text-sm hover:bg-red-700">
            Countdown to Program
          </button>

          {/* COUNTDOWN */}
          <div className="flex gap-4 mt-6 text-center">
            <div>
              <p className="text-2xl md:text-3xl font-bold">
                {timeLeft.days || "00"} :
              </p>
              <span className="text-xs text-gray-300">Days</span>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold">
                {timeLeft.hrs || "00"} :
              </p>
              <span className="text-xs text-gray-300">Hrs</span>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold">
                {timeLeft.mins || "00"} :
              </p>
              <span className="text-xs text-gray-300">Mins</span>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold">
                {timeLeft.secs || "00"}
              </p>
              <span className="text-xs text-gray-300">Sec</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvent;

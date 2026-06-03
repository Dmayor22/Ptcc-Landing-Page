import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

// variables for service schedules
const services = [
  {
    title: "Tuesdays",
    time: "6:00 PM",
    desc: "Wisdom & Power Night",
    image: "../../public/images/tuesday.jpg",
  },
  {
    title: "Sundays",
    time: "8:00 AM & 10:00 AM",
    desc: "Worship Service",
    image: "../../public/images/sunday.jpg",
  },
  {
    title: "Last Fridays",
    time: "10:00 PM",
    desc: "Supernatural Night",
    image: "../../public/images/friday.jpg",
  },
];

const WorshipSection = () => {
  return (
    <section className="bg-black text-white py-10.5 md:py-20 w-full px-4 md:pl-18.25 md:pr-8">
      {/* HEADER */}
      <div className="text-center mx-auto max-w-2xl">
        <h2 className="text-5xl md:text-4xl font-medium">WORSHIP WITH US!</h2>
        <p className="mt-4 text-[#D1D5DC] text-md">
          Every gathering at The Potter's Centre is a divine appointment.
        </p>
      </div>

      {/* CARDS */}
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative h-100 rounded-lg overflow-hidden group"
          >
            {/* IMAGE */}
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* CONTENT */}
            <div className="absolute bottom-0 p-6 w-68">
              <h3 className="text-xl font-bold w-full">{service.title}</h3>

              <div className="flex items-center text-red-500 text-sm mt-2">
                <span className="mr-2">
                  <FontAwesomeIcon icon={faClock} className="mr-1" />
                </span>
                {service.time}
              </div>

              <p className="text-gray-300 text-sm mt-2">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorshipSection;

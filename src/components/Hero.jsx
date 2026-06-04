import React, { useState } from "react";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faTimes } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  const videoRef = useRef(null);
  const [videoAction, setVideoAction] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // function to handle video background play when user clicks on play button
  const handleToggle = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setVideoAction(true);
    } else {
      videoRef.current.pause();
      setVideoAction(false);
    }
  };

  return (
    <div className="relative h-127.5 md:h-186.75 w-full overflow-hidden">
      {/* NAVBAR */}
      <nav className="absolute top-0 md:top-3.5 left-0 w-full z-20 flex items-center justify-between px-6 md:px-12 py-4 text-white bg-black/70 md:bg-transparent ">
        {/* Potter's Logo */}
        <img
          src="/images/Potter-logo.png"
          alt="Potter's Logo"
          className="h-10.25 w-30.5"
        />

        {/* MENU-LIST */}
        <ul className="hidden md:flex gap-7 text-sm font-medium">
          <li className="hover:text-gray-300 cursor-pointer">ABOUT</li>
          <li className="hover:text-gray-300 cursor-pointer">RESOURCES</li>
          <li className="hover:text-gray-300 cursor-pointer">EXPRESSION</li>
          <li className="hover:text-gray-300 cursor-pointer">ACADEMY</li>
          <li className="hover:text-gray-300 cursor-pointer">LOVE CELL</li>
          <li className="hover:text-gray-300 cursor-pointer">MINISTRIES</li>
        </ul>

        {/* Menu bar */}
        <img
          src="/images/menu.png"
          alt="Menu"
          className="md:hidden"
          onClick={() => setIsMenuOpen(true)}
        />

        {/* RIGHT BUTTON */}
        <button className="hidden md:block bg-[#E23E22] hover:bg-[#c12e19] px-6 py-3 rounded-full text-sm font-semibold text-center transition">
          GIVE
        </button>
      </nav>

      {/* VIDEO */}
      <video
        ref={videoRef}
        onEnded={() => setVideoAction(false)}
        className="hidden md:block absolute inset-0 w-full h-full object-cover"
        src="/videos/IMG_6540.mp4"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="hidden absolute inset-0 z-10 md:flex flex-col items-center justify-center text-white text-center px-4">
        {/* Pause / play button baased on user action */}
        <button
          onClick={handleToggle}
          className="mb-6 flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/30 transition"
        >
          <FontAwesomeIcon
            icon={videoAction ? faPause : faPlay}
            className={`text-white text-[1.6rem] ${videoAction ? "" : "ml-1"}`}
          />
        </button>

        {/* HEADING */}
        <h1 className="text-3xl md:text-6xl font-bold tracking-wide">
          RAISING VESSELS UNTO HONOUR
        </h1>

        {/* BUTTONS */}
        <div className="mt-6 flex gap-4 flex-wrap justify-center">
          <button className="bg-[#E23E22] hover:bg-[#c12e19] px-6 py-3 rounded-full text-sm font-semibold text-center transition">
            FIRST TIME VISITOR
          </button>

          <button className="border border-white px-6 py-3 rounded-full text-sm hover:bg-white hover:text-black transition font-semibold">
            <FontAwesomeIcon icon={faPlay} className="text-sm mr-2" />
            JOIN US ONLINE
          </button>
        </div>
      </div>

      {/* mobile design start */}
      {/* Mobile Menu */}
      <img
        src="../../public/images/mobile-pastor.jpg"
        alt="hero-image"
        className="md:hidden absolute w-full h-full object-cover inset-0"
      />

      <div
        className={`fixed top-0 right-0 h-125.75 w-57.75 bg-[#313131]/90 z-50 transform transition-transform duration-300 rounded-2xl text-white ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <div className="flex justify-end p-4">
          <button onClick={() => setIsMenuOpen(false)}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        {/* mobile menu logo */}
        <img
          src="/images/Potter-logo.png"
          alt="Potter's Logo"
          className="h-10.25 w-30.5 ml-6"
        />
        {/* Menu Items */}
        <ul className="flex flex-col gap-6 p-6 text-white">
          <li className="hover:text-gray-300 cursor-pointer">ABOUT</li>
          <li className="hover:text-gray-300 cursor-pointer">RESOURCES</li>
          <li className="hover:text-gray-300 cursor-pointer">EXPRESSION</li>
          <li className="hover:text-gray-300 cursor-pointer">ACADEMY</li>
          <li className="hover:text-gray-300 cursor-pointer">LOVE CELL</li>
          <li className="hover:text-gray-300 cursor-pointer">MINISTRIES</li>
        </ul>

        {/* RIGHT BUTTON */}
        <button className="ml-6 bg-[#E23E22] hover:bg-[#c12e19] px-6 py-3 rounded-full text-sm font-semibold text-center transition">
          GIVE
        </button>
      </div>
    </div>
  );
};

export default Hero;

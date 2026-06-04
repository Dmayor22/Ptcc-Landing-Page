import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Logo */}
          <div>
            <img src="/images/logo.png" alt="Logo" className="w-24 mb-4" />

            <p className="text-sm">Raising vessels unto Honour</p>

            <div className="flex gap-4 mt-8">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>

              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>

              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>

              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-5">Quick Links</h3>

            <ul className="space-y-3">
              <li>About</li>
              <li>Academy</li>
              <li>Community</li>
              <li>Events</li>
              <li>Give</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Ministries */}
          <div>
            <h3 className="text-white font-semibold mb-5">Ministries</h3>

            <ul className="space-y-3">
              <li>Kids</li>
              <li>Teens</li>
              <li>The Forge</li>
              <li>The Potter's Center</li>
            </ul>
          </div>


          <div>
            <h3 className="text-white font-semibold mb-5">Resources</h3>

            <ul className="space-y-3">
              <li>First Time Guest</li>
              <li>Testimony</li>
              <li>Counselling</li>
              <li>Devotional</li>
              <li>Baptism</li>
              <li>Podcast</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between text-sm">
          <p>© 2026 The Potter's Centre. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0 justify-between">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

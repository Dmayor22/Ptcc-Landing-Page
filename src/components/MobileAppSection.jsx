import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlay, faApple } from "@fortawesome/free-brands-svg-icons";

const MobileAppSection = () => {
  return (
    <section className="bg-[#e53917] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pb-0 pt-20">
        <div className="grid lg:grid-cols-2 items-center gap-10">
          {/* Content */}
          <div className="text-white">
            <h2 className="text-4xl lg:text-5xl font-bold uppercase mb-6">
              Connect From Anywhere
            </h2>

            <p className="max-w-lg text-sm md:text-base text-white/90">
              Remain engaged with our church family, stream worship services,
              contribute financially, sign up for gatherings, and much more —
              right from your smartphone or tablet.
            </p>

            <div className="flex gap-4 mt-8 flex-wrap">
              <button className="bg-black text-white px-5 py-3 rounded-lg flex items-center gap-3 cursor-pointer">
                <FontAwesomeIcon icon={faGooglePlay} size="lg" />
                <div className="text-left">
                  <p className="text-xs">GET IT ON</p>
                  <p className="font-semibold">Google Play</p>
                </div>
              </button>

              <button className="bg-black text-white px-5 py-3 rounded-lg flex items-center gap-3 cursor-pointer">
                <FontAwesomeIcon icon={faApple} size="lg" />
                <div className="text-left">
                  <p className="text-xs">Download on the</p>
                  <p className="font-semibold">App Store</p>
                </div>
              </button>
            </div>
          </div>

          {/* Phone Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/images/mobile-app.png"
              alt="Mobile App"
              className="w-115 md:w-[320px] lg:w-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppSection;

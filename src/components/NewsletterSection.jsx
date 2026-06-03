import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";

const NewsletterSection = () => {
  return (
    <section className="bg-linear-to-b from-[#f3eefb] to-[#e7ddff] py-24">
      <div className="max-w-4xl mx-auto text-center px-6">
        <div className="flex justify-center mb-5">
          <div className="bg-white p-4 rounded-xl shadow">
            <FontAwesomeIcon
              icon={faEnvelopeOpen}
              className="text-[#e53917]"
              size="lg"
            />
          </div>
        </div>

        <h2 className="text-4xl font-black">
          Subscribe to our <span className="text-[#e53917]">Newsletter</span>
        </h2>

        <p className="text-gray-500 mt-3 max-w-xl mx-auto">
          Get weekly updates on community events, inspiring stories,
          devotionals, and everything happening around us.
        </p>

        <form className="max-w-xl mx-auto mt-10 flex flex-col sm:flex-row">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-6 py-4 rounded-l-full outline-none bg-white"
          />

          <button className="bg-[#e53917] text-white px-8 py-4 rounded-r-full font-semibold cursor-pointer">
            SUBSCRIBE
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;

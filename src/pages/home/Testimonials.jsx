/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className="section-container">
      <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
        <div className="md:w-1/2">
          <img
            src="https://cdn.prod.website-files.com/65ddb1e27e87dceca9815279/65e073119c61a0d22e5c5b47_Map-webp.webp"
            alt=""
          />
        </div>
        <div className="md:w-1/2">
          <div className="text-left md:w-4/5">
            <p className="subtitle"></p>
            <h2 className="title">Our Presence</h2>
            <blockquote className="my-5 text-secondary leading-[30px]"></blockquote>

            {/* avater */}

            <div className="flex flex-wrap items-center gap-4">
              <div className="-space-x-6 avatar-group rtl:space-x-reverse">
                <div className="avatar">
                  <div className="w-12 cursor-pointer"></div>
                </div>
                <div className="avatar">
                  <div className="w-12 cursor-pointer"></div>
                </div>
                <div className="avatar">
                  <div className="w-12 cursor-pointer"></div>
                </div>
              </div>

              <div className="space-y-1">
                <h5 className="text-lg font-semibold"></h5>
                <div className="flex items-center gap-2">
                  <span className="font-medium"></span>{" "}
                  <span className="text-[#807E7E]"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

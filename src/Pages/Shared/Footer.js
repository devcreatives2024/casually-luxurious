import React from "react";
import { BsArrowRight, BsArrowUp } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-full mt-8 border-t border-[#EBEBEB] px-8">
      <a
        href="#"
        className="flex items-center justify-end gap-1 text-[9.5px] font-medium uppercase py-6 text-right"
      >
        BACK TO TOP <BsArrowUp className="text-sm" />
      </a>
      <div className="flex lg:flex-row flex-col justify-between py-11">
        <div className="w-full">
          <div className="border-b border-gray-300 text-gray-500 flex justify-between lg:w-7/12 pb-1">
            <input
              type="text"
              placeholder="YOUR EMAIL"
              className="focus:outline-none placeholder:text-[10.5px] placeholder:text-gray-600"
            />
            <BsArrowRight className="text-sm" />
          </div>
        </div>
        <div className="w-full">
          <ul className="flex lg:flex-row flex-col gap-4 mt-10 lg:mt-0 text-center lg:text-left lg:justify-end text-[10.5px] font-medium uppercase">
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Legal</a>
            </li>
            <li>
              <a href="#">Press</a>
            </li>
            <li>
              <a href="#">Journal</a>
            </li>
            <li>
              <a href="#">Site Map</a>
            </li>
            <li>
              <a href="#">Social</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

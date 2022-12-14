import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { RiSearchLine } from "react-icons/ri";

const Nav = () => {
  const [nav, setNav] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });
  return (
    <div className="pb-16">
      <div
        className={`fixed lg:hidden w-full bg-white z-50 bg-opacity-90 duration-700 py-4 px-5 border-b ${
          nav ? "" : "bg-opacity-0 border-b-0"
        }`}
      >
        <div className="flex items-center">
          <AiOutlineMenu className="text-xl" />
          <div className="w-full">
            <h1 className="uppercase text-center">
              Casually Luxurious
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <RiSearchLine />
            <BsBag />
          </div>
        </div>
      </div>
      <div
        className={`fixed hidden lg:block w-full bg-white z-50 bg-opacity-90 duration-700 pt-6 px-5 ${
          nav ? "" : "bg-opacity-0"
        }`}
      >
        <div className="flex items-center w-full">
          <div className="w-full">
            <ul className="flex text-[9.5px] font-medium uppercase">
              <li className="pr-3">
                <a
                  href="#"
                  className="hover:border-b border-[#606060] pb-[1px]"
                >
                  Shop The Collection
                </a>
              </li>
              <li className="px-3">
                <a
                  href="#"
                  className="hover:border-b border-[#606060] pb-[1px]"
                >
                  21 Years
                </a>
              </li>
              <li className="px-3">
                <a
                  href="#"
                  className="hover:border-b border-[#606060] pb-[1px]"
                >
                  The School Of Making
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full">
            <h1 className="text-xl uppercase font-medium text-center">
              Casually Luxurious
            </h1>
          </div>
          <div className="w-full flex justify-end">
            <ul className="flex text-[9.5px] font-medium uppercase">
              <li className="px-3 border-r border-[#606060]">
                <a
                  className="hover:border-b border-[#606060] pb-[1px]"
                  href="#"
                >
                  ABOUT SUSTAINABLE DESIGN
                </a>
              </li>
              <li className="px-3 border-r border-[#606060]">
                <a
                  className="hover:border-b border-[#606060] pb-[1px]"
                  href="#"
                >
                  Account
                </a>
              </li>
              <li className="px-3 border-r border-[#606060]">
                <a
                  className="hover:border-b border-[#606060] pb-[1px]"
                  href="#"
                >
                  Wishlist (0)
                </a>
              </li>
              <li className="px-3 border-r border-[#606060]">
                <a
                  className="hover:border-b border-[#606060] pb-[1px]"
                  href="#"
                >
                  Search
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full flex justify-end">
          <a
            href="#"
            className="text-[9.5px] mt-5 uppercase hover:border-b border-[#606060] pb-[1px]"
          >
            My Bag (0)
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;

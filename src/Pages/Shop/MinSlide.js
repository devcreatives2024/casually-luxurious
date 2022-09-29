import React, { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const MinSlide = ({ products }) => {
  const [tabs, setTabs] = useState(1);
  const handleTabs = (value) => {
    setTabs(tabs === value ? value : value);
  };
  return (
    <div className="hidden lg:block">
      <ul className="lg:flex grid grid-cols-2 justify-items-center justify-center gap-4 text-[10.5px] uppercase">
        <li>
          <a
            className={`cursor-pointer ${tabs === 1 && "underline"}`}
            onClick={() => handleTabs(1)}
          >
            Releted Products
          </a>
        </li>
        <li>
          <a
            className={`cursor-pointer ${tabs === 2 && "underline"}`}
            onClick={() => handleTabs(2)}
          >
            Recent Products
          </a>
        </li>
        <li className="col-span-2">
          <a
            className={`cursor-pointer ${tabs === 3 && "underline"}`}
            onClick={() => handleTabs(3)}
          >
            More In This Material
          </a>
        </li>
      </ul>
      {/* slider  */}
      <div className="h-80 flex relative">
        <div
          className={`absolute flex gap-5 duration-300 justify-center mt-5 ${
            (tabs === 1 && "left-[50%] translate-x-[-50%]") ||
            (tabs === 2 && "left-[4.5%]") ||
            (tabs === 3 && "left-[-26.5%]")
          }`}
        >
          {products?.slice(0, 2).map((product) => (
            <>
              <div>
                <div
                  className={`h-full w-full bg-white bg-opacity-30 absolute top-0 left-0 ${
                    tabs === 1 && "hidden"
                  }`}
                ></div>
                <img src={product?.img} className="w-40 h-56" alt="" />
                <p className="text-xs pt-4 font-medium">{product?.name}</p>
                <p className="text-[10.5px] pt-1 font-medium">
                  ${product?.price}.00
                </p>
              </div>
            </>
          ))}
        </div>
        <div>
          <BsArrowRight
            onClick={() => handleTabs(2)}
            className={`absolute cursor-pointer right-28 text-2xl z-10 text-gray-500 bottom-20 ${
              tabs === 1 ? "" : "hidden"
            }`}
          />
          <BsArrowRight
            onClick={() => handleTabs(3)}
            className={`absolute cursor-pointer right-28 text-2xl z-10 text-gray-500 bottom-20 ${
              tabs === 2 ? "" : "hidden"
            }`}
          />
          <BsArrowLeft
            onClick={() => handleTabs(1)}
            className={`absolute cursor-pointer left-28 text-2xl z-10 text-gray-500 bottom-20 ${
              tabs === 2 ? "" : "hidden"
            }`}
          />
          <BsArrowLeft
            onClick={() => handleTabs(2)}
            className={`absolute cursor-pointer left-28 text-2xl z-10 text-gray-500 bottom-20 ${
              tabs === 3 ? "" : "hidden"
            }`}
          />
        </div>
        <div
          className={`absolute flex gap-5 duration-300 justify-center mt-5 ${
            (tabs === 1 && "right-[4.5%]") ||
            (tabs === 2 && "left-[50%] translate-x-[-50%]") ||
            (tabs === 3 && "left-[4.5%]")
          }`}
        >
          {products?.slice(2, 4).map((product) => (
            <>
              <div>
                <div
                  className={`h-full w-full bg-white bg-opacity-30 absolute top-0 left-0 ${
                    tabs === 2 && "hidden"
                  }`}
                ></div>
                <img src={product?.img} className="w-40 h-56" alt="" />
                <p className="text-xs pt-4 font-medium">{product?.name}</p>
                <p className="text-[10.5px] pt-1 font-medium">
                  ${product?.price}.00
                </p>
              </div>
            </>
          ))}
        </div>
        <div
          className={`absolute flex gap-5 duration-300 justify-center mt-5 ${
            (tabs === 1 && "right-[-26.5%]") ||
            (tabs === 2 && "right-[4.5%]") ||
            (tabs === 3 && "left-[50%] translate-x-[-50%]")
          }`}
        >
          {products?.slice(4, 6).map((product) => (
            <>
              <div>
                <div
                  className={`h-full w-full bg-white bg-opacity-30 absolute top-0 left-0 ${
                    tabs === 3 && "hidden"
                  }`}
                ></div>
                <img src={product?.img} className="w-40 h-56" alt="" />
                <p className="text-xs pt-4 font-medium">{product?.name}</p>
                <p className="text-[10.5px] pt-1 font-medium">
                  ${product?.price}.00
                </p>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MinSlide;

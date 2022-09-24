import React, { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Slider = ({ setZoom, productData }) => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? value : value);
  };
  return (
    <>
      <div className={`fixed z-50 ${open === 1 ? "" : "hidden"}`}>
        <AiOutlineArrowLeft
          onClick={() => handleOpen(3)}
          className="fixed left-5 text-gray-400 cursor-pointer text-2xl hover:text-white top-[50%]"
        />
        <AiOutlineArrowRight
          onClick={() => handleOpen(2)}
          className="fixed right-5 text-gray-400 cursor-pointer text-2xl hover:text-white top-[50%]"
        />
        <div className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
          {/*content*/}
          <img src={productData?.img} className="mx-auto h-[600px]" alt="" />
        </div>
      </div>
      <div className={`fixed z-50 ${open === 2 ? "" : "hidden"}`}>
        <AiOutlineArrowLeft
          onClick={() => handleOpen(1)}
          className="fixed left-5 text-gray-400 cursor-pointer text-2xl hover:text-white top-[50%]"
        />
        <AiOutlineArrowRight
          onClick={() => handleOpen(3)}
          className="fixed right-5 text-gray-400 cursor-pointer text-2xl hover:text-white top-[50%]"
        />
        <div className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
          {/*content*/}
          <img src={productData?.img2} className="mx-auto h-[600px]" alt="" />
        </div>
      </div>
      <div className={`fixed z-50 ${open === 3 ? "" : "hidden"}`}>
        <AiOutlineArrowLeft
          onClick={() => handleOpen(2)}
          className="fixed left-5 text-gray-400 cursor-pointer text-2xl hover:text-white top-[50%]"
        />
        <AiOutlineArrowRight
          onClick={() => handleOpen(1)}
          className="fixed right-5 text-gray-400 cursor-pointer text-2xl hover:text-white top-[50%]"
        />
        <div className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
          {/*content*/}
          <img src={productData?.img3} className="mx-auto h-[600px]" alt="" />
        </div>
      </div>
      <div
        onClick={() => setZoom(false)}
        className="opacity-80 fixed inset-0 z-40 bg-black"
      ></div>
    </>
  );
};

export default Slider;

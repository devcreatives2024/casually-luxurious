import React from "react";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineMinus,
  AiOutlinePlus
} from "react-icons/ai";
import { BiZoomOut } from "react-icons/bi";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

const Slider = ({ zoom, setZoom, handleZoom, productData }) => {
  return (
    <>
      <div className={`fixed z-50 ${zoom === 1 ? "" : "hidden"}`}>
        <AiOutlineArrowLeft
          onClick={() => handleZoom(3)}
          className="fixed left-5 text-gray-400 cursor-pointer text-2xl hover:text-white top-[50%]"
        />
        <AiOutlineArrowRight
          onClick={() => handleZoom(2)}
          className="fixed right-5 text-gray-400 cursor-pointer text-2xl hover:text-white top-[50%]"
        />
        <div className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
          {/*content*/}
          <TransformWrapper initialScale={1}>
            {({ zoomIn, zoomOut, resetTransform }) => (
              <>
                <TransformComponent>
                  <img
                    src={productData?.img}
                    className="mx-auto h-[600px]"
                    alt=""
                  />
                </TransformComponent>
                <div className="text-center text-xl flex p-[3px] rounded-b-sm items-center text-white w-fit mx-auto bg-[#080808]">
                  <button
                    className="p-2 hover:bg-[#272626] rounded-sm"
                    onClick={() => zoomOut()}
                  >
                    <AiOutlineMinus />
                  </button>
                  <button
                    className="p-2 hover:bg-[#272626] rounded-sm"
                    onClick={() => resetTransform()}
                  >
                    <BiZoomOut />
                  </button>
                  <button
                    className="p-2 hover:bg-[#272626] rounded-sm"
                    onClick={() => zoomIn()}
                  >
                    <AiOutlinePlus />
                  </button>
                </div>
              </>
            )}
          </TransformWrapper>
        </div>
      </div>
      <div className={`fixed z-50 ${zoom === 2 ? "" : "hidden"}`}>
        <AiOutlineArrowLeft
          onClick={() => handleZoom(1)}
          className="fixed left-5 text-gray-400 cursor-pointer text-2xl hover:text-white top-[50%]"
        />
        <AiOutlineArrowRight
          onClick={() => handleZoom(3)}
          className="fixed right-5 text-gray-400 cursor-pointer text-2xl hover:text-white top-[50%]"
        />
        <div className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
          {/*content*/}
          <TransformWrapper initialScale={1}>
            {({ zoomIn, zoomOut, resetTransform }) => (
              <>
                <TransformComponent>
                  <img
                    src={productData?.img2}
                    className="mx-auto h-[600px]"
                    alt=""
                  />
                </TransformComponent>
                <div className="text-center text-xl flex p-[3px] rounded-b-sm items-center text-white w-fit mx-auto bg-[#080808]">
                  <button
                    className="p-2 hover:bg-[#272626] rounded-sm"
                    onClick={() => zoomOut()}
                  >
                    <AiOutlineMinus />
                  </button>
                  <button
                    className="p-2 hover:bg-[#272626] rounded-sm"
                    onClick={() => resetTransform()}
                  >
                    <BiZoomOut />
                  </button>
                  <button
                    className="p-2 hover:bg-[#272626] rounded-sm"
                    onClick={() => zoomIn()}
                  >
                    <AiOutlinePlus />
                  </button>
                </div>
              </>
            )}
          </TransformWrapper>
        </div>
      </div>
      <div className={`fixed z-50 ${zoom === 3 ? "" : "hidden"}`}>
        <AiOutlineArrowLeft
          onClick={() => handleZoom(2)}
          className="fixed left-5 text-gray-400 cursor-pointer text-2xl hover:text-white top-[50%]"
        />
        <AiOutlineArrowRight
          onClick={() => handleZoom(1)}
          className="fixed right-5 text-gray-400 cursor-pointer text-2xl hover:text-white top-[50%]"
        />
        <div className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
          {/*content*/}
          <TransformWrapper initialScale={1}>
            {({ zoomIn, zoomOut, resetTransform }) => (
              <>
                <TransformComponent>
                  <img
                    src={productData?.img3}
                    className="mx-auto h-[600px]"
                    alt=""
                  />
                </TransformComponent>
                <div className="text-center text-xl flex p-[3px] rounded-b-sm items-center text-white w-fit mx-auto bg-[#080808]">
                  <button
                    className="p-2 hover:bg-[#272626] rounded-sm"
                    onClick={() => zoomOut()}
                  >
                    <AiOutlineMinus />
                  </button>
                  <button
                    className="p-2 hover:bg-[#272626] rounded-sm"
                    onClick={() => resetTransform()}
                  >
                    <BiZoomOut />
                  </button>
                  <button
                    className="p-2 hover:bg-[#272626] rounded-sm"
                    onClick={() => zoomIn()}
                  >
                    <AiOutlinePlus />
                  </button>
                </div>
              </>
            )}
          </TransformWrapper>
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

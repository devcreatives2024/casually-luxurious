import React, { useState } from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const [hover, setHover] = useState(false);
  return (
    <Link
      to={`/shop/${product?.id}`}
      className={`${product.big === "yes" && "col-span-2"} pb-20 relative`}
    >
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="relative h-[50vh] cursor-pointer"
      >
        <img
          src={`${
            product?.big === "yes" ? `${product.img3}` : `${product.img}`
          }`}
          className="w-full h-[50vh]"
          alt=""
        />
        <div
          className={`bg-[#EBEBEB] p-6 w-full transition-all
           ease-in-out duration-500 uppercase text-sm absolute  ${
             hover ? "bottom-0" : "opacity-0 -bottom-28"
           }`}
        >
          <h1>Available Sizes :</h1>
          <h1 className="mt-3 tracking-widest">XS S M L XL XXL</h1>
        </div>
      </div>
      <div className="bg-white absolute w-full">
        <p className="text-xs pt-4 font-medium">{product?.name}</p>
        <p className="text-[10.5px] py-1 font-medium">${product?.price}.00</p>
        <p className="uppercase font-bold text-[9px] text-gray-400">
          More Colors
        </p>
      </div>
    </Link>
  );
};

export default Product;

import React from "react";
import { Link } from "react-router-dom";
import useProducts from "../../Hooks/useProducts";
import Product from "./Product";

const Proudcts = () => {
  const [products] = useProducts();
  return (
    <div>
      <div className="flex">
        <div>
          <h5 className="text-[9.5px] uppercase">Filter</h5>
        </div>
        <div className="w-full">
          <ul className="flex justify-center text-[9.5px] font-medium uppercase">
            <li className="px-3">
              <Link
                to={"/shop"}
                className="border-b border-[#606060] pb-[1px]"
                href="#"
              >
                Collection
              </Link>
            </li>
            <li className="px-3">
              <a className="hover:border-b border-[#606060] pb-[1px]" href="#">
                ORGANIC CORE ESSENTIALSSELF
              </a>
            </li>
            <li className="px-3">
              <a className="hover:border-b border-[#606060] pb-[1px]" href="#">
                CARELIFE
              </a>
            </li>
            <li className="px-3">
              <a className="hover:border-b border-[#606060] pb-[1px]" href="#">
                SUSTAINABLE LIVING
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* products  */}
      <div className="grid gap-6 mt-5 grid-cols-4">
        {products?.map((product) => (
          <Product key={product?.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Proudcts;

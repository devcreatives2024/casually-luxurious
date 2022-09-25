import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useProducts from "../../Hooks/useProducts";
import Slider from "./Slider";

const ProductsView = () => {
  const [zoom, setZoom] = useState(false);
  const [tabs, setTabs] = useState(1);
  const { id } = useParams();
  const [products] = useProducts();
  const productData = products.find((product) => product.id === id);

  const handleZoom = (value) => {
    setZoom(zoom === value ? value : value);
  };
  const handleTabs = (value) => {
    setTabs(tabs === value ? value : value);
  };

  return (
    <div className="font-medium">
      <div className="flex gap-5 mb-16">
        <div className="w-6/12">
          <img
            onClick={() => handleZoom(2)}
            src={productData?.img2}
            className="cursor-crosshair"
            alt=""
          />
          <img
            onClick={() => handleZoom(3)}
            src={productData?.img3}
            className="cursor-crosshair"
            alt=""
          />
        </div>
        <div className="w-full">
          <img
            onClick={() => handleZoom(1)}
            src={productData?.img}
            className="cursor-crosshair"
            alt=""
          />
          <div className="flex justify-center gap-6 mt-6">
            <img
              src="https://cdn.shopify.com/s/files/1/0411/9864/9508/products/alabama-chanin--fabric-swatch--georgia--applique-stenciled-embroidery--concrete.jpg?v=1663867325"
              className="w-1/2 cursor-crosshair"
              alt=""
            />
            <img
              src="https://cdn.shopify.com/s/files/1/0411/9864/9508/products/alabama-chanin--fabric-swatch--georgia--applique-stenciled-embroidery--wax.jpg?v=1663867329"
              alt=""
              className="w-1/2 cursor-crosshair"
            />
          </div>
        </div>
        {zoom ? (
          <Slider
            setZoom={setZoom}
            handleZoom={handleZoom}
            zoom={zoom}
            productData={productData}
          />
        ) : null}
        <div className="w-7/12">
          <div className="border-t py-3">
            <h1 className="text-xs">{productData?.name}</h1>
            <p className="text-sm text-gray-500 font-normal pt-1">
              ${productData?.price}.00
            </p>
          </div>
          <div className="border-t py-3 flex items-center gap-4">
            <h1 className="text-xs">SIZE</h1>
            <p className="text-sm text-gray-500 font-normal">Select</p>
          </div>
          <div className="border-t py-3 flex items-center gap-4">
            <h1 className="text-xs">COLOR</h1>
            <p className="text-sm text-gray-500 font-normal">Select</p>
          </div>
          <div className="border-t border-b mb-4 py-3 flex items-center gap-4">
            <h1 className="text-xs">QTY :</h1>
            <p className="text-sm text-gray-500 font-normal">1</p>
          </div>
          <div>
            <button className="bg-black w-full text-white p-2 font-light text-sm uppercase">
              Add To Bag
            </button>
            <button className="border w-full mt-2 p-2 font-light text-sm uppercase">
              Add To Wishlist
            </button>
            <div className="text-[12px] py-4 border-b text-gray-700">
              <p>Lorem, ipsum dolor.</p>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="text-gray-700">
            <h1 className="text-[12px] py-4 uppercase">
              <span className="underline pr-4">Lorem</span> ipsum + dolor.
            </h1>
            <h1 className="text-[12px] pb-4 underline">Lorem, ipsum dolor.</h1>
            <p className="text-xs pb-5 border-b">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloremque voluptatem eum architecto, nobis hic soluta totam. Aut
              earum rem ipsa molestias, eos nisi vel consectetur aperiam, iusto,
              impedit libero corporis. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Perspiciatis dignissimos doloremque delectus
              facere provident,Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Officia, sed?
            </p>
            <h1 className="text-[12px] pt-4 pb-1">Lorem, ipsum dolor.</h1>
            <p className="text-xs pb-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloremque voluptatem eum architecto, nobis hic soluta totam. Aut
              earum rem ipsa molestias, eos nisi vel consectetur aperiam, iusto,
              impedit libero corporis. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Perspiciatis dignissimos
              <br />
              <span className="underline text-gray-400">
                iusto ex fugiat voluptas nobis{" "}
              </span>
            </p>
            <a
              href="#"
              className="py-3 block border-t border-b text-[10.5px] text-gray-500"
            >
              SHARE +
            </a>
          </div>
        </div>
      </div>
      {/* Tabs  */}
      <div>
        <ul className="flex justify-center gap-4 text-[10.5px] uppercase">
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
          <li>
            <a
              className={`cursor-pointer ${tabs === 3 && "underline"}`}
              onClick={() => handleTabs(3)}
            >
              More In This Material
            </a>
          </li>
        </ul>
        {/* slider  */}
        <div className="h-80 flex">
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
                  <img src={product?.img} className="w-40" alt="" />
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
                  <img src={product?.img} className="w-40" alt="" />
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
                  <img src={product?.img} className="w-40" alt="" />
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
    </div>
  );
};

export default ProductsView;

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useProducts from "../../Hooks/useProducts";

const ProductsView = () => {
  const [zoom, setZoom] = useState(false);
  const { id } = useParams();
  const [products] = useProducts();
  const productData = products.find((product) => product.id === id);

  const handleZoom = (value) => {
    setZoom(zoom === value ? value : value);
  };
  return (
    <div className="mb-28 font-medium">
      <div className="flex gap-5">
        <div className="w-6/12">
          <img
            onClick={() => handleZoom(2)}
            src={productData?.img2}
            className="cursor-crosshair"
            alt=""
          />
          {zoom === 2 && (
            <img
              onClick={() => handleZoom(false)}
              src={productData?.img2}
              className="cursor-crosshair absolute top-24 -left-32"
              alt=""
            />
          )}
          <img
            onClick={() => handleZoom(3)}
            src={productData?.img3}
            className="cursor-crosshair"
            alt=""
          />
          {zoom === 3 && (
            <img
              onClick={() => handleZoom(false)}
              src={productData?.img3}
              className="cursor-crosshair absolute top-24 -left-32"
              alt=""
            />
          )}
        </div>
        <div className="w-full">
          <img
            onClick={() => handleZoom(1)}
            src={productData?.img}
            className="cursor-crosshair"
            alt=""
          />
          {zoom === 1 && (
            <img
              onClick={() => handleZoom(false)}
              src={productData?.img}
              className="cursor-crosshair absolute top-24 -left-32"
              alt=""
            />
          )}
          <div className="flex justify-center gap-6 mt-6">
            <img
              onClick={() => handleZoom(4)}
              src="https://cdn.shopify.com/s/files/1/0411/9864/9508/products/alabama-chanin--fabric-swatch--georgia--applique-stenciled-embroidery--concrete.jpg?v=1663867325"
              className="w-1/2 cursor-crosshair"
              alt=""
            />
            {zoom === 4 && (
              <img
                onClick={() => handleZoom(false)}
                src="https://cdn.shopify.com/s/files/1/0411/9864/9508/products/alabama-chanin--fabric-swatch--georgia--applique-stenciled-embroidery--concrete.jpg?v=1663867325"
                className="cursor-crosshair absolute top-24 -left-32"
                alt=""
              />
            )}
            <img
              onClick={() => handleZoom(5)}
              src="https://cdn.shopify.com/s/files/1/0411/9864/9508/products/alabama-chanin--fabric-swatch--georgia--applique-stenciled-embroidery--wax.jpg?v=1663867329"
              alt=""
              className="w-1/2 cursor-crosshair"
            />
            {zoom === 5 && (
              <img
                onClick={() => handleZoom(false)}
                src="https://cdn.shopify.com/s/files/1/0411/9864/9508/products/alabama-chanin--fabric-swatch--georgia--applique-stenciled-embroidery--wax.jpg?v=1663867329"
                className="cursor-crosshair absolute top-24 -left-32"
                alt=""
              />
            )}
          </div>
        </div>
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
    </div>
  );
};

export default ProductsView;

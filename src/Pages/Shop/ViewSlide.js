import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const ViewSlide = ({ products }) => {
  return (
    <div className="lg:hidden">
      <Swiper
        slidesPerView={1}
        pagination={{
          el: ".my-custom-pagination-div",
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {products?.map((product) => (
          <SwiperSlide>
            <div>
              <img src={product?.img} className="w-60" alt="" />
              <p className="text-xs pt-4 font-medium">{product?.name}</p>
              <p className="text-[10.5px] pt-1 font-medium">
                ${product?.price}.00
              </p>
            </div>
          </SwiperSlide>
        ))}
        <div className="my-custom-pagination-div text-center mt-10" />
      </Swiper>
    </div>
  );
};

export default ViewSlide;

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
const ImgSlide = ({ productData }) => {
  return (
    <div className="lg:hidden">
      <Swiper
        slidesPerView={2}
        pagination={{
          el: ".my-custom-pagination-div",
          clickable: true,
        }}
        loop={true}
        spaceBetween={20}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={productData?.img} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={productData?.img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.shopify.com/s/files/1/0411/9864/9508/products/alabama-chanin--fabric-swatch--georgia--applique-stenciled-embroidery--concrete.jpg?v=1663867325"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.shopify.com/s/files/1/0411/9864/9508/products/alabama-chanin--fabric-swatch--georgia--applique-stenciled-embroidery--wax.jpg?v=1663867329"
            alt=""
          />
        </SwiperSlide>
        <div className="my-custom-pagination-div text-center mt-10" />
      </Swiper>
    </div>
  );
};

export default ImgSlide;

import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const ModalSwiper = ({ images }: { images: string[] }) => {
  return (
    <div className="">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop
        spaceBetween={10}
        slidesPerView={1}
        navigation
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            className="p-3"
          >
            <img
              alt={`Slide ${index + 1}`}
              src={image}
              className="w-fit max-h-[400px] mx-auto rounded-md object-contain shadow-md shadow-[hsl(var(--nextui-primary-100))]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ModalSwiper;

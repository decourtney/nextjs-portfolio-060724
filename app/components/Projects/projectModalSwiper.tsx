import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import
  {
    A11y,
    Autoplay,
    Navigation,
    Pagination,
    Scrollbar,
  } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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

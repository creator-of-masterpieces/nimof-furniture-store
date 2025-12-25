import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import "swiper/css";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import "swiper/css/navigation";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import "swiper/css/pagination";

const TestSwiper = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={10}
      slidesPerView={1}
      loop={true}
      navigation
      pagination={{ clickable: true }}
      style={{ inlineSize: 700 }}
    >
      <SwiperSlide>
        <img src="/src/assets/images/living-room.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/src/assets/images/kitchen.webp" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/src/assets/images/living-room.jpg" alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default TestSwiper;

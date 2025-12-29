// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import "swiper/css";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import "swiper/css/navigation";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import "swiper/css/pagination";
import style from "./testSwiper.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { IImage } from "../../data/products.ts";

interface ITestSwiperProps {
  images: IImage[];
}

const TestSwiper = (props: ITestSwiperProps) => {
  const { images } = props;
  return (
    <Swiper
      className={style.slider}
      modules={[Navigation, Pagination]}
      spaceBetween={10}
      slidesPerView={1}
      loop={true}
      navigation
      pagination={{ clickable: true }}
      autoHeight={true} // Высота под контент слайда
      grabCursor={true} // Курсор в виде руки
      touchRatio={1} // Скорость перетаскивания слайда - 1px сдвига слайда за 1px движения пальца
    >
      {images.map((image: IImage, index: number) => (
        <SwiperSlide key={index}>
          <img src={image.src} alt={image.alt} />
        </SwiperSlide>
      ))}
      {/*<SwiperSlide>*/}
      {/*  <img src="/src/assets/images/living-room.jpg" alt="" />*/}
      {/*</SwiperSlide>*/}
      {/*<SwiperSlide>*/}
      {/*  <img src="/src/assets/images/kitchen.webp" alt="" />*/}
      {/*</SwiperSlide>*/}
      {/*<SwiperSlide>*/}
      {/*  <img src="/src/assets/images/living-room.jpg" alt="" />*/}
      {/*</SwiperSlide>*/}
    </Swiper>
  );
};

export default TestSwiper;

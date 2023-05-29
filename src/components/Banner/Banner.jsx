import "./Banner_module.scss";
import banner from "../imgs/Banner.png";
// import left from "../imgs/LeftIcon.png";
// import right from "../imgs/RightIcon.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

export function Banner() {
  return (
    <div className="banner">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="banner__container"
        // style={{ color: "black" }}
      >
        <SwiperSlide>
          <img className="banner__img" src={banner} alt="banner" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="banner__img" src={banner} alt="banner" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="banner__img" src={banner} alt="banner" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="banner__img" src={banner} alt="banner" />
        </SwiperSlide>
        {/* <img className="banner__left" src={left} alt="left" />
        <img className="banner__right" src={right} alt="right" /> */}
      </Swiper>
    </div>
  );
}

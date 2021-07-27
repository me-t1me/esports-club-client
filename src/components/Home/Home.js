import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

import "./HomeStyles.css";

import SwiperCore, { Pagination, Parallax } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination, Parallax]);

const Home = () => {
  return (
    <div className="home-container">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        speed={600}
        parallax={true}
        className="mySwiper"
      >
        <SwiperSlide style={{ overflow: "visible" }}>
          <section className="valorant">
            <h2 data-swiper-parallax="600">Valorant</h2>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="csgo">
            <h2 data-swiper-parallax="300">Csgo</h2>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="bgmi">
            <h2 data-swiper-parallax="300">BGMI</h2>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="codm">
            <h2 data-swiper-parallax="300">Codm</h2>
          </section>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;

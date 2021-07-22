import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

import "./HomeStyles.css";

import SwiperCore, { Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination]);

const Home = () => {
  return (
    <div className="home-container">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <section className="valorant">
            <h2>Valorant</h2>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="csgo">
            <h2>Csgo</h2>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="bgmi">
            <h2>BGMI</h2>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="codm">
            <h2>Codm</h2>
          </section>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;

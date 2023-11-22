import { Autoplay, EffectFade } from 'swiper';
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/scss";
import { donnees } from "./data";

const App = () => {
  return (
    <Swiper 
      modules={[Autoplay, EffectFade]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      effect="fade"
      fadeEffect={{
        crossFade: true
      }}
      className="mySwiper"
    >
      {donnees.map((item, index) => (
        <SwiperSlide key={index} className="">
          <img src={item.img} alt={item.name} />
          <p>{item.name}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default App;

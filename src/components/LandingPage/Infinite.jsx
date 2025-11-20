import "../../styles/LandingPage/Infinite.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";

export default function Infinite() {
  const { t } = useTranslation();

  const items = [
    t("infinite1"),
    t("infinite2"),
    t("infinite3"),
    t("infinite4"),
    t("infinite5"),
    t("infinite6"),
    t("infinite7"),
    t("infinite8"),
    t("infinite9"),
    t("infinite10"),
  ];

  return (
    <div class="infinite">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView="auto"
        loop={true}
        speed={6000}
        allowTouchMove={false}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
      >
        {items.map((item, idx) => (
          <SwiperSlide key={idx}>
            <span className="item">{item}</span>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

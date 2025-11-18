import "../../styles/Portfolio/project_details.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Navigation,
  Pagination,
  A11y,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import image1 from "./assets/project/image1.png";
import image2 from "./assets/project/image2.png";
import android from "./assets/apps_icons/app_android.png";
import ios from "./assets/apps_icons/app_ios.png";
import frame from "./assets/frame.png";

export default function Project_Details() {
  const { t } = useTranslation();

  const images = [
    image1,
    image2,
    image1,
    image2,
    image1,
    image2,
  ];

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: {
      duration: 0.6,
      delay: delay / 1000,
      ease: [0.42, 0, 0.58, 1], // smoother natural curve
    },
    viewport: { once: true, amount: 0.2 },
  });

  return (
    <div>
      <div class="body-overlay"></div>

      <section class="banner">
        <div class="container">
          <div class="links">
            <a href="#home">{t("headerHome")}</a>
            <a href="/portfolio">{t("headerPortfolio")}</a>
            <a href="#!" class="active">
              stadtli Kebab Pizza
            </a>
          </div>
        </div>
      </section>

      <section class="productDetails position-relative z-2">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 p-2">
              <motion.div class="details" {...fadeUp(50)}>
                <div class="content">
                  <a href="#!" class="title">
                    stadtli Kebab Pizza
                  </a>
                  <p class="des">
                    {t("projectDetailsContent")}
                  </p>
                  <div class="workLinks">
                    <div class="workLinks">
                      <a
                        href="https://apps.apple.com/ch/app/ali-pizza-kebab/id1671360972"
                        class="link"
                        target="_balank"
                      >
                        <img
                          loading="lazy"
                          src={ios}
                          alt="image"
                        ></img>
                        {t("projectDetailsIOS")}
                      </a>
                      <a
                        href="https://play.google.com/store/apps/details?id=com.aliweb.zeroonez.stadtlikebab"
                        class="link"
                        target="_balank"
                      >
                        <img
                          loading="lazy"
                          src={android}
                          alt="image"
                        ></img>
                        {t("projectDetailsAndroid")}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div class="details px-0" {...fadeUp(200)}>
                <div class="phoneView">
                  <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView="auto"
                    loop={true}
                    speed={1000}
                    autoplay={{
                      disableOnInteraction: false,
                    }}
                    coverflowEffect={{
                      rotate: 30,
                      stretch: 0,
                      depth: 300,
                      modifier: 1,
                      slideShadows: true,
                    }}
                    modules={[EffectCoverflow, Pagination, Autoplay]}
                  >
                    {images.map((src, index) => (
                      <SwiperSlide key={index}>
                        <img src={src} alt="" />
                      </SwiperSlide>
                    ))}
                    <img
                      loading="lazy"
                      src={frame}
                      class="frame"
                      alt="image"
                    ></img>
                  </Swiper>
                </div>
              </motion.div>
            </div>
            <div class="col-lg-4 p-2">
              <motion.div class="productBox" {...fadeUp(250)}>
                <h4 class="title"> {t("projectDetailsRightHead1")} </h4>
                <ul>
                  <li> {t("projectDetailsContent1")}</li>
                  <li> {t("projectDetailsContent2")}</li>
                </ul>
              </motion.div>
              <motion.div class="productBox" {...fadeUp(300)}>
                <h4 class="title"> {t("projectDetailsRightHead2")} </h4>
                <div class="features">
                  <span> PHP</span>
                  <span> Laravel</span>
                  <span> Flutter</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

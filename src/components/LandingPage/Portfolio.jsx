import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../styles/LandingPage/Portfolio.css";
import Project from "../ReusableComponents/project";
import arrow from "../../assets/pageArrow.png";
import image_cover1 from "../../assets/portfolio_images/image_cover1.png";
import image_cover2 from "../../assets/portfolio_images/image_cover2.png";
import image_cover3 from "../../assets/portfolio_images/image_cover3.png";
import image_cover4 from "../../assets/portfolio_images/image_cover4.png";
import image_cover5 from "../../assets/portfolio_images/image_cover5.png";
import image_cover6 from "../../assets/portfolio_images/image_cover6.png";
import image_cover7 from "../../assets/portfolio_images/image_cover7.png";
import image_cover8 from "../../assets/portfolio_images/image_cover8.png";
import image_cover9 from "../../assets/portfolio_images/image_cover9.png";




export default function Portfolio() {
  const { t } = useTranslation();

  const projects = [
  {
    title: t("portfolioProject1"),
    // desc: "A website for Somu Training Company in the Kingdom of Saudi Arabia.",
    img: image_cover1,
    link: "/portfolio/1",
    categories: ["website", "ecommerceStores"], // 👈 add this
  },
  {
    title: t("portfolioProject2"),
    // desc: "The Abu Batal Slaughterhouse app allows you to purchase the finest livestock meat with ease and convenience...",
    img: image_cover2,
    link: "/portfolio/1",
    categories: ["androidApplication", "applicationDesign"],
  },
  {
    title: t("portfolioProject3"),
    // desc: "With the Ajel app, you can purchase your needs from participating stores...",
    img: image_cover3,
    link: "/portfolio/1",
    categories: ["recruitment", "website"],
  },
  {
    title: t("portfolioProject4"),
    // desc: "A website for Dar Daleel Real Estate, a leading real estate company specializing in property marketing and management...",
    img: image_cover4,
    link: "/portfolio/1",
    categories: ["ecommerceStores", "website"],
  },
  {
    title: t("portfolioProject5"),
    // desc: "A website for Tamim Al-Hussainan Law Firm and Legal Consultations in the Kingdom of Saudi Arabia.",
    img: image_cover5,
    link: "/portfolio/1",
    categories: ["lawFirm", "website"],
  },
  {
    title: t("portfolioProject6"),
    // desc: "A website for Ebhar Platform for book publishing and distribution.",
    img: image_cover6,
    link: "/portfolio/1",
    categories: ["androidApplication", "ecommerceStores"],
  },
  {
    title: t("portfolioProject7"),
    // desc: "A website for Dar Daleel Real Estate, a leading real estate company specializing in property marketing and management...",
    img: image_cover7,
    link: "/portfolio/1",
    categories: ["recruitment", "website"],
  },
  {
    title: t("portfolioProject8"),
    // desc: "A website for Tamim Al-Hussainan Law Firm and Legal Consultations in the Kingdom of Saudi Arabia.",
    img: image_cover8,
    link: "/portfolio/1",
    categories: ["recruitment", "website"],
  },
  {
    title: t("portfolioProject9"),
    // desc: "A website for Ebhar Platform for book publishing and distribution.",
    img: image_cover9,
    link: "/portfolio/1",
    categories: ["androidApplication", "applicationDesign"],
  },
];

  // 🔹 Reusable fade-up animation identical to AOS
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: {
      duration: 0.6,
      delay: delay / 1000,
      ease: [0.42, 0, 0.58, 1], // same as CSS cubic-bezier(.42, 0, .58, 1)
    },
    viewport: { once: true, amount: 0.2 },
  });

  return (
    <section className="activeNavClass portfolio" id="portfolio">
      <div className="container">
        {/* ===== Section Top ===== */}
        <motion.div className="sectionTop" {...fadeUp(0)}>
          <div className="top">
            <motion.h4 className="secSubTitle animate_words" {...fadeUp(50)}>
              <div className="anim-reveal-line">{t("portfolioHead1")}</div>
            </motion.h4>

            <motion.h1 className="secTitle animate_words" {...fadeUp(100)}>
              <div className="anim-reveal-line">{t("portfolioHead2")}</div>
            </motion.h1>
          </div>

          <motion.a
            href="portfolio"
            className="outlineGradient"
            {...fadeUp(150)}
          >
            <span>
              {t("portfolioShowAll")}
              <img loading="lazy" src={arrow} alt="arrow" />
            </span>
          </motion.a>
        </motion.div>

        {/* ===== Swiper Section ===== */}
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          speed={1000}
          autoplay={{
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            992: {
              slidesPerView: 3,
              allowTouchMove: true,
            },
            657: {
              slidesPerView: 2,
              allowTouchMove: true,
            },
            0: {
              slidesPerView: 1,
              allowTouchMove: true,
            },
          }}
        >
          {projects.map((item, idx) => (
            <SwiperSlide key={idx}>
              <Project item={item} idx={idx} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../styles/LandingPage/Portfolio.css";
import Project from "../ReusableComponents/project";
import image_cover1 from "../../assets/portfolio_images/image_cover1.png";
import image_cover2 from "../../assets/portfolio_images/image_cover2.png";
import image_cover3 from "../../assets/portfolio_images/image_cover3.png";
import image_cover4 from "../../assets/portfolio_images/image_cover4.png";
import image_cover5 from "../../assets/portfolio_images/image_cover5.png";
import image_cover6 from "../../assets/portfolio_images/image_cover6.png";
import image_cover7 from "../../assets/portfolio_images/image_cover7.png";
import image_cover8 from "../../assets/portfolio_images/image_cover8.png";
import image_cover9 from "../../assets/portfolio_images/image_cover9.png";

import project1 from "../../assets/project_mockups/project1.png";
import project2 from "../../assets/project_mockups/project2.png";
import project3 from "../../assets/project_mockups/project3.png";
import project5 from "../../assets/project_mockups/project5.png";
import project7 from "../../assets/project_mockups/project7.png";
import project9 from "../../assets/project_mockups/project9.png";

import Top_Component from "../ReusableComponents/top_component";

export default function Portfolio() {
  const { t } = useTranslation();

  const projects = [
    {
      title: t("portfolioProject1"),
      // desc: "A website for Somu Training Company in the Kingdom of Saudi Arabia.",
      img: project1,
      link: "/portfolio/1",
      categories: ["website", "ecommerceStores"],
    },
    {
      title: t("portfolioProject2"),
      // desc: "The Abu Batal Slaughterhouse app allows you to purchase the finest livestock meat with ease and convenience...",
      img: project2,
      link: "/portfolio/1",
      categories: ["androidApplication", "applicationDesign"],
    },
    {
      title: t("portfolioProject3"),
      // desc: "With the Ajel app, you can purchase your needs from participating stores...",
      img: project3,
      link: "/portfolio/1",
      categories: ["recruitment", "website"],
    },
    {
      title: t("portfolioProject4"),
      // desc: "A website for Dar Daleel Real Estate, a leading real estate company specializing in property marketing and management...",
      img: project9,
      link: "/portfolio/1",
      categories: ["ecommerceStores", "website"],
    },
    {
      title: t("portfolioProject5"),
      // desc: "A website for Tamim Al-Hussainan Law Firm and Legal Consultations in the Kingdom of Saudi Arabia.",
      img: project5,
      link: "/portfolio/1",
      categories: ["lawFirm", "website"],
    },
    {
      title: t("portfolioProject6"),
      // desc: "A website for Ebhar Platform for book publishing and distribution.",
      img: project5,
      link: "/portfolio/1",
      categories: ["androidApplication", "ecommerceStores"],
    },
    {
      title: t("portfolioProject7"),
      // desc: "A website for Dar Daleel Real Estate, a leading real estate company specializing in property marketing and management...",
      img: project7,
      link: "/portfolio/1",
      categories: ["recruitment", "website"],
    },
    {
      title: t("portfolioProject8"),
      // desc: "A website for Tamim Al-Hussainan Law Firm and Legal Consultations in the Kingdom of Saudi Arabia.",
      img: project1,
      link: "/portfolio/1",
      categories: ["androidApplication", "website"],
    },
    {
      title: t("portfolioProject9"),
      // desc: "A website for Ebhar Platform for book publishing and distribution.",
      img: project9,
      link: "/portfolio/1",
      categories: ["androidApplication", "applicationDesign"],
    },
  ];

  return (
    <section className="activeNavClass portfolio" id="portfolio">
      <div className="container">
        {/* ===== Section Top ===== */}
        <Top_Component head={t("portfolioHead1")} content={t("portfolioHead2")} />
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


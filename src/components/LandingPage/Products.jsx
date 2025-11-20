import "../../styles/LandingPage/Products.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import Product from "../ReusableComponents/product";
import { useTranslation } from "react-i18next";
import product from "../../assets/product.png";
import design from "../../assets/apps_icons/app_design.png";
import Top_Component from "../ReusableComponents/top_component";

export default function Products() {
  const { t } = useTranslation();

  const projects = [
    {
      name: "Circle",
      num: 2,
      img: product,
      link: "/products/1",
    },
    {
      name: "Mishwar",
      num: 2,
      img: product,
      link: "/products/1",
    },
    {
      name: "ADhmn",
      num: 4,
      img: product,
      link: "/products/1",
    },
  ];

  const links = {
    app: "https://www.figma.com/proto/gceRf6K0pFQNuJWUOhb02e/adhmn?node-id=0-1&viewport=567%2C295%2C0.11&t=Oj8fcL7mlQEe2XCi-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A196",
    img: design,
  };

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: {
      duration: 0.6,
      delay: delay / 1000,
      ease: [0.42, 0, 0.58, 1],
    },
    viewport: { once: true, amount: 0.2 },
  });

  return (
    <section className="activeNavClass ourProducts" id="products">
      <div className="container">
        {/* Section Top */}
        {/* <Top_Component head={t("portfolioHead1")} content={t("portfolioHead2")} /> */}

        {/* Swiper Section */}
        <motion.div {...fadeUp(200)}>
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={20}
            slidesPerView={3}
            speed={2000}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              992: {
                slidesPerView: 3,
                allowTouchMove: false,
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
                <motion.div {...fadeUp(150 + idx * 100)}>
                  <Product item={item} links={links} />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}

import "../../styles/Products/our_products.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import Product from "../ReusableComponents/product";
import { useTranslation } from "react-i18next";
import arrow from "../../assets/pageArrow.png";
import product from "../../assets/product.png";
import design from "../../assets/apps_icons/app_design.png";
import android from "../../assets/apps_icons/app_android.png";
import ios from "../../assets/apps_icons/app_ios.png";
import web from "../../assets/apps_icons/app_web.png";
import background from "../../assets/body-bg.png"

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
  img: android,
};

export default function our_products() {
  const { t } = useTranslation();

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
    <section className="o_products">
      <div class="container">
        <img
          src={background}
          class="body-overlay"
        ></img>
        <motion.section
          class="activeNavClass our_products"
          {...fadeUp(50)}
          id="our_products"
        >
          <div class="container">
            <div class="shapes">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div class="text">
              <motion.h1 class="title" {...fadeUp(100)}>
                Where quality meets innovation
              </motion.h1>
              <motion.h6 class="des" {...fadeUp(150)}>
                Ali Foundation provides integrated digital solutions for resale
                in website design And mobile applications. We resell upgraded
                products with the highest quality standards to meet your needs.
              </motion.h6>
            </div>
          </div>
        </motion.section>
        <section class="activeNavClass " id="ourProducts">
          <div class="container boot">
            <div class="row" id="products-container">
              {projects.map((item, idx) => (
                <motion.div class="boot aos-init" {...fadeUp(50 * (idx + 1))}>
                  <Product item={item} links={links} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}


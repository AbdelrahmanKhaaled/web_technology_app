import "../../styles/LandingPage/Products.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import Product from "../ReusableComponents/product";
import { useTranslation } from "react-i18next";
import arrow from "./assets/pageArrow.png";
import product from "./assets/product.png";
import design from "./assets/apps_icons/app_design.png";
import android from "./assets/apps_icons/app_android.png";
import ios from "./assets/apps_icons/app_ios.png";
import web from "./assets/apps_icons/app_web.png";

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

  // 🔹 Reusable fade-up animation (replicates AOS behavior)
  // const fadeUp = (delay = 0) => ({
  //   hidden: { opacity: 0, y: 50 },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: { duration: 0.6, delay: delay / 1000 },
  //   },
  // });

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
    <section className="activeNavClass ourProducts" id="products">
      <div className="container">
        {/* Section Top */}
        <motion.div
          className="sectionTop"
          // variants={fadeUp(0)}
          // initial="hidden"
          // whileInView="visible"
          // viewport={{ once: true, amount: 0.4 }}
          {...fadeUp(0)}
        >
          <div className="top">
            <motion.h4
              className="secSubTitle animate_words"
              // variants={fadeUp(50)}
              // initial="hidden"
              // whileInView="visible"
              // viewport={{ once: true }}
              {...fadeUp(50)}
            >
              <div className="anim-reveal-line">our products</div>
            </motion.h4>
            <motion.h1
              className="secTitle animate_words"
              // variants={fadeUp(100)}
              {...fadeUp(100)}
              // initial="hidden"
              // whileInView="visible"
              // viewport={{ once: true }}
            >
              <div className="anim-reveal-line">
                Where quality meets innovation
              </div>
            </motion.h1>
          </div>

          <motion.a
            href="/products"
            className="outlineGradient"
            {...fadeUp(150)}
          >
            <span>
              Show all
              <img loading="lazy" src={arrow} alt="arrow" />
            </span>
          </motion.a>
        </motion.div>

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
                allowTouchMove: false, // 🔒 no swipe when 3 visible
              },
              657: {
                slidesPerView: 2,
                allowTouchMove: true, // 🖐 swipe when 2
              },
              0: {
                slidesPerView: 1,
                allowTouchMove: true, // 🖐 swipe when 1
              },
            }}
          >
            {projects.map((item, idx) => (
              <SwiperSlide key={idx}>
                <motion.div
                  // variants={fadeUp(150 + idx * 100)} // small stagger for cards
                  // initial="hidden"
                  // whileInView="visible"
                  // viewport={{ once: true }}
                  {...fadeUp(150 + idx * 100)}
                >
                  {/* <div className="productCard">
                    <a className="view" href={item.link}>
                      <img src={item.img} alt={item.name} />
                    </a>
                    <div className="content">
                      <a className="title" href={item.link}>
                        {item.name}
                      </a>
                      <p className="des">
                        ADHMN Home Maintenance Company** ADHMN is not just an
                        app .. ADHMN is a set of tools designed for you,
                        bringing all home maintenance services right to your
                        home, establishment, or retreat. In short, ADHMN is an
                        app, a website, a customer service center, equipment,
                        and technicians all aimed at providing you with
                        top-notch service. ADHMN represents a new way of
                        thinking. Our slogan is "Home maintenance at the touch
                        of an app on your phone."
                      </p>
                      <div className="workLinks">
                        {[...Array(item.num)].map((_, index) => (
                          <a
                            key={index}
                            href={links.app}
                            className="link"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img loading="lazy" src={links.img} alt="image" />
                            Android design
                          </a>
                        ))}
                      </div>
                    </div>
                  </div> */}
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

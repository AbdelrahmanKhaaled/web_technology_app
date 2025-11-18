import "../../styles/LandingPage/Infinite.css";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, A11y } from "swiper";
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

  // const items = [
  //   "Digital Marketing",
  //   "Project Management",
  //   "Machine Learning",
  //   "Web Development",
  //   "Database",
  //   "Software",
  //   "Graphic Design",
  //   "Information Security",
  //   "E-Commerce",
  //   "Search Engine Optimization (SEO)",
  // ];

  // const [activeIndex, setActiveIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActiveIndex((prev) => (prev + 1) % items.length);
  //   }, 20000); // change every 1 second

  //   return () => clearInterval(interval);
  // }, [items.length]);

  return (
    <div class="infinite">
      {/* <!-- Slider Container --> */}
      {/* <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView="auto"
        loop={true}
        speed={2000}
        allowTouchMove={false}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        freeMode={true}
        freeModeMomentum={false}
      >
        {items.map((item, idx) => (
          <SwiperSlide key={idx}>
            <span class="item">{item}</span>
          </SwiperSlide>
        ))}
      </Swiper> */}

      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView="auto"
        loop={true}
        speed={6000} // Smooth linear movement
        allowTouchMove={false}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        // freeMode={true}
        // freeModeMomentum={false}

        // loopAdditionalSlides={20} // Fix gap / break in loop
      >
        {items.map((item, idx) => (
          <SwiperSlide key={idx}>
            <span className="item">{item}</span>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <div className="items">
        {items.map((item, idx) => (
          <span className={`item ${idx === activeIndex ? "hidden" : "active" }`} key={idx}>

            {item}
          </span>
        ))}
      </div> */}
    </div>
  );
}

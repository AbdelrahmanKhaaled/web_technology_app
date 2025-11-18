import { motion } from "framer-motion";
import "../../styles/ReusableComponents/service.css";
import { useTranslation } from "react-i18next";
import arrow_4 from "/src/assets/arrow-4.png";
import arrow_3 from "/src/assets/arrow-3.png";

export default function Service_Home({ service, index }) {
  const { t } = useTranslation();
  
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: {
      duration: 0.4,
      delay: delay / 1000,
      ease: [0.42, 0, 0.58, 1],
    },
    viewport: { once: true, amount: 0.2 },
  });

  return (
    <motion.a
      key={index}
      href={service.href}
      className="serviceItem"
      {...fadeUp(service.delay)}
    >
      <div className="serviceRoute">
        <img
          loading="lazy"
          className="serviceIcon"
          src={service.icon}
          alt="servicesIcon"
        />
        <span className="icon">
          <img
            loading="lazy"
            src= {arrow_4}
            alt="image"
          />
        </span>
      </div>
      <h3 className="title">{service.title}</h3>
      <p className="subTitle">{service.text}</p>
      <div className="serviceList">
        {service.list.map((item, i) => (
          <span key={i}>
            <img  
              loading="lazy"
              src={arrow_3}
              alt="Icon"
            />
            {item}
          </span>
        ))}
      </div>

      <span className="more">
        Read more
        <img
          loading="lazy"
          src={arrow_3}
          alt="Icon"
        />
      </span>
    </motion.a>
  );
}

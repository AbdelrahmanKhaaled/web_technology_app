import { motion } from "framer-motion";
import "../../styles/ReusableComponents/service.css";
import arrow_4 from "../../assets/arrow-4.png";
import arrow_3 from "../../assets/arrow-3.png";
import Service_Line from "./service_line";
import { useRef } from "react";

export default function Service_Home({ service, index }) {

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

  const listRef = useRef(null);

  const handleHover = () => {
    const lines = listRef.current.querySelectorAll(".serviceLine");

    // Reset animation
    lines.forEach((line) => {
      line.classList.remove("show");
      void line.offsetWidth;
    });

    // Add stagger animation
    lines.forEach((line, i) => {
      setTimeout(() => {
        line.classList.add("show");
      }, i * 120); // delay between lines
    });
  };

  return (
    <motion.a
      key={index}
      href={service.href}
      className="serviceItem"
      {...fadeUp(service.delay)}
      onMouseEnter={handleHover}
    >
      <div className="serviceRoute">
        <img
          loading="lazy"
          className="serviceIcon"
          src={service.icon}
          alt="servicesIcon"
        />
        <span className="icon">
          <img loading="lazy" src={arrow_4} alt="image" />
        </span>
      </div>
      <h3 className="title">{service.title}</h3>
      <p className="subTitle">{service.text}</p>
      <div className="serviceList"  ref={listRef}>
        {service.list.map((item, i) => (
          <Service_Line item={item} i={i} />
        ))}
      </div>

      <span className="more">
        Read more
        <img loading="lazy" src={arrow_3} alt="Icon" />
      </span>
    </motion.a>
  );
}

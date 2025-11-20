import "../../styles/ReusableComponents/vision_value.css";
import { motion } from "framer-motion";

export default function Vision_Value({ item, index }) {
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
    <motion.div className="value" key={index} {...fadeUp(400 + index * 50)}>
      <img loading="lazy" src={item.src} alt={item.alt} />
      <h6>{item.alt}</h6>
    </motion.div>
  );
}

import "../../styles/ReusableComponents/background_component.css";
import { motion } from "framer-motion";

export default function Background_Component({ head, content }) {

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
    <motion.div className="hero" {...fadeUp(50)}>
      <div class="shapes">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="text">
        <motion.h1 class="title" {...fadeUp(100)}>
          {head}
        </motion.h1>
        <motion.h6 class="des" {...fadeUp(150)}>
          {content}
        </motion.h6>
      </div>
    </motion.div>
  );
}

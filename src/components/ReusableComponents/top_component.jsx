import "../../styles/ReusableComponents/top_component.css";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import arrow from "../../assets/pageArrow.png";

export default function Top_Component({ head, content }) {
  const { t } = useTranslation();
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
    <motion.div className="sectionTop" {...fadeUp(0)}>
      <div className="top">
        <motion.h4 className="secSubTitle animate_words" {...fadeUp(50)}>
          <div className="anim-reveal-line">{head}</div>
        </motion.h4>

        <motion.h1 className="secTitle animate_words" {...fadeUp(100)}>
          <div className="anim-reveal-line">{content}</div>
        </motion.h1>
      </div>

      <motion.a href="portfolio" className="outlineGradient" {...fadeUp(150)}>
        <span>
          {t("portfolioShowAll")}
          <img loading="lazy" src={arrow} alt="arrow" />
        </span>
      </motion.a>
    </motion.div>
  );
}

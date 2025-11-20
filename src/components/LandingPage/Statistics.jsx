import { motion } from "framer-motion";
import "../../styles/LandingPage/Statistics.css";
import Counter from "../ReusableComponents/Countup";
import { useTranslation } from "react-i18next";

export default function Statistics() {
  const { t } = useTranslation();

  const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: delay / 1000 },
    },
  });

  return (
    <section className="stats">
      <motion.div
        className="container"
        variants={fadeUp(50)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="shapes">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="top">
          <motion.h4
            className="secSubTitle animate_words"
            variants={fadeUp(50)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {t("statisticHead1")}
          </motion.h4>

          <motion.h1
            className="secTitle animate_words"
            variants={fadeUp(100)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {t("statisticHead2")}
          </motion.h1>
        </div>

        <div className="all">
          {[
            { end: 15, label: t("statistic1"), delay: 100, suffix: " +" },
            { end: 256, label: t("statistic2"), delay: 150, suffix: " +" },
            { end: 36, label: t("statistic3"), delay: 200, suffix: " +" },
            { end: 17, label: t("statistic4"), delay: 250, suffix: " +" },
          ].map((item) => (
            <Counter value={item} animate={true} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

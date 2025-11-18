import { useState } from "react";
// import { Link } from "react-router-dom";
// import "./ClothesPage.css";
import "../../styles/LandingPage/Faqs.css";
import { motion } from 'framer-motion';
import { useTranslation } from "react-i18next";
import arrow from "./assets/pageArrow.png";

export default function Faqs() {
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);

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
    <section class="faqSection activeNavClass" id="faq">
      <div class="container">
        <div class="sectionTop">
          <div class="top">
            <motion.h4 class="secSubTitle animate_words" {...fadeUp(50)}>{t("faqHead1")}</motion.h4>
            <motion.h1 class="secTitle animate_words" {...fadeUp(100)}>
              {t("faqHead2")}
            </motion.h1>
          </div>
          <motion.a
            href="/faqs"
            class="outlineGradient"
            {...fadeUp(50)}
          >
            <span>
              {t("faqShowAll")}
              <img
                loading="lazy"
                src={arrow}
                alt="arrow"
              ></img>
            </span>
          </motion.a>
        </div>

        <motion.div className="faq-item" {...fadeUp(200)}>
          <div className="faq-question" onClick={() => setOpen(!open)}>
            <h3 className={`${open ? "Colored" : ""}`}>
              {t("faqQuestion")}
            </h3>
            <span className={`arrow ${open ? "open" : ""}`}></span>
          </div>

          <div className={`faq-answer ${open ? "show" : ""}`}>
            <p>
              {t("faqAnswer")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

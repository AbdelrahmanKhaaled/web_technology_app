import { useState } from "react";
// import { Link } from "react-router-dom";
// import "./ClothesPage.css";
import "../../styles/LandingPage/Careers.css";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import background from "./assets/body-bg.png";

export default function Faq() {
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
    <content>
      <img src={background} class="body-overlay"></img>

      <section class="faqSection activeNavClass" id="faq">
        <div class="container">
          <section class="hero aos-init aos-animate" data-aos="fade-up">
            <div class="shapes">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div class="text">
              <h1 class="title animate_words">{t("faqDetailsHead")}</h1>
              <h6 class="des animate_words">{t("faqDetailsContent")}</h6>
            </div>
          </section>
          <motion.div className="faq-item" {...fadeUp(200)}>
            <div className="faq-question" onClick={() => setOpen(!open)}>
              <h3 className={`${open ? "Colored" : ""}`}>{t("faqQuestion")}</h3>
              <span className={`arrow ${open ? "open" : ""}`}></span>
            </div>

            <div className={`faq-answer ${open ? "show" : ""}`}>
              <p>{t("faqAnswer")}</p>
            </div>
          </motion.div>
        </div>
      </section>
    </content>
  );
}

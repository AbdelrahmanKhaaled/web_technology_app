import { useState } from "react";
import "../../styles/LandingPage/Faqs.css";
import { motion } from 'framer-motion';
import { useTranslation } from "react-i18next";
import Top_Component from "../ReusableComponents/top_component";

export default function Faqs() {
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);

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
    <section class="faqSection activeNavClass" id="faq">
      <div class="container">
        <Top_Component head={t("faqHead1")} content={t("faqHead2")} link={"faqs"}/>
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


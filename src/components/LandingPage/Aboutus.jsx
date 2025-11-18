import { useState, useRef, useEffect } from "react";
import "../../styles/LandingPage/Aboutus.css";
import { motion } from "framer-motion";
import Counter from "../ReusableComponents/Countup";
import { useTranslation } from "react-i18next";

export default function Aboutus() {
  // const counterRef = useRef(null);
  const { t } = useTranslation();

  const item = { end: 2017, label: t("aboutEstablishment"), suffix: "" };

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay: delay / 1000, ease: "easeOut" },
    viewport: { once: true, amount: 0.2 },
  });

  const text = t("aboutHead2");
  const textRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!textRef.current) return;
      const rect = textRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const visible = Math.min(
        Math.max(
          (windowHeight - rect.top) / (windowHeight + rect.height) - 0.3,
          0
        ),
        1
      );
      setProgress(visible);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section class="activeNavClass aboutPage" id="about">
      <div class="container">
        <section class="row">
          {/* <div class="img-content">
            <div class="lazyImg">
              <div class="lazyDiv loaded">
                <div class="simpleParallax simple-parallax-initialized">
                  <img
                    loading="lazy"
                    class="lazy parallax"
                    data-src="#"
                    alt="image"
                    src="#"
                    data-loaded="true"
                  ></img>
                </div>
              </div>
            </div>
          </div> */}
          <div class="img-content">
            <div class="info">
              <motion.h4 class="sectionTitle" {...fadeUp(50)}>
                {t("aboutHead1")}
              </motion.h4>
              <h1 class="title text_invert ">
                <div ref={textRef} className="scroll-text">
                  {text.split("").map((char, index) => {
                    const threshold = index / text.length;
                    const isColored = progress * 3 > threshold;
                    return (
                      <div
                        key={index}
                        className={`${isColored ? "colored" : ""}`}
                      >
                        {char}
                      </div>
                    );
                  })}
                </div>
              </h1>
              <motion.p class="des" {...fadeUp(50)}>
                {t("aboutContent")}
              </motion.p>
              {/* <Download value={"company"} /> */}
              <Counter value={item} animate={false} />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

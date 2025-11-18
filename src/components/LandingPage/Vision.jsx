// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import "./ClothesPage.css";
import "../../styles/LandingPage/Vision.css";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import focus from "../../assets/vision_icons/focus.png";
import innovation from "../../assets/vision_icons/innovation.png";
import learning from "../../assets/vision_icons/learning.png";
import quality from "../../assets/vision_icons/quality.png";
import quick from "../../assets/vision_icons/quick.png";
import sustainability from "../../assets/vision_icons/sustainability.png";
import teamwork from "../../assets/vision_icons/teamwork.png";

export default function VisionSection() {
  const { t } = useTranslation();

  // Reusable fade-up animation
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay: delay / 1000, ease: "easeOut" },
    viewport: { once: true, amount: 0.2 },
  });

  const jewel = "src/assets/videos/jewel.mp4"

  return (
    <section className="activeNavClass vision">
      <div className="container">
        <div className="row">
          {/* Vision */}
          <motion.div className="vision column" {...fadeUp(50)}>
            <motion.div className="group" {...fadeUp(100)}>
              <video playsInline autoPlay loop muted>
                <source
                  src={jewel}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <div className="text">
                <h3 className="title">{t("visionVisionHead")}</h3>
                <p className="des">
                  {t("visionVisionContent")}
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Message */}
          <motion.div className="message column" {...fadeUp(150)}>
            <motion.div className="group" {...fadeUp(200)}>
              <video playsInline autoPlay loop muted>
                <source
                  src={jewel}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <div className="text">
                <h3 className="title">{t("visionMessageHead")}</h3>
                <p className="des">
                  {t("visionMessageContent")}
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Values */}
          <motion.div className="values full-width" {...fadeUp(250)}>
            <motion.div className="group" {...fadeUp(300)}>
              <div className="text">
                <h3 className="title">{t("visionValueHead")}</h3>
                <p className="des">
                  {t("visionValueContent")}
                </p>

                <div className="values" {...fadeUp(350)}>
                  {[
                    { src: innovation, alt: t("visionInnovation") },
                    { src: quality, alt: t("visionQuality") },
                    {
                      src: focus,
                      alt: t("visionFocusClient"),
                    },
                    { src: teamwork, alt: t("visionTeamwork") },
                    {
                      src: quick,
                      alt: t("visionQuickResponse"),
                    },
                    {
                      src: learning,
                      alt: t("visionContinuousLearning"),
                    },
                    { src: sustainability, alt: t("visionSustainability") },
                  ].map((item, index) => (
                    <motion.div
                      className="value"
                      key={index}
                      {...fadeUp(400 + index * 50)}
                    >
                      <img
                        loading="lazy"
                        src={item.src}
                        alt={item.alt}
                      />
                      <h6>{item.alt}</h6>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
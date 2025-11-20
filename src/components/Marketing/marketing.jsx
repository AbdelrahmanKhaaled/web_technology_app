import "../../styles/Marketing/marketing.css";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import call from "../../assets/marketing/call.png";
import egypt from "../../assets/marketing/egypt.png";
import saudi from "../../assets/marketing/saudi.png";
import logo from "../../assets/new_logo.png";
import whatsapp from "../../assets/marketing/whatsapp.png";
import mailbox from "../../assets/marketing/mailbox.png";
import Background_Component from "../ReusableComponents/background_component";
import background from "../../assets/body-bg.png";

export default function Marketing() {
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
    <content>
      <img src={background} class="body-overlay"></img>
      <Background_Component head={t("marketingHead")} content={t("marketingContent")}/>

      <section class="activeNavClass marketing" id="marketing">
        <div class="container">
          <motion.p class="hint" {...fadeUp(50)}>
            {t("marketingMarketer1")}
          </motion.p>
          <motion.h2 class="title" {...fadeUp(100)}>
            {t("marketingMarketer2")}
          </motion.h2>
          <div class="ourMarketers">
            <div class="row">
              <div class="marketer">
                <div class="content">
                  <img
                    loading="lazy"
                    src={egypt}
                    alt="image"
                  ></img>
                  <p class="locaton"> {t("marketingAgent1")} </p>
                </div>
                <h4 class="name"> محمد العشري </h4>
                <div class="contactMarketer">
                  <a href="https://wa.me/01099347981" class="whatsApp">
                    <img
                      loading="lazy"
                      src={whatsapp}
                      alt="image"
                    ></img>
                  </a>
                  <a href="mailto:" class="email">
                    <img
                      loading="lazy"
                      src={mailbox}
                      alt="image"
                    ></img>
                  </a>
                  <a href="tel:01099347981" class="call">
                    <img
                      loading="lazy"
                      src={call}
                      alt="image"
                    ></img>
                  </a>
                </div>
              </div>
              <div class="marketer">
                <div class="content">
                  <img
                    loading="lazy"
                    src={saudi}
                    alt="image"
                  ></img>
                  <p class="locaton"> {t("marketingAgent2")} </p>
                </div>
                <h4 class="name"> احمد ابوعتمان </h4>
                <div class="contactMarketer">
                  <a href="https://wa.me/+966 57 201 9410" class="whatsApp">
                    <img
                      loading="lazy"
                      src={whatsapp}
                      alt="image"
                    ></img>
                  </a>
                  <a href="mailto:" class="email">
                    <img
                      loading="lazy"
                      src={mailbox}
                      alt="image"
                    ></img>
                  </a>
                  <a href="tel:+966 54 321 4041" class="call">
                    <img
                      loading="lazy"
                      src={call}
                      alt="image"
                    ></img>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="howToBeMarketer mbFooter">
        <div class="container">
          <motion.p class="hint" {...fadeUp(50)}>
            {t("marketingPartner1")}
          </motion.p>
          <motion.h2 class="title" {...fadeUp(100)}>
            {t("marketingPartner2")}
          </motion.h2>
          <div class="timeLine ">
            <motion.div
              class="timeLineItem"
              {...fadeUp(150)}
            >
              <img
                loading="lazy"
                class="favimg"
                src={logo}
                alt="Image alt"
              ></img>
              <h5> {t("marketingMarketerHead1")} </h5>
              <p>
                {t("marketingMarketerContent1")}
              </p>
            </motion.div>
            <motion.div
              class="timeLineItem"
              {...fadeUp(200)}
            >
              <img
                loading="lazy"
                class="favimg"
                src={logo}
                alt="Image alt"
              ></img>
              <h5> {t("marketingMarketerHead1")} </h5>
              <p>
                {t("marketingMarketerContent2")}
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </content>
  );
}

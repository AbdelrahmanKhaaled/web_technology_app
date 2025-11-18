import { motion } from "framer-motion";
import "../../styles/LandingPage/Services.css";
import Service_Home from "../ReusableComponents/service";
import { useTranslation } from "react-i18next";
import icon_1 from "../../assets/services_icons/icon1.png";
import icon_2 from "../../assets/services_icons/icon2.png";
import icon_3 from "../../assets/services_icons/icon3.png";
import icon_4 from "../../assets/services_icons/icon4.png";
import icon_5 from "../../assets/services_icons/icon5.png";
import icon_6 from "../../assets/services_icons/icon6.png";

export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      delay: 50,
      title: t("service1"),
      icon: icon_1,
      text: t("serviceContent"),
      href: "/services/1",
      list: [
        t("serviceList1_1"),
        t("serviceList1_2"),
        t("serviceList1_3"),
        t("serviceList1_4"),
        t("serviceList1_5"),
      ],
    },
    {
      delay: 100,
      title: t("service2"),
      href: "/services/1",
      icon: icon_2,
      text: t("serviceContent"),
      list: [
        t("serviceList2_1"),
        t("serviceList2_2"),
        t("serviceList2_3"),
        t("serviceList2_4"),
        t("serviceList2_5"),
      ],
    },
    {
      delay: 150,
      title: t("service3"),
      href: "/services/1",
      icon: icon_3,
      text: t("serviceContent"),
      list: [
        t("serviceList3_1"),
        t("serviceList3_2"),
        t("serviceList3_3"),
        t("serviceList3_4"),
        t("serviceList3_5"),
      ],
    },
    {
      delay: 200,
      title: t("service4"),
      href: "/services/1",
      icon: icon_4,
      text: t("serviceContent"),
      list: [
        t("serviceList4_1"),
        t("serviceList4_2"),
        t("serviceList4_3"),
        t("serviceList4_4"),
        t("serviceList4_5"),
      ],
    },
    {
      delay: 250,
      title: t("service5"),
      href: "/services/1",
      icon: icon_5,
      text: t("serviceContent"),
      list: [
        t("serviceList5_1"),
        t("serviceList5_2"),
        t("serviceList5_3"),
        t("serviceList5_4"),
        t("serviceList5_5"),
      ],
    },
    {
      delay: 300,
      title: t("service6"),
      href: "/services/1",
      icon: icon_6,
      text: t("serviceContent"),
      list: [
        t("serviceList6_1"),
        t("serviceList6_2"),
        t("serviceList6_3"),
        t("serviceList6_4"),
        t("serviceList6_5"),
      ],
    },
    {
      delay: 350,
      title: t("service7"),
      href: "/services/1",
      icon: icon_1,
      text: t("serviceContent"),
      list: [
        t("serviceList5_1"),
        t("serviceList5_2"),
        t("serviceList5_3"),
        t("serviceList5_4"),
        t("serviceList5_5"),
      ],
    },
    {
      delay: 400,
      title: t("service8"),
      href: "/services/1",
      icon: icon_2,
      text: t("serviceContent"),
      list: [
        t("serviceList6_1"),
        t("serviceList6_2"),
        t("serviceList6_3"),
        t("serviceList6_4"),
        t("serviceList6_5"),
      ],
    },
  ];

  // Reusable fade-up animation (identical logic to VisionSection)
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: {
      duration: 0.4,
      delay: delay / 1000,
      ease: [0.42, 0, 0.58, 1], // smoother natural curve
    },
    viewport: { once: true, amount: 0.2 },
  });

  return (
    <section className="activeNavClass serviceArea" id="services">
      <div className="container">
        <div className="serviceTop">
          <motion.h4 className="secSubTitle animate_words" {...fadeUp(50)}>
            <div className="anim-reveal-line">{t("servicesHead1")}</div>
          </motion.h4>

          <motion.h1 className="secTitle animate_words" {...fadeUp(100)}>
            <div className="anim-reveal-line">
              {t("servicesHead2")}
            </div>
          </motion.h1>

          <motion.p className="hint animate_words" {...fadeUp(150)}>
            <div className="anim-reveal-line">
              {t("servicesContent")}
            </div>
          </motion.p>
        </div>

        <div className="allServices">
          {services.map((service, index) => (
            <Service_Home service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

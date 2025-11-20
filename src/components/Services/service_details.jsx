import { useState } from "react";
import "../../styles/Services/service_details.css";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import background from "../../assets/body-bg.png";
import icon from "../../assets/services_icons/icon1.png";
import Service_Line from "../ReusableComponents/service_line";
import Order_Form from "../ReusableComponents/order_form";

export default function Service_Details() {
  const { t } = useTranslation();

  const serviceList = [
    t("serviceDetailsList1"),
    t("serviceDetailsList2"),
    t("serviceDetailsList3"),
    t("serviceDetailsList4"),
    t("serviceDetailsList5"),
  ];

  const [showForm, setShowForm] = useState(false);

  const showFormFun = () => {
    setShowForm(!showForm);
  };

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
    <content class="service">
      <img src={background} class="body-overlay"></img>

      <section class="banner">
        <div class="container">
          <div class="links">
            <a href="#home">{t("headerHome")}</a>
            <a href="#services">{t("headerServices")}</a>
            <a href="!#" class="active">
              {t("service1")}
            </a>
          </div>
        </div>
      </section>
      <section class="productDetails position-relative z-2">
        <div class="container">
          <div class="row">
            <div class="col-md-8 p-2">
              <motion.div class="details" {...fadeUp(50)}>
                <div class="content p-3">
                  <img
                    loading="lazy"
                    class="icon serviceIcon"
                    src={icon}
                    alt="servicesIcon"
                  ></img>
                  <motion.h4 class="title" {...fadeUp(100)}>
                    {" "}
                    {t("service1")}{" "}
                  </motion.h4>
                  <motion.p class="des" {...fadeUp(150)}>
                    {t("serviceContent")}
                  </motion.p>
                </div>
              </motion.div>
            </div>
            <div class="col-md-4 p-2">
              <motion.div class="productBox" {...fadeUp(200)}>
                <h4 class="title"> {t("serviceDetailsRightHead")} </h4>
                <div class="serviceList">
                  {serviceList.map((item) => (
                    <Service_Line item={item} />
                  ))}
                </div>
                <div class="requestDemo position-relative top-0">
                  <motion.button
                    type="button"
                    class="btn"
                    data-bs-toggle="modal"
                    data-bs-target="#workDetails"
                    {...fadeUp(250)}
                    onClick={showFormFun}
                  >
                    {t("serviceDetailsButton")}
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <Order_Form showForm={showForm} showFormFun={showFormFun} selection={"service"}/>
    </content>
  );
}

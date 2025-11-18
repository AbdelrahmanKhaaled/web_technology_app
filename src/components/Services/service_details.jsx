import { useState } from "react";
import "../../styles/Services/service_details.css";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import background from "../../assets/body-bg.png";
import icon from "../../assets/services_icons/icon1.png";
import arrow_4 from "../../assets/arrow-4.png";
import arrow_3 from "../../assets/arrow-3.png";

export default function Service_Details() {
  const { t } = useTranslation();

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
      <img
        src={background}
        class="body-overlay"
      ></img>

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
                  <motion.h4 class="title aos-init" {...fadeUp(100)}>
                    {" "}
                    {t("service1")}{" "}
                  </motion.h4>
                  <motion.p class="des aos-init" {...fadeUp(150)}>
                    {t("serviceContent")}
                  </motion.p>
                </div>
              </motion.div>
            </div>
            <div class="col-md-4 p-2">
              <motion.div class="productBox" {...fadeUp(200)}>
                <h4 class="title"> {t("serviceDetailsRightHead")} </h4>
                <div class="serviceList">
                  <span>
                    <img
                      loading="lazy"
                      src={arrow_3}
                      alt="Icon"
                    ></img>
                    {t("serviceDetailsList1")}
                  </span>
                  <span>
                    <img
                      loading="lazy"
                      src={arrow_3}
                      alt="Icon"
                    ></img>
                    {t("serviceDetailsList2")}
                  </span>
                  <span>
                    <img
                      loading="lazy"
                      src={arrow_3}
                      alt="Icon"
                    ></img>
                    {t("serviceDetailsList3")}
                  </span>
                  <span>
                    <img
                      loading="lazy"
                      src={arrow_3}
                      alt="Icon"
                    ></img>
                    {t("serviceDetailsList4")}
                  </span>
                  <span>
                    <img
                      loading="lazy"
                      src={arrow_3}
                      alt="Icon"
                    ></img>
                    {t("serviceDetailsList5")}
                  </span>
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
      <div
        class={`modal fade modalOpenClose ${showForm ? "show" : ""}`}
        id="workDetails"
        tabindex="-1"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <button
              type="button"
              class="btnClose"
              data-bs-dismiss="modal"
              onClick={showFormFun}
            >
              X
            </button>
            <div class="modal-body p-0">
              <form
                class="form from-submit-global has-validation-callback"
                id="myServiceForm"
                action="#"
                method="POST"
              >
                <input
                  type="hidden"
                  name="_token"
                  value="RjmjOxeOOMaSXqOhMP23Jfm003ByP6LJScNEIGaj"
                  autocomplete="off"
                ></input>{" "}
                <div class="form-group">
                  <label for="name">
                    {" "}
                    {t("contactForm1")}<span>*</span>
                  </label>
                  <input
                    type="text"
                    data-validation="required"
                    class="form-control"
                    id="name"
                    name="name"
                  ></input>
                </div>
                <div class="form-group">
                  <label for="email">
                    {" "}
                    {t("contactForm2")}<span>*</span>
                  </label>
                  <input
                    type="email"
                    data-validation="required"
                    class="form-control"
                    id="email"
                    name="email"
                  ></input>
                </div>
                <div class="form-group">
                  <label for="phone">
                    {" "}
                    {t("contactForm3")}<span>*</span>
                  </label>
                  <input
                    type="tel"
                    data-validation="required"
                    class="form-control"
                    id="phone"
                    name="phone"
                  ></input>
                </div>
                <div class="form-group">
                  <label for="service_id">
                    {" "}
                    {t("serviceDetailsForm1")}<span>*</span>
                  </label>
                  <select
                    name="service_id"
                    data-validation="required"
                    id="service"
                    class="form-select"
                  >
                    <option value="6">{t("serviceDetailsFormList1")}</option>
                    <option value="5">{t("serviceDetailsFormList2")}</option>
                    <option value="4">{t("serviceDetailsFormList3")}</option>
                    <option value="3">{t("serviceDetailsFormList4")}</option>
                    <option value="2">{t("serviceDetailsFormList5")}</option>
                    <option value="1" selected="">
                      {t("serviceDetailsFormList6")}
                    </option>
                  </select>
                </div>
                <button
                  type="submit"
                  id="SubmitServiceForm"
                  class="outlineGradient"
                >
                  <span>{t("contactForm6")}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </content>
  );
}

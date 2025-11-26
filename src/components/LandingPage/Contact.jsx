import { useState } from "react";
import "../../styles/LandingPage/Contact.css";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  const [focusStates, setFocusStates] = useState({
    name: false,
    email: false,
    phone: false,
    subject: false,
    message: false,
  });

  const handleFocus = (field) => {
    setFocusStates((prev) => ({ ...prev, [field]: true }));
    console.log(focusStates);
  };

  const handleBlur = (field, value) => {
    if (!value.trim()) {
      setFocusStates((prev) => ({ ...prev, [field]: false }));
    }
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
    <div className="contact" id="contact">
      <div className="container">
        {/* Left side form */}
        <div className="row align-items-center">
          <motion.div class="col-md-6 p-3" {...fadeUp(50)}>
            <form
              action="#"
              id="contactForm"
              class="from-submit-global has-validation-callback"
              method="POST"
            >
              <input
                type="hidden"
                name="_token"
              ></input>
              <div class="form-group">
                <div class="inputfield has-error">
                  <label
                    for="name"
                    class={`${focusStates.name ? "active" : ""}`}
                  >
                    {t("contactForm1")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    data-validation="required"
                    onFocus={() => handleFocus("name")}
                    onBlur={(e) => handleBlur("name", e.target.value)}
                    class="is-invalid"
                  ></input>
                  <span class="highlight"></span>
                </div>
                <div class="inputfield has-error">
                  <label
                    for="email"
                    class={`${focusStates.email ? "active" : ""}`}
                  >
                    {t("contactForm2")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    data-validation="required"
                    onFocus={() => handleFocus("email")}
                    onBlur={(e) => handleBlur("email", e.target.value)}
                    class="is-invalid"
                  ></input>
                  <span class="highlight"></span>
                </div>
              </div>
              <div class="form-group">
                <div class="inputfield">
                  <label
                    for="phone"
                    class={`${focusStates.phone ? "active" : ""}`}
                  >
                    {t("contactForm3")}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    data-validation="required"
                    onFocus={() => handleFocus("phone")}
                    onBlur={(e) => handleBlur("phone", e.target.value)}
                    class="is-invalid"
                  ></input>
                  <span class="highlight"></span>
                </div>
                <div class="inputfield">
                  <label
                    for="subject"
                    class={`${focusStates.subject ? "active" : ""}`}
                  >
                    {t("contactForm4")}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    data-validation="required"
                    name="subject"
                    onFocus={() => handleFocus("subject")}
                    onBlur={(e) => handleBlur("subject", e.target.value)}
                    class="is-invalid"
                  ></input>
                  <span class="highlight"></span>
                </div>
              </div>
              <div class="form-group">
                <div class="inputfield">
                  <label
                    for="message"
                    class={`message-label ${focusStates.message ? "active" : ""}`}
                  >
                    {t("contactForm5")}
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    data-validation="required"
                    onFocus={() => handleFocus("message")}
                    onBlur={(e) => handleBlur("message", e.target.value)}
                    class="textarea is-invalid"
                  ></textarea>
                  <span class="highlight"></span>
                </div>
              </div>
              <button
                type="submit"
                id="submitContact"
                class="outlineGradient"
                disabled=""
              >
                <span>{t("contactForm6")}</span>
              </button>
            </form>
          </motion.div>

          {/* Right side text */}
          <motion.div class="col-md-6 p-3" {...fadeUp(100)}>
            <div class="contact_info">
              <div class="top">
                <h4 class="secSubTitle animate_words">{t("contactHead1")}</h4>
                <h1 class="secTitle animate_words">
                  {t("contactHead2")}
                </h1>
                <p class="hint animate_lines">
                  {t("contactContent")}
                </p>
              </div>
              <ul>
                <motion.li class="field" {...fadeUp(150)}>
                  <div class="icon">
                    <svg
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      xmlns="http://www.w3.org/2000/svg"
                      id="Layer_1"
                      data-name="Layer 1"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path d="M18,6c0-3.309-2.691-6-6-6S6,2.691,6,6c0,2.968,2.166,5.439,5,5.916v11.084c0,.552,.448,1,1,1s1-.448,1-1V11.916c2.834-.477,5-2.948,5-5.916Zm-6,4c-2.206,0-4-1.794-4-4s1.794-4,4-4,4,1.794,4,4-1.794,4-4,4Z"></path>
                    </svg>
                  </div>
                  <div class="text">
                    <h4>{t("contactVisit")}</h4>
                    <a
                      href="#"
                      target="_blank"
                    >
                      {t("contactLocation")}
                    </a>
                  </div>
                </motion.li>
                <motion.li class="field" {...fadeUp(200)}>
                  <div class="icon">
                    <svg
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      xmlns="http://www.w3.org/2000/svg"
                      id="Layer_1"
                      data-name="Layer 1"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path d="M18,6c0-3.309-2.691-6-6-6S6,2.691,6,6c0,2.968,2.166,5.439,5,5.916v11.084c0,.552,.448,1,1,1s1-.448,1-1V11.916c2.834-.477,5-2.948,5-5.916Zm-6,4c-2.206,0-4-1.794-4-4s1.794-4,4-4,4,1.794,4,4-1.794,4-4,4Z"></path>
                    </svg>
                  </div>
                  <div class="text">
                    <h4>{t("contactMessage")}</h4>
                    <a href="mailto:info@aliweb.ch">info@aliweb.ch</a>
                  </div>
                </motion.li>
                <motion.li class="field" {...fadeUp(250)}>
                  <div class="icon">
                    <svg
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      xmlns="http://www.w3.org/2000/svg"
                      id="Layer_1"
                      data-name="Layer 1"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path d="M18,6c0-3.309-2.691-6-6-6S6,2.691,6,6c0,2.968,2.166,5.439,5,5.916v11.084c0,.552,.448,1,1,1s1-.448,1-1V11.916c2.834-.477,5-2.948,5-5.916Zm-6,4c-2.206,0-4-1.794-4-4s1.794-4,4-4,4,1.794,4,4-1.794,4-4,4Z"></path>
                    </svg>
                  </div>
                  <div class="text">
                    <h4>{t("contactCall")}</h4>
                    <div class="d-flex flex-column gap-2">
                      <a href="tel:+41797581929">+41 79 758 19 29</a>
                    </div>
                  </div>
                </motion.li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}


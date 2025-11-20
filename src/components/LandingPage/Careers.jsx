import "../../styles/LandingPage/Careers.css";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Careers() {
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
    <section class="activeNavClass careers" id="careers">
      <div class="container">
        <div class="row w-100">
          <div class="col-lg-8 p-2">
            <div class="top">
              <motion.h4 class="secSubTitle animate_words" {...fadeUp(50)}>
                {t("careerHead1")}
              </motion.h4>
              <motion.h1 class="secTitle animate_words" {...fadeUp(100)}>
                {t("careerHead2")}
              </motion.h1>
              <motion.p class="hint animate_lines" {...fadeUp(150)}>
                {t("careerContent")}
              </motion.p>
            </div>
          </div>
          <div class="col-lg-4 p-2">
            <motion.form
              action="#"
              id="applyJobForm"
              method="POST"
              class="from-submit-global has-validation-callback"
              {...fadeUp(50)}
            >
              <h6 class="hint">{t("careerForm1")}</h6>
              <input
                type="text"
                placeholder={t("careerForm2")}
                required
                class="form-control"
                name="name"
              ></input>
              <input
                type="number"
                placeholder={t("careerForm3")}
                required
                class="form-control"
                name="phone"
              ></input>
              <select
                name="job_id"
                id="job_id"
                class="form-select"
                required
              >
                <option>
                  {t("careerForm4")}
                </option>
                <option value="1"> {t("careerFormPHP")}</option>
              </select>
              <input
                type="file"
                placeholder="Upload your CV"
                class="form-control"
                name="cv_file"
                required
                accept=".pdf,.doc,.docx,.txt"
              ></input>

              <button
                type="submit"
                class="outlineGradient"
                id="submitBtn"  
              >
                {t("careerForm7")}
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}

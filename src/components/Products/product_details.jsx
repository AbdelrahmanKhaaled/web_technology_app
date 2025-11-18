import { useState } from "react";
// import { Link } from "react-router-dom";
import "../../styles/Products/product_details.css";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Product_Details() {
  const { t } = useTranslation();
  
  const images = {
    image_cover: "/src/assets/project/image_cover.png",
    web: "/src/assets/apps_icons/app_web.png",
    design: "/src/assets/apps_icons/app_design.png"
  }

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
    <content class="product">
      <div class="body-overlay"></div>

      <section class="banner">
        <div class="container">
          <div class="links">
            <a href="#home"> Home </a>
            <a href="/products">Products</a>
            <a href="#!" class="active">
              Mishwar
            </a>
          </div>
        </div>
      </section>

      <section class="productDetails position-relative z-2">
        <div class="container">
          <div class="row">
            <div class="col-md-6 p-2">
              <motion.div class="details" {...fadeUp(50)}>
                <motion.a
                  href="#"
                  data-fancybox="product1"
                  class="view"
                  {...fadeUp(100)}
                >
                  <img
                    loading="lazy"
                    src={images.image_cover}
                    alt="image"
                  ></img>
                </motion.a>
              </motion.div>
              <motion.div class="details" {...fadeUp(150)}>
                <div class="content">
                  <motion.a href="#!" class="title" {...fadeUp(200)}>
                    Mishwar
                  </motion.a>
                  <motion.p class="des" {...fadeUp(250)}>
                    We are **Mishwar**, a leading company in the delivery
                    services sector with extensive experience in effectively
                    meeting our customers' needs with high quality. We are
                    passionate about making the delivery experience easy and
                    convenient for everyone.
                  </motion.p>
                  <div class="workLinks">
                    <div class="workLinks">
                      <a
                        href="#"
                        class="link"
                        target="_balank"
                      >
                        <img
                          loading="lazy"
                          src={images.web}
                          alt="image"
                        ></img>
                        website
                      </a>
                      <a
                        href="#"
                        class="link"
                        target="_balank"
                      >
                        <img
                          loading="lazy"
                          src={images.design}
                          alt="image"
                        ></img>
                        Application design
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            <div class="col-md-6 p-2">
              <motion.div class="productBox" {...fadeUp(350)}>
                <h4 class="title"> System objectives </h4>
                <ul>
                  <li>
                    {" "}
                    At Mishwar, our mission is to enhance the quality of life
                    for our customers by providing exceptional and reliable
                    delivery services. We strive to deliver a delivery
                    experience that exceeds expectations and meets everyone's
                    needs efficiently and affordably.
                  </li>
                  <li>
                    {" "}
                    Our vision is to become market leaders in delivery services
                    by excelling in service and sustainable innovation. We aim
                    to achieve this through investing in advanced technologies,
                    developing the skills of our employees, and building
                    strategic partnerships with our customers and the
                    communities we serve.
                  </li>
                </ul>
              </motion.div>
              <motion.div class="productBox" {...fadeUp(400)}>
                <h4 class="title"> System features </h4>
                <ul>
                  <li>
                    {" "}
                    You can easily book your ride through the app with just a
                    click, without any complications.
                  </li>
                  <li>
                    {" "}
                    We ensure all our drivers are professional and well-trained
                    to guarantee a safe and comfortable journey for passengers.
                  </li>
                  <li>
                    {" "}
                    The real-time trip tracking feature allows you to know the
                    location of your car and when it will arrive.
                  </li>
                  <li>
                    {" "}
                    We are committed to providing safe and secure rides, with
                    strict safety measures for every trip.
                  </li>
                  <li>
                    {" "}
                    We are here to serve you around the clock, whether you need
                    a ride early in the morning or late at night.
                  </li>
                  <li>
                    {" "}
                    We offer competitive and fair prices to ensure excellent
                    value for the rides we provide.
                  </li>
                </ul>
              </motion.div>
              <motion.div class="productBox" {...fadeUp(450)}>
                <h4 class="title"> Programming languages used </h4>
                <div class="features">
                  <span> PHP</span>
                  <span> Laravel</span>
                  <span> Android</span>
                  <span> Switf</span>
                </div>
              </motion.div>
            </div>
            <div class="requestDemo">
              <motion.button
                type="button"
                class="btn"
                data-bs-toggle="modal"
                data-bs-target="#workDetails"
                {...fadeUp(500)}
                onClick={showFormFun}
              >
                Request a trial version
              </motion.button>
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
        <div class="modal-dialog   modal-dialog-centered">
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
                    Name <span>*</span>
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
                    Email <span>*</span>
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
                    Phone <span>*</span>
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
                    Service <span>*</span>
                  </label>
                  <select
                    name="service_id"
                    data-validation="required"
                    id="service"
                    class="form-select"
                  >
                    <option value="6">Design services</option>
                    <option value="5">Cloud services</option>
                    <option value="4">Technical consulting</option>
                    <option value="3">Digital marketing</option>
                    <option value="2">Mobile application development</option>
                    <option value="1" selected="">
                      Website development
                    </option>
                  </select>
                </div>
                <div class="from-group">
                  <script
                    src="https://www.google.com/recaptcha/api.js?hl=en"
                    async=""
                    defer=""
                  ></script>

                  <div
                    data-sitekey="6Lf1pxYrAAAAAGwqQ7jl8Hf3bCKNqBfsXRivC9Gs"
                    class="g-recaptcha"
                  >
                    <div>
                      <div>
                        <iframe
                          title="reCAPTCHA"
                          width="304"
                          height="78"
                          role="presentation"
                          name="a-u0qt4eoe3ye7"
                          frameborder="0"
                          scrolling="no"
                          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                          src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6Lf1pxYrAAAAAGwqQ7jl8Hf3bCKNqBfsXRivC9Gs&amp;co=aHR0cHM6Ly9uYW1pLXRlYy5jb206NDQz&amp;hl=en&amp;v=TkacYOdEJbdB_JjX802TMer9&amp;size=normal&amp;anchor-ms=120000&amp;execute-ms=15000&amp;cb=7z0f5c30vuyg"
                        ></iframe>
                      </div>
                      <textarea
                        id="g-recaptcha-response"
                        name="g-recaptcha-response"
                        class="g-recaptcha-response"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  id="SubmitServiceForm"
                  class="outlineGradient"
                >
                  <span>Send</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </content>
  );
}

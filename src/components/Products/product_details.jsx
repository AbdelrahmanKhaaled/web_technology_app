import { useState } from "react";
import "../../styles/Products/product_details.css";
import { motion } from "framer-motion";
import image_cover from "../../assets/project/image_cover.png";
import web from "../../assets/apps_icons/app_web.png";
import design from "../../assets/apps_icons/app_design.png";
import Order_Form from "../ReusableComponents/order_form";
import background from "../../assets/body-bg.png";

export default function Product_Details() {

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
      ease: [0.42, 0, 0.58, 1],
    },
    viewport: { once: true, amount: 0.2 },
  });

  return (
    <content class="product">
      <img src={background} class="body-overlay"></img>

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
                    src={image_cover}
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
                          src={web}
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
                          src={design}
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
      <Order_Form showForm={showForm} showFormFun={showFormFun} selection={"product"}/>
    </content>
  );
}

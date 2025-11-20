import { useState } from "react";
import "../../styles/LandingPage/Home.css";
import Portfolio from "./Portfolio";
import { useTranslation } from "react-i18next";
import facebook from "../../assets/social_icons/facebook.png";
import linkedin from "../../assets/social_icons/linkedin.png";
import x from "../../assets/social_icons/x.png";
import instagram from "../../assets/social_icons/instagram.png";
import snapshat from "../../assets/social_icons/snapchat.png";
import portfolio from "../../assets/portfolio.png";
import products from "../../assets/products.png";
import Social from "../ReusableComponents/social";
export default function Home() {
  const { t } = useTranslation();

  const [showForm, setShowForm] = useState(false);

  const showFormFun = () => {
    setShowForm(!showForm);
  };

  const icons = [
    { name: "facebook", src: facebook },
    { name: "linkedin", src: linkedin },
    { name: "x", src: x },
    { name: "instagram", src: instagram },
    { name: "snapshat", src: snapshat },
  ];

  return (
    <section class="activeNavClass home" id="home">
      <div class="lines">
        {[...Array(7)].map((_, i) => (
          <span key={i}></span>
        ))}
      </div>
      <div class="content">
        <h1 class="title">{t("homeHead")}</h1>
        <h5 class="des">
          <p>{t("homeContent")}</p>
        </h5>
        <div class="social">
          {icons.map((item) => (
            <Social loading="lazy" item={item} />
          ))}
        </div>
        <div class="btns">
          <a href="/portfolio" class="customBtn">
            <img loading="lazy" src={portfolio} alt="image"></img>
            <span> {t("headerPortfolio")} </span>
          </a>
          <div class="requestDemoBtn">
            <a
              href="#!"
              class="requestDemo"
              data-bs-toggle="modal"
              data-bs-target="#requestQuotation"
              onClick={setShowForm}
            >
              {t("homeRequest")}
            </a>
          </div>
          <a href="/products" class="customBtn">
            <img
              loading="lazy"
              src={products}
              alt="image"
            ></img>
            <span> Our products </span>
          </a>
        </div>
      </div>
    </section>
  );
}

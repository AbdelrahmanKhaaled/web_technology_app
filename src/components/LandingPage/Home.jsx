// import { useState } from "react";
import "../../styles/LandingPage/Home.css";
import Portfolio from "./Portfolio";
import { useTranslation } from "react-i18next";
import facebook from "./assets/social_icons/facebook.png";
import linkedin from "./assets/social_icons/linkedin.png";
import x from "./assets/social_icons/x.png";
import instagram from "./assets/social_icons/instagram.png";
import snapshat from "./assets/social_icons/snapshat.png";
import portfolio from "./assets/portfolio.png";
import products from "./assets/products.png";

export default function Home() {
  const { t } = useTranslation();

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
          <p>
            <p>{t("homeContent1")}</p>
            <br />
            <p>{t("homeContent2")}</p>
            <br />
            <div>{t("homeContent3")}</div>
            <br />
            <div>{t("homeContent4")}</div>
            <br />
            <div>{t("homeContent5")}</div>
            <br />
            <div>{t("homeContent6")}</div>
            <br />
            <div>{t("homeContent7")}</div>
            <br />  
            <div>{t("homeContent8")}</div>
            <br />
            <div>{t("homeContent9")}</div>
            <br />
            <div>{t("homeContent10")}</div>
          </p>
        </h5>
        <div class="social">
          <a href="#">
            <img loading="lazy" src={facebook} alt="facebook"></img>
          </a>
          <a href="#">
            <img
              loading="lazy"
              src={linkedin}
              class="mb-1"
              alt="linkedin"
            ></img>
          </a>
          <a href="#">
            <img loading="lazy" src={x} alt="call"></img>
          </a>
          <a href="#">
            <img loading="lazy" src={instagram} alt="call"></img>
          </a>
          <a href="#">
            <img loading="lazy" src={snapshat} alt="call"></img>
          </a>
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
            >
              {t("homeRequest")}
            </a>
          </div>
          {/* <a href="/products" class="customBtn">
            <img
              loading="lazy"
              src={products}
              alt="image"
            ></img>
            <span> Our products </span>
          </a> */}
        </div>
      </div>
    </section>
  );
}

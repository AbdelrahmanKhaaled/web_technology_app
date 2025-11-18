// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import "./ClothesPage.css";
import "../../styles/LandingPage/Footer.css";
import { useTranslation } from "react-i18next";

import mailbox from "./assets/mailbox.png";
import facebook from "./assets/social_icons/facebook.png";
import linkedin from "./assets/social_icons/linkedin.png";
import x from "./assets/social_icons/x.png";
import instagram from "./assets/social_icons/instagram.png";
import snapshat from "./assets/social_icons/snapshat.png";
import logo from "./assets/new_logo.png";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-3 p-3 ">
            <a href="#">
              <img
                loading="lazy"
                class="logo"
                alt="image"
                src={logo}
              ></img>
            </a>
            <p class="info">{t("footerContent")}</p>
            <p></p>
          </div>
          <div class="col-6 col-lg-3 p-3 ">
            <div class="group">
              <h5 class="title"> {t("headerServices")} </h5>
              <ul>
                <li>
                  <a href="/services/1">{t("footerDesignServices")}</a>
                </li>
                <li>
                  <a href="/services/1">{t("footerCloudServices")}</a>
                </li>
                <li>
                  <a href="/services/1">{t("footerTechnicalConsulting")}</a>
                </li>
                <li>
                  <a href="/services/1">{t("footerDigitalMarketing")}</a>
                </li>
                <li>
                  <a href="/services/1">{t("footerMobileAppDevelopment")}</a>
                </li>
                <li>
                  <a href="/services/1">{t("footerWebsiteDevelopment")}</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col col-lg-3 p-3 ">
            <div class="group">
              <h5 class="title"> {t("footerLinks")} </h5>
              <ul>
                <li>
                  <a href="#home">{t("headerHome")}</a>
                </li>
                <li>
                  <a href="#about">{t("headerAbout")}</a>
                </li>
                {/* <li><a href="#">Blogs</a></li> */}
                <li>
                  <a href="/faqs">{t("faqHead1")}</a>
                </li>
                <li>
                  <a href="#services">{t("headerServices")}</a>
                </li>
                <li>
                  <a href="#contact">{t("headerContact")}</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-6 col-lg-3 p-3 ">
            <div class="group">
              <h5 class="title"> {t("footerContactEmail")} </h5>
              <ul>
                <li>
                  <a href="mailto:contact@domain.com">
                    <img
                      loading="lazy"
                      src={mailbox}
                      alt="Support email alt"
                    ></img>
                    {t("footerSupport")}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img loading="lazy" src={mailbox} alt="Hr email alt"></img>
                    {t("footerHumanResources")}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      loading="lazy"
                      src={mailbox}
                      alt="Sales email alt"
                    ></img>
                    {t("footerSales")}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- copywriting --> */}
        <div class="copywriting">
          <p class="hint">© 2025 {t("footerCopyRight")}</p>
          <div class="social">
            <a href="#" target="_blank">
              <img loading="lazy" src={facebook} alt="facebook"></img>
            </a>
            <a href="#" target="_blank">
              <img
                loading="lazy"
                src={linkedin}
                class="mb-1"
                alt="linkedin"
              ></img>
            </a>
            <a href="#" target="_blank">
              <img loading="lazy" src={x} alt="call"></img>
            </a>
            <a href="#" target="_blank">
              <img loading="lazy" src={instagram} alt="call"></img>
            </a>
            <a href="#" target="_blank">
              <img loading="lazy" src={snapshat} alt="call"></img>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}



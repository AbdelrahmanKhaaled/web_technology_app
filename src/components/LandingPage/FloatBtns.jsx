// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import "./ClothesPage.css";
import "../../styles/LandingPage/FloatBtns.css";
import { useTranslation } from "react-i18next";
import social from "../../assets/social_icons/social.png";
import facebook from "../../assets/social_icons/facebook.png";
import linkedin from "../../assets/social_icons/linkedin.png";
import x from "../../assets/social_icons/x.png";
import instagram from "../../assets/social_icons/instagram.png";
import snapshat from "../../assets/social_icons/snapshat.png";

export default function FloatBtns() {
  const { t } = useTranslation();

  return (
    <section class="floatBtns">
      <span class="main">
        <img
          loading="lazy"
          src={social}
          alt="image"
        >
        </img>
      </span>
      <div class="subs">
        {/* <!-- sub --> */}
        <a href="#" target="_blank">
          <img
            loading="lazy"
            src={facebook}
            alt="image"
          >
          </img>
        </a>
        {/* <!-- sub --> */}
        <a
          href="#"
          target="_blank"
        >
          <img
            loading="lazy"
            src={linkedin}
            alt="image"
          ></img>
        </a>
        {/* <!-- sub --> */}
        <a href="#" target="_blank">
          <img
            loading="lazy"
            src={x}
            alt="image"
          ></img>
        </a>
        {/* <!-- sub --> */}
        <a href="#" target="_blank">
          <img
            loading="lazy"
            src={instagram}
            alt="image"
          ></img>
        </a>
        {/* <!-- sub --> */}
        <a
          href="#"
          target="_blank"
        >
          <img
            loading="lazy"
            src={snapshat}
            alt="image"
          ></img>
        </a>
      </div>
    </section>
  );
}

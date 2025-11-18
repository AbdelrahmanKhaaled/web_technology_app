// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import "./ClothesPage.css";
import "../../styles/LandingPage/FloatBtns.css";
import { useTranslation } from "react-i18next";

export default function FloatBtns() {
  const { t } = useTranslation();

  const images = {
    social: "/src/assets/social_icons/social.png",
    facebook: "/src/assets/social_icons/facebook.png",
    linkedin: "/src/assets/social_icons/linkedin.png",
    x: "/src/assets/social_icons/x.png",
    instagram: "/src/assets/social_icons/instagram.png",
    snapshat: "/src/assets/social_icons/snapchat.png",
  };

  return (
    <section class="floatBtns">
      <span class="main">
        <img
          loading="lazy"
          src={images.social}
          alt="image"
        >
        </img>
      </span>
      <div class="subs">
        {/* <!-- sub --> */}
        <a href="#" target="_blank">
          <img
            loading="lazy"
            src={images.facebook}
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
            src={images.linkedin}
            alt="image"
          ></img>
        </a>
        {/* <!-- sub --> */}
        <a href="#" target="_blank">
          <img
            loading="lazy"
            src={images.x}
            alt="image"
          ></img>
        </a>
        {/* <!-- sub --> */}
        <a href="#" target="_blank">
          <img
            loading="lazy"
            src={images.instagram}
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
            src={images.snapshat}
            alt="image"
          ></img>
        </a>
      </div>
    </section>
  );
}

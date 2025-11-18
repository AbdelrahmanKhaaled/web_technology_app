import { useState, useEffect, useRef } from "react";
import "../../styles/LandingPage/Header.css";

import { Link } from "react-scroll";

import { useTranslation } from "react-i18next";

import { useNavigate } from "react-router-dom";

export default function Header() {
  const { t, i18n } = useTranslation();

  // const changeLanguage = (lng) => {
  //   i18n.changeLanguage(lng);
  //   // document.dir = lng === "ar" ? "rtl" : "ltr"; // 👈 handle direction
  // };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang); // optional – remember user choice
  };

  const navigate = useNavigate();

  const logo = "/src/assets/new_logo.png";

  const menuItems = [
    { name: t("headerHome"), link: "home", type: "section" },
    { name: t("headerAbout"), link: "about", type: "section" },
    { name: t("headerServices"), link: "services", type: "section" },
    // { name: t("headerProducts"), link: "products", type: "page" },
    { name: t("headerPortfolio"), link: "portfolio", type: "page" },
    { name: t("headerMarketing"), link: "marketing", type: "page" },
    { name: t("headerCareers"), link: "careers", type: "section" },
    { name: t("headerContact"), link: "contact", type: "section" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavShow, setIsNavShow] = useState(false);
  const menuRef = useRef(null);

  const handleClickNav = () => {
    setIsNavShow(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsNavShow(false);
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  // Handle navigation logic
  const handleNavClick = (item, idx) => {
    setActiveIndex(idx);

    if (item.type === "page") {
      // Navigate to another page (clean path, no #)
      console.log(item.type);
      navigate(`/${item.link}`);
    } else {
      // Stay on home page and scroll to section
      if (location.pathname !== "") {
        navigate("");
        setTimeout(() => {
          document
            .getElementById(item.link)
            ?.scrollIntoView({ behavior: "smooth" });
          window.history.replaceState(null, "", `#${item.link}`);
        }, 300);
      } else {
        document
          .getElementById(item.link)
          ?.scrollIntoView({ behavior: "smooth" });
        window.history.replaceState(null, "", `#${item.link}`);
      }
    }
  };

  return (
    <header>
      <section class={`inner ${isScrolled ? "scrolled" : ""}`}>
        {/* <!-- brand --> */}
        <a class="navbar-brand" href="#">
          <img loading="lazy" src={logo} alt="image"></img>
        </a>
        {/* <!-- navbar --> */}
        <nav class="navbar navbar-expand-lg">
          <button
            ref={menuRef}
            class="navbar-toggler"
            onClick={() => handleClickNav()}
          >
            <span class="navbar-toggler-icon"></span>
            <span class="navbar-toggler-icon"></span>
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class={`navbar-nav ${isNavShow ? "show" : ""}`}>
            <a class="logo" href="#">
              <img loading="lazy" src={logo} alt="image"></img>
            </a>
            {menuItems.map((item, idx) => (
              <Link
                key={idx}
                class={`navLink ${activeIndex === idx ? "active" : ""}`}
                onClick={() => handleNavClick(item, idx)}
                smooth={true}
                to={`${item.link}`}
                duration={500}
              >
                {item.name}
              </Link>
            ))}
          </div>
          
        </nav>
        <select
            onChange={(e) => changeLanguage(e.target.value)}
            defaultValue={i18n.language}
            className="lang-dropdown"
          >
            <option value="english">English</option>
            <option value="german">German</option>
            <option value="italian">Italiano</option>
          </select>
        {/* <a class="language outlineGradient" href="#">
          <span>ع</span>
        </a> */}
        {/* <button onClick={() => changeLanguage("english")}>En</button>
        <button onClick={() => changeLanguage("german")}>Du</button>
        <button onClick={() => changeLanguage("italian")}>It</button> */}
      </section>
    </header>
  );
}

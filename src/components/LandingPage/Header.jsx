import { useState, useEffect, useRef } from "react";
import "../../styles/LandingPage/Header.css";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/new_logo.png";
import Header_Item from "../ReusableComponents/header_item";

export default function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
    setIsLangShow(false);
  };

  const navigate = useNavigate();

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
  const [isLangShow, setIsLangShow] = useState(false);
  const menuRef = useRef(null);

  const handleClickNav = () => {
    setIsNavShow(true);
  };

  const handleClickLang = () => {
    setIsLangShow(true);
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

    const savedLang = localStorage.getItem("lang");

  // If no language is saved → set Italian as default
  if (!savedLang) {
    localStorage.setItem("lang", "italian");
    i18n.changeLanguage("italian");
  } else {
    // If a language exists → load it
    i18n.changeLanguage(savedLang);
  }

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
    setIsNavShow(false);

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
        <a
          class="navbar-brand"
          onClick={() =>
            handleNavClick({ name: "", link: "home", type: "section" }, 10)
          }
        >
          <img loading="lazy" src={logo} alt="image"></img>
        </a>
        {/* <!-- navbar --> */}
        <nav class="navbar navbar-expand-lg">
          <button ref={menuRef} class="navbar-toggler" onClick={handleClickNav}>
            <span class="navbar-toggler-icon"></span>
            <span class="navbar-toggler-icon"></span>
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class={`navbar-nav ${isNavShow ? "show" : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            <a
              class="logo"
              onClick={() =>
                handleNavClick({ name: "", link: "home", type: "section" }, 10)
              }
            >
              <img loading="lazy" src={logo} alt="image"></img>
            </a>
            {menuItems.map((item, idx) => (
              <Header_Item
                handleNavClick={handleNavClick}
                item={item}
                idx={idx}
                activeIndex={activeIndex}
              />
            ))}
          </div>
        </nav>
        <button onClick={handleClickLang} class="language outlineGradient">
          <span>{localStorage.getItem("lang")}</span>
        </button>
        <div
          className={`popup ${isLangShow ? "show" : ""}`}
          onClick={() => setIsLangShow(false)}
        >
          <div class="lang" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => changeLanguage("english")}>English</button>
            <button onClick={() => changeLanguage("german")}>German</button>
            <button onClick={() => changeLanguage("italian")}>Italian</button>
          </div>
        </div>
      </section>
    </header>
  );
}



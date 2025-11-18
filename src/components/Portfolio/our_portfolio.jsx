// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import React, { useState } from "react";
import "../../styles/Portfolio/our_portfolio.css";
import { motion } from "framer-motion";
import Project from "../ReusableComponents/project";
import { useTranslation } from "react-i18next";
import image_cover from "./assets/project/image_cover.png";
import background from "./assets/body-bg.png";
import search from "./assets/search.png";
import arrow_4 from "./assets/arrow-4.png";

const projects = [
  {
    title: "stadtli Kebab Pizza",
    // desc: "A website for Somu Training Company in the Kingdom of Saudi Arabia.",
    img: image_cover,
    link: "/portfolio/1",
  },
  {
    title: "stadtli Kebab Pizza",
    // desc: "The Abu Batal Slaughterhouse app allows you to purchase the finest livestock meat with ease and convenience...",
    img: image_cover,
    link: "/portfolio/1",
  },
  {
    title: "stadtli Kebab Pizza",
    // desc: "With the Ajel app, you can purchase your needs from participating stores...",
    img: image_cover,
    link: "/portfolio/1",
  },
  {
    title: "stadtli Kebab Pizza",
    // desc: "A website for Dar Daleel Real Estate, a leading real estate company specializing in property marketing and management...",
    img: image_cover,
    link: "/portfolio/1",
  },
  {
    title: "stadtli Kebab Pizza",
    // desc: "A website for Tamim Al-Hussainan Law Firm and Legal Consultations in the Kingdom of Saudi Arabia.",
    img: image_cover,
    link: "/portfolio/1",
  },
  {
    title: "stadtli Kebab Pizza",
    // desc: "A website for Ebhar Platform for book publishing and distribution.",
    img: image_cover,
    link: "/portfolio/1",
  },
];

export default function Our_Portfolio() {
  const { t } = useTranslation();

  const [openSection, setOpenSection] = useState("websites");
  const [filters, setFilters] = useState({
    recruitment: false,
    lawFirm: false,
    maintenanceApps: false,
    ecommerceStores: false,
    applicationDesign: false,
    website: false,
    controlBoard: false,
    androidApplication: false,
    iosApp: false,
    graphicDesign: false,
  });
  const [search, setSearch] = useState("");

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const handleFilterChange = (e) => {
    const { name, checked } = e.target;
    setFilters({ ...filters, [name]: checked });
  };

  const handleApply = () => {
    console.log("Search:", search);
    console.log("Filters:", filters);
  };

  const handleReset = () => {
    setSearch("");
    setFilters({
      recruitment: false,
      lawFirm: false,
      maintenanceApps: false,
      ecommerceStores: false,
      applicationDesign: false,
      website: false,
      controlBoard: false,
      androidApplication: false,
      iosApp: false,
      graphicDesign: false,
    });
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
    <section className=" o_portfolio">
      <img src={background} class="body-overlay"></img>
      <section class="activeNavClass our_portfolio" id="our_portfolio">
        <div class="container">
          <motion.div className="head" {...fadeUp(50)}>
            <div class="shapes">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div class="text">
              <motion.h1 class="title" {...fadeUp(100)}>
                {t("ourPortfolioHead")}
              </motion.h1>
              <motion.h6 class="des" {...fadeUp(150)}>
                {t("ourPortfolioContent")}
              </motion.h6>
            </div>
          </motion.div>
          <div className="layOutProtfolio">
            <motion.div className="filter-sidebar" {...fadeUp(50)}>
              {/* Search box */}
              <motion.div className="search-box" {...fadeUp(100)}>
                <input
                  type="text"
                  placeholder={t("ourPortfolioForm1")}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button className="search-btn">
                  <img src={search} alt="search icon"></img>
                </button>
              </motion.div>

              {/* Websites */}
              <div className="section">
                <div
                  className="section-header"
                  onClick={() => toggleSection("websites")}
                >
                  <span>{t("ourPortfolioForm2")}</span>
                  <span>{openSection === "websites" ? "▴" : "▾"}</span>
                </div>
                {openSection === "websites" && (
                  <div className="section-content">
                    <div className="formGroup">
                      <label>{t("ourPortfolioFormList1")}</label>
                      <input
                        type="checkbox"
                        name="recruitment"
                        checked={filters.recruitment}
                        onChange={handleFilterChange}
                      />
                    </div>
                    <div className="formGroup">
                      <label>{t("ourPortfolioFormList2")}</label>
                      <input
                        type="checkbox"
                        name="lawFirm"
                        checked={filters.lawFirm}
                        onChange={handleFilterChange}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Applications */}
              <div className="section">
                <div
                  className="section-header"
                  onClick={() => toggleSection("applications")}
                >
                  <span>{t("ourPortfolioFormList2")}</span>
                  <span>{openSection === "applications" ? "▴" : "▾"}</span>
                </div>
                {openSection === "applications" && (
                  <div className="section-content">
                    <div className="formGroup">
                      <label>{t("ourPortfolioFormList2")}</label>
                      <input
                        type="checkbox"
                        name="maintenanceApps"
                        checked={filters.maintenanceApps}
                        onChange={handleFilterChange}
                      />
                    </div>
                    <div className="formGroup">
                      <label>{t("ourPortfolioFormList2")}</label>
                      <input
                        type="checkbox"
                        name="ecommerceStores"
                        checked={filters.ecommerceStores}
                        onChange={handleFilterChange}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Other Sections */}
              {[t("ourPortfolioForm4"), t("ourPortfolioForm5")].map((section) => (
                <div className="section" key={section}>
                  <div
                    className="section-header"
                    onClick={() => toggleSection(section)}
                  >
                    <span>{section}</span>
                    <span>{openSection === section ? "▴" : "▾"}</span>
                  </div>
                  {openSection === section && (
                    <div className="section-content">
                      <p>({t("ourPortfolioaddFiltersHere")})</p>
                    </div>
                  )}
                </div>
              ))}

              {/* Project Type/Technology */}
              <div className="section">
                <div
                  className="section-header"
                  onClick={() => toggleSection("Project Type/Technology")}
                >
                  <span>{t("ourPortfolioForm6")}</span>
                  <span>
                    {openSection === "Project Type/Technology" ? "▴" : "▾"}
                  </span>
                </div>
                {openSection === "Project Type/Technology" && (
                  <div className="section-content">
                    <div className="formGroup">
                      <label>{t("ourPortfolioFormList5")}</label>
                      <input
                        type="checkbox"
                        name="applicationDesign"
                        checked={filters.applicationDesign}
                        onChange={handleFilterChange}
                      />
                    </div>
                    <div className="formGroup">
                      <label>{t("ourPortfolioFormList6")}</label>
                      <input
                        type="checkbox"
                        name="website"
                        checked={filters.website}
                        onChange={handleFilterChange}
                      />
                    </div>
                    <div className="formGroup">
                      <label>{t("ourPortfolioFormList7")}</label>

                      <input
                        type="checkbox"
                        name="controlBoard"
                        checked={filters.controlBoard}
                        onChange={handleFilterChange}
                      />
                    </div>
                    <div className="formGroup">
                      <label>{t("ourPortfolioFormList8")}</label>
                      <input
                        type="checkbox"
                        name="androidApplication"
                        checked={filters.androidApplication}
                        onChange={handleFilterChange}
                      />
                    </div>
                    <div className="formGroup">
                      <label>{t("ourPortfolioFormList9")}</label>
                      <input
                        type="checkbox"
                        name="iosApp"
                        checked={filters.iosApp}
                        onChange={handleFilterChange}
                      />
                    </div>
                    <div className="formGroup">
                      <label>{t("ourPortfolioFormList10")}</label>
                      <input
                        type="checkbox"
                        name="graphicDesign"
                        checked={filters.graphicDesign}
                        onChange={handleFilterChange}
                      />
                    </div>
                  </div>
                )}
              </div>
              {/* Buttons */}
              <button className="apply-btn" onClick={handleApply}>
                {t("ourPortfolioForm7")}
              </button>
              <button className="reset-btn" onClick={handleReset}>
                {t("ourPortfolioForm8")}
              </button>
            </motion.div>
            <motion.div
              class="portfolioItems aos-init aos-animate"
              data-aos="fade-up"
              id="divToShow"
              {...fadeUp(50)}
            >
              {projects.map((item) => (
                <Project item={item}/>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </section>
  );
}

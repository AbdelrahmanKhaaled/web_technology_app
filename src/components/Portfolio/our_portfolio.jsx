import { useState } from "react";
import "../../styles/Portfolio/our_portfolio.css";
import { motion } from "framer-motion";
import Project from "../ReusableComponents/project";
import { useTranslation } from "react-i18next";
import image_cover1 from "../../assets/portfolio_images/image_cover1.png";
import image_cover2 from "../../assets/portfolio_images/image_cover2.png";
import image_cover3 from "../../assets/portfolio_images/image_cover3.png";
import image_cover4 from "../../assets/portfolio_images/image_cover4.png";
import image_cover5 from "../../assets/portfolio_images/image_cover5.png";
import image_cover6 from "../../assets/portfolio_images/image_cover6.png";
import image_cover7 from "../../assets/portfolio_images/image_cover7.png";
import image_cover8 from "../../assets/portfolio_images/image_cover8.png";
import image_cover9 from "../../assets/portfolio_images/image_cover9.png";

import project1 from "../../assets/project_mockups/project1.png";
import project2 from "../../assets/project_mockups/project2.png";
import project3 from "../../assets/project_mockups/project3.png";
import project5 from "../../assets/project_mockups/project5.png";
import project7 from "../../assets/project_mockups/project7.png";
import project9 from "../../assets/project_mockups/project9.png";

import background from "../../assets/body-bg.png";
import search_icon from "../../assets/search.png";
import Background_Component from "../ReusableComponents/background_component";

export default function Our_Portfolio() {
  const { t } = useTranslation();

  const projects = [
    {
      title: t("portfolioProject1"),
      // desc: "A website for Somu Training Company in the Kingdom of Saudi Arabia.",
      img: project1,
      link: "/portfolio/1",
      categories: ["website", "ecommerceStores"],
    },
    {
      title: t("portfolioProject2"),
      // desc: "The Abu Batal Slaughterhouse app allows you to purchase the finest livestock meat with ease and convenience...",
      img: project2,
      link: "/portfolio/1",
      categories: ["androidApplication", "applicationDesign"],
    },
    {
      title: t("portfolioProject3"),
      // desc: "With the Ajel app, you can purchase your needs from participating stores...",
      img: project3,
      link: "/portfolio/1",
      categories: ["recruitment", "website"],
    },
    {
      title: t("portfolioProject4"),
      // desc: "A website for Dar Daleel Real Estate, a leading real estate company specializing in property marketing and management...",
      img: project9,
      link: "/portfolio/1",
      categories: ["ecommerceStores", "website"],
    },
    {
      title: t("portfolioProject5"),
      // desc: "A website for Tamim Al-Hussainan Law Firm and Legal Consultations in the Kingdom of Saudi Arabia.",
      img: project5,
      link: "/portfolio/1",
      categories: ["lawFirm", "website"],
    },
    {
      title: t("portfolioProject6"),
      // desc: "A website for Ebhar Platform for book publishing and distribution.",
      img: project5,
      link: "/portfolio/1",
      categories: ["androidApplication", "ecommerceStores"],
    },
    {
      title: t("portfolioProject7"),
      // desc: "A website for Dar Daleel Real Estate, a leading real estate company specializing in property marketing and management...",
      img: project7,
      link: "/portfolio/1",
      categories: ["recruitment", "website"],
    },
    {
      title: t("portfolioProject8"),
      // desc: "A website for Tamim Al-Hussainan Law Firm and Legal Consultations in the Kingdom of Saudi Arabia.",
      img: project1,
      link: "/portfolio/1",
      categories: ["androidApplication", "website"],
    },
    {
      title: t("portfolioProject9"),
      // desc: "A website for Ebhar Platform for book publishing and distribution.",
      img: project9,
      link: "/portfolio/1",
      categories: ["androidApplication", "applicationDesign"],
    },
  ];

  const [openSection, setOpenSection] = useState("websites");
  const [filters, setFilters] = useState({
    recruitment: false,
    maintenanceApps: false,
    ecommerceStores: false,
  });
  const [search, setSearch] = useState("");

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const handleFilterChange = (e) => {
    const { name, checked } = e.target;
    setFilters({ ...filters, [name]: checked });
  };

  const handleReset = () => {
    setSearch("");
    setFilters({
      recruitment: false,
      maintenanceApps: false,
      ecommerceStores: false,
    });
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

  const [applyNow, setApplyNow] = useState(false);

  const handleApply = () => {
    setApplyNow(true);
  };

  const activeFilters = Object.keys(filters).filter((key) => filters[key]);

  const filteredProjects = applyNow
    ? projects.filter((project) => {
        const matchSearch = project.title
          .toLowerCase()
          .includes(search.toLowerCase());

        const matchFilters =
          activeFilters.length === 0 ||
          activeFilters.some((f) => project.categories?.includes(f));

        return matchSearch && matchFilters;
      })
    : projects;

  return (
    <section className=" o_portfolio">
      <img src={background} class="body-overlay"></img>
      <section class="activeNavClass our_portfolio" id="our_portfolio">
        <div class="container">
          <Background_Component head={t("ourPortfolioHead")} content={t("ourPortfolioContent")}/>
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
                  <img src={search_icon} alt="search icon"></img>
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
                  </div>
                )}
              </div>

              {/* Applications */}
              <div className="section">
                <div
                  className="section-header"
                  onClick={() => toggleSection("applications")}
                >
                  <span>{t("ourPortfolioForm3")}</span>
                  <span>{openSection === "applications" ? "▴" : "▾"}</span>
                </div>
                {openSection === "applications" && (
                  <div className="section-content">
                    <div className="formGroup">
                      <label>{t("ourPortfolioFormList3")}</label>
                      <input
                        type="checkbox"
                        name="maintenanceApps"
                        checked={filters.maintenanceApps}
                        onChange={handleFilterChange}
                      />
                    </div>
                    <div className="formGroup">
                      <label>{t("ourPortfolioFormList4")}</label>
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
              {[t("ourPortfolioForm4"), t("ourPortfolioForm5")].map(
                (section) => (
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
                )
              )}

              {/* Buttons */}
              <button className="apply-btn" onClick={handleApply}>
                {t("ourPortfolioForm7")}
              </button>
              <button className="reset-btn" onClick={handleReset}>
                {t("ourPortfolioForm8")}
              </button>
            </motion.div>
            <motion.div
              class="portfolioItems"
            >
              {filteredProjects.length > 0 ? (
                filteredProjects.map((item, index) => (
                  <Project key={index} item={item} />
                ))
              ) : (
                <p class="noResults">{t("noResultsFound")}</p>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </section>
  );
}





import Home from "./Home";
import Aboutus from "./Aboutus";
import Vision from "./Vision";
import Services from "./Services";
import Products from "./Products";
import Statistics from "./Statistics";
import Portfolio from "./Portfolio";
import Careers from "./Careers";
import Faqs from "./Faqs";
import Contact from "./Contact";
import "../../styles/LandingPage/LandingPage.css";
import background from "./assets/body-bg.png";

export default function LandingPage() {
  return (
    <div className="content">
      <img src={background} class="body-overlay"></img>
      <Home />
      <Aboutus />
      <Vision />
      <Services />
      {/* <Products /> */}
      <Statistics />
      <Portfolio />
      <Careers />
      <Faqs />
      <Contact />
    </div>
  );
}

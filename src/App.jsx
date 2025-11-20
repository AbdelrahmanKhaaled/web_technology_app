import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import Header from "./components/LandingPage/Header";
import Infinite from "./components/LandingPage/Infinite";
import Footer from "./components/LandingPage/Footer";
import Whatsapp from "./components/LandingPage/Whatsapp";
import ScrollToTop from "./components/LandingPage/ScrollToTop"; 
import FloatBtns from "./components/LandingPage/FloatBtns";
import Our_Products from "./components/Products/our_products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Marketing from "./components/Marketing/marketing";
import Our_Portfolio from "./components/Portfolio/our_portfolio";
import Product_Details from "./components/Products/product_details";
import Project_Details from "./components/Portfolio/project_details";
import Service_Details from "./components/Services/service_details";
import Faq from "./components/Faqs/faq";

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/products" element={<Our_Products />} /> */}
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/portfolio" element={<Our_Portfolio />} />
          {/* <Route path="/products/1" element={<Product_Details />} /> */}
          <Route path="/portfolio/1" element={<Project_Details />} />
          <Route path="/services/1" element={<Service_Details />} />
          <Route path="/faqs" element={<Faq />} />
        </Routes>
        <Infinite />
        <Footer />
        <Whatsapp />
        <FloatBtns />
      </Router>
    </>
  );
}

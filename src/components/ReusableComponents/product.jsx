import "../../styles/ReusableComponents/product.css";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Product({item, links}) {
  const { t } = useTranslation();

//   const fadeUp = (delay = 0) => ({
//     initial: { opacity: 0, y: 50 },
//     whileInView: { opacity: 1, y: 0 },
//     transition: {
//       duration: 0.6,
//       delay: delay / 1000,
//       ease: [0.42, 0, 0.58, 1], // smoother natural curve
//     },
//     viewport: { once: true, amount: 0.2 },
//   });

  return (
    <div className="productCard"  >
      <a className="view" href={item.link}>
        <img src={item.img} alt={item.name} />
      </a>
      <div className="content">
        <a className="title" href={item.link}>
          {item.name}
        </a>
        <p className="des">
          ADHMN Home Maintenance Company** ADHMN is not just an app .. ADHMN is
          a set of tools designed for you, bringing all home maintenance
          services right to your home, establishment, or retreat. In short,
          ADHMN is an app, a website, a customer service center, equipment, and
          technicians all aimed at providing you with top-notch service. ADHMN
          represents a new way of thinking. Our slogan is "Home maintenance at
          the touch of an app on your phone."
        </p>
        <div className="workLinks">
          {[...Array(item.num)].map((_, index) => (
            <a
              key={index}
              href={links.app}
              className="link"
              target="_blank"
              rel="noreferrer"
            >
              <img loading="lazy" src={links.img} alt="image" />
              Android design
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

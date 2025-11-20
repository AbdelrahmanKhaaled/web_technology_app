import { motion } from "framer-motion";
import "../../styles/ReusableComponents/project.css";
import arrow_4 from "../../assets/arrow-4.png";

export default function Project({item, idx}) {

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: {
      duration: 0.4,
      delay: delay / 1000,
      ease: [0.42, 0, 0.58, 1],
    },
    viewport: { once: true, amount: 0.2 },
  });

  return (
    <motion.a
      className="portfolioItem show"
      href={item.link}
      {...fadeUp(150 + idx * 100)}
    >
      <div className="content">
        <div className="top">
          <h4 className="title">{item.title}</h4>
          <span className="icon">
            <img
              src={arrow_4}
              alt="arrow"
            />
          </span>
        </div>
        <p className="des">{item.desc}</p>
      </div>
      <figure className="image">
        <img className="lazy" src={item.img} alt={item.title} />
      </figure>
      
    </motion.a>
  );
}

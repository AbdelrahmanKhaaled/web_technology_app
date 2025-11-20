import "../../styles/ReusableComponents/header_item.css";
import { Link } from "react-scroll";

export default function Header_Item({ handleNavClick, item, idx, activeIndex }) {

  return (
    <Link
      class={`navLink ${activeIndex === idx ? "active" : ""}`}
      onClick={() => handleNavClick(item, idx)}
      smooth={true}
      to={`${item.link}`}
      duration={500}
    >
      {item.name}
    </Link>
  );
}

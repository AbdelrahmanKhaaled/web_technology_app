import "../../styles/ReusableComponents/service_line.css";
import arrow_3 from "../../assets/arrow-3.png";

export default function Service_Line({ item, i }) {
  return (
    <span className="serviceLine" key={i}>
      <img loading="lazy" src={arrow_3} alt="Icon" />
      {item}
    </span>
  );
}

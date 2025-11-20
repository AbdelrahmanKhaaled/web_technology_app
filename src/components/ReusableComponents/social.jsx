import "../../styles/ReusableComponents/social.css";

export default function Social({ item }) {
  return (
    <a href="#" target="_blank">
      <img loading="lazy" src={item.src} alt={item.name}></img>
    </a>
  );
}

import "../../styles/LandingPage/FloatBtns.css";
import social from "../../assets/social_icons/social.png";
import facebook from "../../assets/social_icons/facebook.png";
import linkedin from "../../assets/social_icons/linkedin.png";
import x from "../../assets/social_icons/x.png";
import instagram from "../../assets/social_icons/instagram.png";
import snapshat from "../../assets/social_icons/snapchat.png";
import Social from "../ReusableComponents/social";

export default function FloatBtns() {

  const icons = [
    { name: "facebook", src: facebook },
    { name: "linkedin", src: linkedin },
    { name: "x", src: x },
    { name: "instagram", src: instagram },
    { name: "snapshat", src: snapshat },
  ];

  return (
    <section class="floatBtns">
      <span class="main">
        <img loading="lazy" src={social} alt="image"></img>
      </span>
      <div class="subs">
        {icons.map((item) => (
          <Social loading="lazy" item={item} />
        ))}
      </div>
    </section>
  );
}

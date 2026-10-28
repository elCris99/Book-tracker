import { Link } from "react-router";
import heroImage from "../../../../assets/images/hero.png";
import "./HeroSection.scss";
import Icon from "../../../../components/Icon";

function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container">
        <div className="hero__inner">
          <div className="hero__content">
            <h1 id="hero-title" className="hero__title">
              Always with you
            </h1>

            <p className="hero__description">
              Some books stay with us long after the final page. Keep them close, along with the
              memories, feelings, and thoughts they leave behind.
            </p>

            <Link to="/explore" className="button" data-type="primary">
              <span>Esplora i libri</span>
              <Icon name="rightArrow" size="md" />
            </Link>
          </div>

          <div className="hero__media">
            <img src={heroImage} alt="Illustrazione di una raccolta di libri" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

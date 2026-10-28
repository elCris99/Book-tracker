import { Link } from "react-router";
import Icon from "../../../../components/Icon";
import ctaImage from "../../../../assets/images/final-cta.png";
import "./FinalCTASection.scss";

function FinalCTASection() {
  return (
    <section className="final-cta" aria-labelledby="final-cta-title">
      <div className="container">
        <div className="final-cta__inner">
          <div className="final-cta__content">
            <h2 id="final-cta-title" className="final-cta__title">
              Make room for your next stories.
            </h2>

            <p className="final-cta__description">
              Create an account and start building a library that tells your own story.
            </p>

            <div className="final-cta__actions">
              <Link to="/register" className="button" data-type="primary">
                <span>Create your account</span>
                <Icon name="rightArrow" size="md" />
              </Link>

              <p className="final-cta__login">
                Already have an account? <Link to="/login">Log in</Link>
              </p>
            </div>
          </div>

          <div className="final-cta__media">
            <img src={ctaImage} alt="A stack of books beside a warm cup of coffee" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinalCTASection;

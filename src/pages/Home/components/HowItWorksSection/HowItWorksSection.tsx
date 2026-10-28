import { Link } from "react-router";
import previewImage from "../../../../assets/images/hero.png";
import Icon from "../../../../components/Icon";
import "./HowItWorksSection.scss";

const steps = [
  {
    number: "01",
    title: "Find a book",
    description: "Search for a title or author that catches your interest.",
  },
  {
    number: "02",
    title: "Give it its place",
    description: "Add it to your collection and choose its reading status.",
  },
  {
    number: "03",
    title: "Keep the memory",
    description: "Update its status, leave a rating, and write a personal note.",
  },
] as const;

function HowItWorksSection() {
  return (
    <section className="how-it-works" aria-labelledby="how-it-works-title">
      <div className="container">
        <div className="how-it-works__inner">
          <div className="how-it-works__preview">
            <div className="how-it-works__preview-header">
              <p className="how-it-works__preview-label">Library preview</p>
              <p className="how-it-works__preview-tag">Static preview</p>
            </div>

            <div className="how-it-works__preview-frame">
              <img
                src={previewImage}
                alt="Preview of a personal book entry with reading status, rating, and note"
              />
            </div>

            <p className="how-it-works__preview-note">
              This is a visual preview. Changes are not saved.
            </p>
          </div>

          <div className="how-it-works__content">
            <h2 id="how-it-works-title" className="how-it-works__title">
              Your library in three simple steps.
            </h2>

            <ol className="how-it-works__steps">
              {steps.map((step) => (
                <li className="how-it-works__step" key={step.number}>
                  <div className="how-it-works__step-number">{step.number}</div>

                  <div className="how-it-works__step-content">
                    <h3 className="how-it-works__step-title">{step.title}</h3>
                    <p className="how-it-works__step-description">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>

            <Link to="/register" className="button" data-type="primary">
              <span>Create your library</span>
              <Icon name="rightArrow" size="md" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;

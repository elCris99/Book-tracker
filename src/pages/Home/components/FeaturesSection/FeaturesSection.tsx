import Icon from "../../../../components/Icon";
import "./FeaturesSection.scss";

const features = [
  {
    icon: "search",
    title: "Discover",
    description: "Find books and authors worth adding to your collection.",
  },
  {
    icon: "books",
    title: "Organize",
    description:
      "Keep track of what you want to read, what you're reading, and what you've finished.",
  },
  {
    icon: "edit",
    title: "Remember",
    description: "Save your ratings, notes, and thoughts on every book.",
  },
  {
    icon: "bookmark",
    title: "Rediscover",
    description: "Your personal library is always there whenever you want to revisit a story.",
  },
] as const;

function FeaturesSection() {
  return (
    <section className="features" aria-labelledby="features-title">
      <div className="container">
        <div className="features__inner">
          <div className="features__intro">
            <p className="features__eyebrow">Your reading space</p>

            <h2 id="features-title" className="features__title">
              Every book has its place.
            </h2>

            <p className="features__description">
              Every book you've read, every story you're reading, and every discovery still to come.
            </p>
          </div>

          <div className="features__grid">
            {features.map((feature) => (
              <article className="features__card" key={feature.title}>
                <div className="features__icon">
                  <Icon name={feature.icon} size="lg" />
                </div>

                <h3 className="features__card-title">{feature.title}</h3>

                <p className="features__card-description">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;

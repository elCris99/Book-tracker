import { Link } from "react-router";
import Icon from "../../../../components/Icon";

import fantasyImage from "../../../../assets/images/genres/fantasy.png";
import sciFiImage from "../../../../assets/images/genres/sci-fi.png";
import mysteryImage from "../../../../assets/images/genres/mystery.png";
import romanceImage from "../../../../assets/images/genres/romance.png";

import "./GenresSection.scss";

const genres = [
  {
    id: "fantasy",
    title: "Fantasy",
    image: fantasyImage,
  },
  {
    id: "science-fiction",
    title: "Science Fiction",
    image: sciFiImage,
  },
  {
    id: "mystery",
    title: "Mystery",
    image: mysteryImage,
  },
  {
    id: "romance",
    title: "Romance",
    image: romanceImage,
  },
] as const;

function GenresSection() {
  return (
    <section className="genres" aria-labelledby="genres-title">
      <div className="container">
        <div className="genres__inner">
          <div className="genres__intro">
            <h2 id="genres-title" className="genres__title">
              Where will your next story take you?
            </h2>

            <p className="genres__description">
              Explore different genres and discover your next great read.
            </p>
          </div>

          <div className="genres__grid">
            {genres.map((genre) => (
              <Link key={genre.id} to={`/explore?genre=${genre.id}`} className="genres__card">
                <div className="genres__card-media">
                  <img src={genre.image} alt="" loading="lazy" />
                </div>

                <h3 className="genres__card-title">{genre.title}</h3>
              </Link>
            ))}
          </div>

          <Link to="/explore" className="button genres__cta" data-type="outline">
            <span>Explore all genres</span>
            <Icon name="rightArrow" size="md" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default GenresSection;

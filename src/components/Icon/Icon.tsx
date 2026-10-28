import searchIcon from "../../assets/icons/search.svg";
import logoIcon from "../../assets/icons/logo.svg";
import rightArrowIcon from "../../assets/icons/right-arrow.svg";
import sunIcon from "../../assets/icons/sun.svg";
import moonIcon from "../../assets/icons/moon.svg";
import homeIcon from "../../assets/icons/home.svg";
import exploreIcon from "../../assets/icons/explore.svg";
import libraryIcon from "../../assets/icons/library.svg";
import editIcon from "../../assets/icons/edit.svg";
import bookmarkIcon from "../../assets/icons/bookmark.svg";
import booksIcon from "../../assets/icons/books.svg";
import "./Icon.scss";

const icons = {
  search: searchIcon,
  logo: logoIcon,
  rightArrow: rightArrowIcon,
  sun: sunIcon,
  moon: moonIcon,
  home: homeIcon,
  explore: exploreIcon,
  library: libraryIcon,
  edit: editIcon,
  bookmark: bookmarkIcon,
  books: booksIcon,
};

type IconName = keyof typeof icons;

type IconProps = {
  name: IconName;
  size?: "sm" | "md" | "lg";
  className?: string;
};

function Icon({ name, size = "md", className = "" }: IconProps) {
  return (
    <span
      className={`icon icon--${size} ${className}`.trim()}
      style={{
        maskImage: `url("${icons[name]}")`,
        WebkitMaskImage: `url("${icons[name]}")`,
      }}
      aria-hidden="true"
    />
  );
}

export default Icon;

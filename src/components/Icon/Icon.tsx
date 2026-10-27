import searchIcon from "../../assets/icons/search.svg";
import logoIcon from "../../assets/icons/logo.svg";
import rightArrowIcon from "../../assets/icons/right-arrow.svg";
import sunIcon from "../../assets/icons/sun.svg";
import moonIcon from "../../assets/icons/moon.svg";
import "./Icon.scss";

const icons = {
  search: searchIcon,
  logo: logoIcon,
  rightArrow: rightArrowIcon,
  sun: sunIcon,
  moon: moonIcon,
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

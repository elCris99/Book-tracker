import { NavLink } from "react-router";
import Icon from "../Icon";
import "./MobileNavigation.scss";

function MobileNavigation() {
  // TODO: Replace with authentication state
  const isAuthenticated = false;

  return (
    <nav className="mobile-navigation" aria-label="Navigazione mobile">
      <div className="container">
        <div className="mobile-navigation__inner">
          <NavLink to="/" end className="mobile-navigation__link">
            <Icon name="home" size="md" />
            <span>Home</span>
          </NavLink>

          <NavLink to="/explore" className="mobile-navigation__link">
            <Icon name="explore" size="md" />
            <span>Explore</span>
          </NavLink>

          <NavLink to="/search" className="mobile-navigation__link">
            <Icon name="search" size="md" />
            <span>Search</span>
          </NavLink>

          {isAuthenticated && (
            <NavLink to="/library" className="mobile-navigation__link">
              <Icon name="library" size="md" />
              <span>Library</span>
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
}

export default MobileNavigation;

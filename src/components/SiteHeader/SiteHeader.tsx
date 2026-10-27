import { Link, NavLink } from "react-router";
import ThemeToggle from "../ThemeToggle";
import Icon from "../Icon";
import "./SiteHeader.scss";

function SiteHeader() {
  // TODO: Replace with authentication state
  const isAuthenticated = false;

  return (
    <header className="site-header">
      <div className="container">
        <div className="site-header__inner">
          <Link to="/" className="site-header__logo">
            <Icon name="logo" size="lg" />
            <span>Book Tracker</span>
          </Link>

          <form className="site-header__search" role="search" action="/search" method="get">
            <Icon name="search" size="md" />

            <input
              type="search"
              name="q"
              placeholder="Cerca libri o autori..."
              aria-label="Cerca libri o autori"
              required
            />

            <button type="submit" className="site-header__search-submit" aria-label="Avvia ricerca">
              <Icon name="rightArrow" size="md" />
            </button>
          </form>

          <div className="site-header__actions">
            <nav className="site-header__navigation" aria-label="Navigazione desktop">
              <NavLink to="/explore">Explore</NavLink>
              {isAuthenticated && <NavLink to="/library">Library</NavLink>}
            </nav>

            <div className="site-header__controls">
              <ThemeToggle />

              {isAuthenticated ? (
                <Link to="/profile" className="site-header__account">
                  User
                </Link>
              ) : (
                <button type="button" className="button site-header__account" data-type="primary">
                  Login
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;

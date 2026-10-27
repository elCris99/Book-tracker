import { NavLink } from "react-router";
import "./MobileNavigation.scss";

function MobileNavigation() {
  return (
    <nav className="mobile-navigation" aria-label="Navigazione principale">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/explore">Esplora</NavLink>
      <NavLink to="/search">Cerca</NavLink>
      <NavLink to="/library">Libreria</NavLink>
    </nav>
  );
}

export default MobileNavigation;

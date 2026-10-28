import { Link } from "react-router";
import Icon from "../Icon";
import "./SiteFooter.scss";

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__inner">
          <Link to="/" className="site-footer__logo">
            <Icon name="logo" size="lg" />
            <span>Book Tracker</span>
          </Link>

          <p className="site-footer__copyright">
            © {new Date().getFullYear()} Cristian Andrey Cerruto Arandia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;

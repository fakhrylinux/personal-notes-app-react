import { Link } from "react-router";
import LocaleContext from "../contexts/LocaleContext.js";
import { useContext } from "react";
import ToggleTheme from "./ToggleTheme.jsx";
import PropTypes from "prop-types";
import LogoutButton from "./LogoutButton.jsx";
import ChangeLocaleButton from "./ChangeLocaleButton.jsx";

function Navigation({ logout, name }) {
  const { locale, toggleLocale } = useContext(LocaleContext);

  return (
    <header className="head_bar">
      <nav className="topnav">
        <Link to="/">
          <h1 className="head_bar__title">Notes App</h1>
        </Link>
        <ul id="links">
          <li>
            <Link to="/new">
              {locale === "id" ? "Tambah Catatan" : "Add Note"}
            </Link>
          </li>
          <li>
            <Link to="/archive">{locale === "id" ? "Arsip" : "Archive"}</Link>
          </li>
          <li>
            <ChangeLocaleButton toggleLocale={toggleLocale} locale={locale} />
          </li>
        </ul>
        <div className="profile">
          <ToggleTheme />
          {name}
          <LogoutButton logout={logout} />
        </div>
      </nav>
    </header>
  );
}

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Navigation;

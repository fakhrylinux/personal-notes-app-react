import { NavLink } from "react-router";
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
        <NavLink to="/">
          <h1 className="head_bar__title">Notes App</h1>
        </NavLink>
        <ul id="links">
          <li>
            <NavLink to="/new">
              {locale === "id" ? "Tambah Catatan" : "Add Note"}
            </NavLink>
          </li>
          <li>
            <NavLink to="/archive">
              {locale === "id" ? "Arsip" : "Archive"}
            </NavLink>
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

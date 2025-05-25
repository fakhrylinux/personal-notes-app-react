import Navigation from "./components/Navigation.jsx";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage.jsx";
import Archive from "./pages/ArchivePage.jsx";
import AddPage from "./pages/AddPage.jsx";
import DetailPage from "./pages/DetailPage.jsx";
import "./styles/styles.css";
import { useEffect, useMemo, useState } from "react";
import { getUserLogged, putAccessToken } from "./utils/api.js";
import LocaleContext from "./contexts/LocaleContext.js";
import ThemeContext from "./contexts/ThemeContext.js";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";

function NotesApp() {
  const [locale, setLocale] = useState(
    () => localStorage.getItem("locale") || "id",
  );
  const [initializing, setInitializing] = useState(true);
  const [authedUser, setAuthedUser] = useState(null);
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light",
  );

  useEffect(() => {
    getUserLogged().then(({ data }) => {
      setAuthedUser(data);
    });
    setInitializing(false);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  const toggleLocale = () => {
    setLocale((prevLocale) => {
      const newLocale = prevLocale === "id" ? "en" : "id";
      localStorage.setItem("locale", newLocale);
      return newLocale;
    });
  };

  const localeContext = useMemo(() => {
    return {
      locale,
      toggleLocale,
    };
  }, [locale]);

  const onLoginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthedUser(() => data);
  };

  const onLogout = () => {
    setAuthedUser(() => null);
    putAccessToken("");
  };

  if (initializing) {
    return null;
  }

  if (authedUser === null) {
    return (
      <LocaleContext.Provider value={localeContext}>
        <main>
          <Routes>
            <Route
              path="/*"
              element={<LoginPage loginSuccess={onLoginSuccess} />}
            />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
      </LocaleContext.Provider>
    );
  }

  return (
    <ThemeContext.Provider value={[theme, toggleTheme]}>
      <LocaleContext.Provider value={localeContext}>
        <Navigation logout={onLogout} name={authedUser.name} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="/notes/new" element={<AddPage />} />
            <Route path="/notes/:id" element={<DetailPage />} />
          </Routes>
        </main>
      </LocaleContext.Provider>
    </ThemeContext.Provider>
  );
}

export default NotesApp;

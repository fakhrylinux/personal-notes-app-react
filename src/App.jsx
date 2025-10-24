import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage.jsx";
import Archive from "./pages/ArchivePage.jsx";
import AddPage from "./pages/AddPage.jsx";
import DetailPage from "./pages/DetailPage.jsx";
import "./styles/styles.css";
import { useEffect, useMemo, useState } from "react";
import LocaleContext from "./contexts/LocaleContext.js";
import ThemeContext from "./contexts/ThemeContext.js";
import Root from "./pages/Root.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";

function NotesApp() {
  const [locale, setLocale] = useState(
    () => localStorage.getItem("locale") || "id",
  );
  const [initializing, setInitializing] = useState(true);
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light",
  );

  useEffect(() => {
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

  if (initializing) {
    return null;
  }

  return (
    <AuthProvider>
      <ThemeContext.Provider value={[theme, toggleTheme]}>
        <LocaleContext.Provider value={localeContext}>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Root />
                </ProtectedRoute>
              }
            >
              <Route index element={<HomePage />} />
              <Route path="/archive" element={<Archive />} />
              <Route path="/new" element={<AddPage />} />
              <Route path="/:id" element={<DetailPage />} />
              <Route path="*" element={<p>404| Not Found</p>} />
            </Route>
          </Routes>
        </LocaleContext.Provider>
      </ThemeContext.Provider>
    </AuthProvider>
  );
}

export default NotesApp;

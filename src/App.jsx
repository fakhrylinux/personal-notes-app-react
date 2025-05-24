import Navigation from "./components/Navigation.jsx";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage.jsx";
import Archive from "./pages/ArchivePage.jsx";
import AddPage from "./pages/AddPage.jsx";
import DetailPage from "./pages/DetailPage.jsx";
import "./styles/styles.css";

function NotesApp() {
  return (
    <>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/notes/new" element={<AddPage />} />
          <Route path="/notes/:id" element={<DetailPage />} />
        </Routes>
      </main>
    </>
  );
}

export default NotesApp;

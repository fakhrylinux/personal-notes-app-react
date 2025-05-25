import { Link } from "react-router";
import { useContext } from "react";
import LocaleContext from "../contexts/LocaleContext.js";

function NotFoundPage() {
  const { locale } = useContext(LocaleContext);

  return (
    <h1>
      {locale === "id" ? "Catatan tidak ditemukan. " : "Note not found. "}
      <Link to="/">
        {locale === "id" ? "Kembali ke Beranda" : "Back to Main Page"}
      </Link>
    </h1>
  );
}

export default NotFoundPage;

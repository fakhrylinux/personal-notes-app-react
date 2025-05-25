import PropTypes from "prop-types";
import { useContext } from "react";
import LocaleContext from "../contexts/LocaleContext.js";

function SearchBar({ keyword, keywordChange }) {
  const { locale } = useContext(LocaleContext);
  const onChangeEventHandler = (event) => {
    keywordChange(event.target.value);
  };

  return (
    <input
      id="search-note"
      type="text"
      value={keyword}
      placeholder={
        locale === "id" ? "Cari berdasarkan judul ..." : "Search by title ..."
      }
      onChange={onChangeEventHandler}
    />
  );
}

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default SearchBar;

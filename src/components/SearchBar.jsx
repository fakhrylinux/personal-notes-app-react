import PropTypes from "prop-types";

function SearchBar({ keyword, keywordChange }) {
  const onChangeEventHandler = (event) => {
    keywordChange(event.target.value);
  };

  return (
    <input
      id="search-note"
      type="text"
      value={keyword}
      placeholder="Search by title ..."
      onChange={onChangeEventHandler}
    />
  );
}

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default SearchBar;

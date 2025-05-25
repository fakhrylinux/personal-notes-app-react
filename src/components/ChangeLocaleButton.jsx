import PropTypes from "prop-types";

function ChangeLocaleButton({ toggleLocale, locale }) {
  return (
    <a type="button" onClick={toggleLocale} style={{ cursor: "pointer" }}>
      {locale === "id" ? "English" : "Indonesia"}
    </a>
  );
}

ChangeLocaleButton.propTypes = {
  toggleLocale: PropTypes.func.isRequired,
  locale: PropTypes.string.isRequired,
};

export default ChangeLocaleButton;

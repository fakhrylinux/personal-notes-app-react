import PropTypes from "prop-types";
import { MdArchive, MdUnarchive } from "react-icons/md";

function ToggleArchiveButton({ id, toggleArchive, toggleInnerText }) {
  const onClickEventHandler = () => toggleArchive(id);

  return toggleInnerText === "archive" ? (
    <a type="button">
      <MdArchive
        size="3em"
        onClick={onClickEventHandler}
        style={{ cursor: "pointer" }}
      />
    </a>
  ) : (
    <a type="button">
      <MdUnarchive
        size="3em"
        onClick={onClickEventHandler}
        style={{ cursor: "pointer" }}
      />
    </a>
  );
}

ToggleArchiveButton.propTypes = {
  id: PropTypes.string.isRequired,
  toggleArchive: PropTypes.func.isRequired,
  toggleInnerText: PropTypes.string.isRequired,
};

export default ToggleArchiveButton;

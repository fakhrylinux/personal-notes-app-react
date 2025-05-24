import PropTypes from "prop-types";
import { MdArchive, MdUnarchive } from "react-icons/md";

function ToggleArchiveButton({ id, toggleArchive, toggleInnerText }) {
  const onClickEventHandler = () => toggleArchive(id);

  return toggleInnerText === "archive" ? (
    <a role="button" tabIndex={0}>
      <MdArchive
        size="3em"
        onClick={onClickEventHandler}
        style={{ cursor: "pointer" }}
      />
    </a>
  ) : (
    <a role="button" tabIndex={0}>
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

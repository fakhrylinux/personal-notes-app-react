import PropTypes from "prop-types";
import { MdArchive, MdUnarchive } from "react-icons/md";

function ToggleArchiveButton({ id, toggleArchive, toggleInnerText }) {
  const onClickEventHandler = () => toggleArchive(id);

  return toggleInnerText === "archive" ? (
    <MdArchive
      size="3em"
      onClick={onClickEventHandler}
      style={{ cursor: "pointer" }}
    />
  ) : (
    <MdUnarchive
      size="3em"
      onClick={onClickEventHandler}
      style={{ cursor: "pointer" }}
    />
  );
}

ToggleArchiveButton.propTypes = {
  id: PropTypes.string.isRequired,
  toggleArchive: PropTypes.func.isRequired,
  toggleInnerText: PropTypes.string.isRequired,
};

export default ToggleArchiveButton;

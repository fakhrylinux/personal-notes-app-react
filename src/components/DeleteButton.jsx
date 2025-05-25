import PropTypes from "prop-types";
import { MdDelete } from "react-icons/md";

function DeleteButton({ id, onDelete }) {
  const onDeleteEventHandler = () => onDelete(id);

  return (
    <a type="button" onClick={onDeleteEventHandler}>
      <MdDelete size="3em" style={{ cursor: "pointer", color: "red" }} />
    </a>
  );
}

DeleteButton.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DeleteButton;

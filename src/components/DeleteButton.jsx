import PropTypes from "prop-types";
import { MdDelete } from "react-icons/md";

function DeleteButton({ id, onDelete }) {
  const onDeleteEventHandler = () => onDelete(id);

  return (
    <MdDelete
      size="3em"
      onClick={onDeleteEventHandler}
      style={{ cursor: "pointer", color: "red" }}
    />
  );
}

DeleteButton.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DeleteButton;

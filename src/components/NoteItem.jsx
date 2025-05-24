import { showFormattedDate } from "../utils/index.js";
import { Link } from "react-router";
import { noteItemPropTypes } from "../types/index.js";

function NoteItem({ id, title, createdAt, body }) {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <Link to={`/notes/${id}`}>
          <h3 className="note-item__title">{title}</h3>
        </Link>
        <p className="note-item__date">{showFormattedDate(createdAt)}</p>
        <p className="note-item__body">{body}</p>
      </div>
    </div>
  );
}

NoteItem.propTypes = noteItemPropTypes;

export default NoteItem;

import NoteItem from "./NoteItem.jsx";
import PropTypes from "prop-types";
import { noteItemPropTypes } from "../types/index.js";

function NotesList({ notes }) {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteItem key={note.id} id={note.id} {...note} />
      ))}
    </div>
  );
}

NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape(noteItemPropTypes)).isRequired,
};

export default NotesList;

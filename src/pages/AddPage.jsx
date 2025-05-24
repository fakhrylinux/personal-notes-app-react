import { useNavigate } from "react-router";
import { addNote } from "../utils/local-data.js";
import NoteInput from "../components/NoteInput.jsx";

function AddPage() {
  const navigate = useNavigate();

  function onAddNoteHandler(note) {
    addNote(note);
    navigate("/");
  }

  return (
    <section className="input__section">
      <NoteInput addNote={onAddNoteHandler} />
    </section>
  );
}

export default AddPage;

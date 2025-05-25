import { useNavigate } from "react-router";
import { addNote } from "../utils/api.js";
import NoteInput from "../components/NoteInput.jsx";

function AddPage() {
  const navigate = useNavigate();

  async function onAddNoteHandler(note) {
    await addNote(note);
    navigate("/");
  }

  return (
    <section className="input__section">
      <NoteInput addNote={onAddNoteHandler} />
    </section>
  );
}

export default AddPage;

import { useNavigate } from "react-router";
import { addNote } from "../utils/api.js";
import NoteInput from "../components/NoteInput.jsx";
import { useState } from "react";
import ProgressBar from "../components/ProgressBar.jsx";

function AddPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  async function onAddNoteHandler(note) {
    setLoading(true);
    await addNote(note);
    navigate("/");
  }

  return (
    <>
      {loading && <ProgressBar />}
      <section className="container input__section">
        <NoteInput addNote={onAddNoteHandler} />
      </section>
    </>
  );
}

export default AddPage;

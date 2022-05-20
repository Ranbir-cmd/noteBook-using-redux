import { useState } from "react";
import AllNotes from "./components/AllNotes";
import CreateNotes from "./components/CreateNotes";
import ImportantNotes from "./components/ImportantNotes";

function App() {
  const [notes, setNotes] = useState([]);

  const createNotes = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const toggleNote = (id) => {
    // with this id we will find the particular note in notes Array.
    // remember: we cant mutate our state. so copy that state
    const new_notes = notes.slice();
    // to get the element u need index
    const index = new_notes.findIndex((note) => note.id === id);
    const note = new_notes[index];

    // u got the note. now modify the note
    const new_note = {
      ...note,
      isImportant: !note.isImportant,
    };
    new_notes[index] = new_note;

    setNotes(new_notes);
  };

  console.log(notes);
  return (
    <div className="container mt-3 p-3">
      <CreateNotes />
      <hr />

      <ImportantNotes notes={notes} toggleNote={toggleNote} />
      <hr />
      <AllNotes toggleNote={toggleNote} />
    </div>
  );
}

export default App;

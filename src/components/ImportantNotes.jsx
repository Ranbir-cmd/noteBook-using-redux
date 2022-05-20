import React from "react";
import Note from "./Note";

const ImportantNotes = ({ notes, toggleNote }) => {
  return (
    <div className="importantNotes">
      <h4>Important Notes</h4>
      <div className="row">
        {notes
          .filter((note) => note.isImportant === true)
          .map((note) => (
            <Note note={note} toggleNote={toggleNote} key={note.id} />
          ))}
      </div>
    </div>
  );
};

export default ImportantNotes;

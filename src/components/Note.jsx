import React from "react";

const Note = ({ note: { id, note, date, isImportant }, toggleNote }) => {
  return (
    <div className="card mb-3 mr-3">
      <div className="card-header">{date}</div>
      <div className="card-body">{note}</div>
      <button className="btn" onClick={() => toggleNote(id)}>
        {isImportant ? "Remove from important" : "Add to important"}
      </button>
    </div>
  );
};

export default Note;

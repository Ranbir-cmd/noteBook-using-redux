import React from "react";
import Note from "./Note";
import { store } from "../redux/store";
import { connect } from "react-redux";

const AllNotes = ({ toggleNote, notes }) => {
  // const notes = store.getState().notes;
  console.log(notes);
  return (
    <>
      <h3 className="all-notes">All Notes</h3>
      <div className="my-3">
        <div className="row">
          {notes.map((note) => (
            <Note key={note.id} note={note} toggleNote={toggleNote} />
          ))}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  notes: state.notes,
  // now u can send this notes as props
});

export default connect(mapStateToProps)(AllNotes);

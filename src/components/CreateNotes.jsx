import React, { useState } from "react";
// import { store } from "../redux/store";
import { connect } from "react-redux";

const CreateNotes = ({ add_new_note }) => {
  const [note, setNote] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const data = {
      note,
      id: Math.floor(Math.random() * 10000),
      date: new Date().toJSON().slice(0, 10),
      isImportant: false,
    };
    // DONT NEED THIS
    // store.dispatch({
    //   type: "ADD_NOTE",
    //   payload: data,
    // });
    add_new_note(data);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <input
            className="form-controll"
            placeholder="Type your note"
            value={note}
            onChange={(event) => setNote(event.target.value)}
          />
          <button className="btn primary-btn" type="submit">
            Add Note
          </button>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  {
    return {
      add_new_note: (data) =>
        dispatch({
          type: "ADD_NOTE",
          payload: data,
        }),
    };
  }
};

export default connect(null, mapDispatchToProps)(CreateNotes);

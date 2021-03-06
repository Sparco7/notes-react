import React from "react";
import "./index.css";

const Note = (props) => {

  const deleteNote = () => {
    props.deleteNote(props.note)
  };

  return (
    <div className="note-card">
      <button className="delete-btn" onClick={deleteNote}>
        X
      </button>
      <div className="para">{props.note.task}</div>
      <div>Created: {props.note.date}{props.note.time}</div>
    </div>
  );
};

export default Note;

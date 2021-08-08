import React from "react";
import "./index.css";

const Note = (props) => {

  const deleteNote = () => {
    console.log("deleting note");
    console.log(props);
    props.deleteNote(props.note)
  };

  return (
    <div className="note-card">
      <button className="delete-btn" onClick={deleteNote}>
        X
      </button>
      <div className="para">{props.note}</div>
    </div>
  );
};

export default Note;

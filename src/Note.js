import React from "react";
import "./index.css";

const Note = (props) => {
    return (
        <div className="note-card">
            <div className="para">{props.note}</div>
        </div>
    )
}

export default Note;
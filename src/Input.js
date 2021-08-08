import React from "react";
import "./index.css";

class Input extends React.Component {

   state = {

   } 

  
  createNote = () => {
      console.log("create note");
  } 


  render() {
    return (
      <div className="container form-container">
        <div className="row">
          <div className="col col-textarea">
            <textarea
              name=""
              id="text"
              cols="50"
              rows="5"
              placeholder="Enter a note..."
            ></textarea>
          </div>
        </div>
        <div className="container">
          <input type="time" />
          <input type="date" />
        </div>
        <div className="row"></div>
        <div className="row">
          <div className="col sticker-col">
            <div className="checkbox-wrapper">
              <input type="checkbox" id="check" name="scales" />
              <label for="scales">Add Sticker</label>
            </div>
          </div>
          <div className="col create-col">
            <button onClick={() => this.createNote()} id="create_btn">Create Note</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Input;

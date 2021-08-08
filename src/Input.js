import React from "react";
import "./index.css";

class Input extends React.Component {
  state = {
    value: "",
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
    console.log(this.state.value);
  }

  createNote = (event) => {
    this.setState({ value: event.target.value });
    console.log("create note");
    this.props.newNote(this.state.value)
  };

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
              value={this.state.value}
              onChange={this.handleChange}
            ></textarea>
          </div>
        </div>

        <div className="col create-col">
          <button onClick={this.createNote} id="create_btn">
            Create Note
          </button>
        </div>
      </div>
    );
  }
}

export default Input;

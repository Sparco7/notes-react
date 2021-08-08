import React from "react";
import "./index.css";

class Input extends React.Component {
  state = {
    value: "",
    date: "",
    time: ""
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
    console.log(this.state.value);
  };

  timeChange = (event) => {
      console.log("clicking time");
      this.setState({ time: event.target.value });
  }

  dateChange = (event) => {
    this.setState({ date: event.target.value });
  }

  createNote = (event) => {
    this.setState({ value: event.target.value });
    console.log("create note");
    this.props.newNote(this.state.value, this.state.time, this.state.date);
    console.log("time selected",this.state.time);
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
        <div className="container">
          <input type="time" value={this.state.time} onChange={this.timeChange} />
          <input type="date" value={this.state.date} onChange={this.dateChange}/>
        </div>
        <br/>
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

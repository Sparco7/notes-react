import React from "react";
import Input from "./Input";
import Note from "./Note";
import "./index.css";

class App extends React.Component {
  state = {
    // notes: ["cleaning", "eating"],
    notes: [
      { task: "cleaning", time: "13:45", date: "3/4/2021" },
      { task: "eating", time: "21:00", date: "6/8/20" },
    ],
  };

  // addNote = (val) => {
  //   console.log("adding a note", val);
  //   this.setState({ notes: [val, ...this.state.notes] });
  // };

  addNote = (task, time, date) => {
    console.log("adding a note", task);
    this.setState({ notes: [{task, time, date}, ...this.state.notes] });
  };

  deleteNote = (val) => {
    console.log("notes arr: ", this.state.notes);
    console.log("deleting", val);

    let index = this.state.notes.indexOf(val);
    console.log("index is:", index);
    this.setState({ notes: this.state.notes.filter((note) => note !== val) });
  };

  render() {
    console.log("notes arr: ", this.state.notes);
    return (
      <div>
        <h1>My Notes Board</h1>
        <div className="container">
          <Input newNote={this.addNote} />
        </div>
        <div className="notes">
          {this.state.notes.map((note, i) => {
            return <Note key={i} deleteNote={this.deleteNote} note={note} />;
          })}
        </div>
      </div>
    );
  }
}

export default App;

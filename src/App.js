import React from "react";
import Input from "./Input";
import Note from "./Note";
import "./index.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      notes: [
        { task: "cleaning", time: "13:45", date: "3/4/2021" },
        { task: "eating", time: "21:00", date: "6/8/2021" },
      ],
    };
    this.getNotes();
  }

  componentDidMount() {
    let updatedArr = [];
    updatedArr = JSON.parse(localStorage.getItem("notes"));
    this.setState({ notes: updatedArr });
  }

  addNote = (task, time, date) => {
    this.storeNote();
    this.setState({ notes: [{ task, time, date }, ...this.state.notes] });
  };

  deleteNote = (val) => {
    console.log("notes arr: ", this.state.notes);
    console.log("deleting", val);

    let index = this.state.notes.indexOf(val);
    console.log("index is:", index);
    this.setState({ notes: this.state.notes.filter((note) => note !== val) });
  };

  //---------------Store Note in Local Storage--------------
  storeNote = () => {
    // let tempNotes = [];
    // console.log("notes arr after adding", this.state.notes);
    localStorage.setItem("notes", JSON.stringify(this.state.notes));
    // tempNotes = JSON.parse(localStorage.getItem("tasks"))
    // this.setState({notes: tempNotes})
  };

  //---------------Get Note from Local Storage--------------

  getNotes = () => {
    let updatedArr = [];
    updatedArr = JSON.parse(localStorage.getItem("notes"));
    this.setState({ notes: updatedArr });
  };
  //---------------Present notes---------------------------
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

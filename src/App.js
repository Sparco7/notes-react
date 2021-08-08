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

  //---------------Get Time--------------
  getTime = () => {
    let currentdate = new Date();
    let datetime =
      currentdate.getDate() +
      "/" +
      (currentdate.getMonth() + 1) +
      "/" +
      currentdate.getFullYear() +
      " - " +
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds();
    return datetime;
  };

  addNote = (task, time, date) => {
    if (time === "" || date === "") {
      let dateTime = this.getTime();
      time = dateTime;
    }
    this.storeNote();
    this.setState({ notes: [{ task, time, date }, ...this.state.notes] });
  };

  deleteNote = (val) => {
    let index = this.state.notes.indexOf(val);

    this.setState({ notes: this.state.notes.filter((note) => note !== val) });
  };

  //---------------Store Note in Local Storage--------------
  storeNote = () => {
    localStorage.setItem("notes", JSON.stringify(this.state.notes));
  };

  //---------------Get Note from Local Storage--------------

  getNotes = () => {
    let updatedArr = [];
    updatedArr = JSON.parse(localStorage.getItem("notes"));
    this.setState({ notes: updatedArr });
  };
  //---------------Present notes---------------------------
  render() {
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

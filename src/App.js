import React from "react";
import Input from "./Input";
import Note from "./Note";
import "./index.css";

class App extends React.Component {
  state = {
    notes: ["cleaning", "eating"],
  };

  addNote = (val) => {
    console.log("adding a note", val);
    this.setState({notes: [val, ...this.state.notes]})
  }

  render() {
    return (
      <div>
        <h1>My Notes Board</h1>
        <div className="container">
          <Input 
          newNote={this.addNote}/>
        </div>
        <div className="notes">
          {this.state.notes.map((note, i) => {
            return (
              <Note 
              note={note}/>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;

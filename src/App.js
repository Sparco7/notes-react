import React from "react";
import Input from "./Input";
import "./index.css";

class App extends React.Component {
  render() {
    return (
      <div >
        <h1>My Notes Board</h1>
        <div className="container">
          <Input />
        </div>
        <div>Note</div>
      </div>
    );
  }
}

export default App;

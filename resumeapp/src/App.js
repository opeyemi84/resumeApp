import React, { Component } from "react";
import GenInformation from "./components/GenInformation";
import Education from "./components/Education";
import Experience from "./components/Experience";

class App extends Component {
  render() {
    return (
      <div>
        <div className="main-header">
          <h1>Resume Builder</h1>
        </div>

        <GenInformation />
        <Education />
        <Experience />
      </div>
    );
  }
}

export default App;

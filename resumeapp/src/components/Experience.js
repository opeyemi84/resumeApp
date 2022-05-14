import React, { Component } from "react";

class Experience extends Component {
  render() {
    return (
      <div>
        <h2>Experience</h2>
        <label>Company:</label>
        <input type="text" value=""></input>
        <br></br>
        <label>Title:</label>
        <input type="text" value=""></input>
        <br></br>
        <label>From:</label>
        <input type="text" value=""></input>
        <br></br>
        <label>To:</label>
        <input type="text" value=""></input>
        <br></br>
        <label>Job Role:</label>
        <textarea></textarea>
        <br></br>
      </div>
    );
  }
}

export default Experience;

import React, { Component } from "react";

class GenInformation extends Component {
  render() {
    return (
      <div>
        <h2>General Information</h2>
        <label>First Name:</label>
        <input type="text" value=""></input>
        <br></br>
        <label>Middle Initial:</label>
        <input type="text" value=""></input>
        <br></br>
        <label>Last Name:</label>
        <input type="text" value=""></input>
        <br></br>
        <label>Mailing Address:</label>
        <input type="text" value=""></input>
        <br></br>
        <label>Phone Number:</label>
        <input type="text" value=""></input>
        <br></br>
        <label>Email:</label>
        <input type="text" value=""></input>
        <br></br>
      </div>
    );
  }
}

export default GenInformation;

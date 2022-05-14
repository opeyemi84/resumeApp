import React, { Component } from "react";

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      school: "",
      degree: "",
      majors: "",
      from: "",
      to: "",
      cgpa: "",
    };
  }

  onSchoolChange = (event) => {
    this.setState({
      school: event.target.value,
    });
  };

  onDegreeChange = (event) => {
    this.setState({
      degree: event.target.value,
    });
  };

  onMajorsChange = (event) => {
    this.setState({
      majors: event.target.value,
    });
  };

  onFromChange = (event) => {
    this.setState({
      from: event.target.value,
    });
  };

  onToChange = (event) => {
    this.setState({
      to: event.target.value,
    });
  };

  oncgpaChange = (event) => {
    this.setState({
      cgpa: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <div className="section-header">
          <h2>Education</h2>
        </div>
        <div className="form-control">
          <label>School:</label>
          <input
            type="text"
            value={this.state.school}
            onChange={this.onSchoolChange}
          ></input>
          <br></br>
          <label>Degree Obtained:</label>
          <input
            type="text"
            value={this.state.degree}
            onChange={this.onDegreeChange}
          ></input>
          <br></br>
          <label>Majors:</label>
          <input
            type="text"
            value={this.state.majors}
            onChange={this.onMajorsChange}
          ></input>
          <br></br>
          <label>From:</label>
          <input
            type="text"
            value={this.state.from}
            onChange={this.onFromChange}
          ></input>
          <br></br>
          <label>To:</label>
          <input
            type="text"
            value={this.state.to}
            onChange={this.onToChange}
          ></input>
          <br></br>
          <label>CGPA:</label>
          <input
            type="text"
            value={this.state.cgpa}
            onChange={this.oncgpaChange}
          ></input>
          <br></br>
        </div>
      </div>
    );
  }
}

export default Education;

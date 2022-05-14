import React, { Component } from "react";
import uniqid from "uniqid";

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
      education: [
        {
          id: uniqid(),
          school: "",
          degree: "",
          majors: "",
          from: "",
          to: "",
          cgpa: "",
        },
      ],
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
    const { school, degree, majors, from, to, cgpa } = this.state;
    return (
      <div>
        <div className="section-header">
          <h2>Education</h2>
        </div>
        <div className="form-control">
          <label>School:</label>
          <input
            type="text"
            value={school}
            onChange={this.onSchoolChange}
          ></input>
          <br></br>
          <label>Degree Obtained:</label>
          <input
            type="text"
            value={degree}
            onChange={this.onDegreeChange}
          ></input>
          <br></br>
          <label>Majors:</label>
          <input
            type="text"
            value={majors}
            onChange={this.onMajorsChange}
          ></input>
          <br></br>
          <label>From:</label>
          <input type="text" value={from} onChange={this.onFromChange}></input>
          <br></br>
          <label>To:</label>
          <input type="text" value={to} onChange={this.onToChange}></input>
          <br></br>
          <label>CGPA:</label>
          <input type="text" value={cgpa} onChange={this.oncgpaChange}></input>
          <br></br>
        </div>
        <button>Add</button>
        <button>Delete</button>
      </div>
    );
  }
}

export default Education;

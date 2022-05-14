import React, { Component } from "react";

class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      company: "",
      title: "",
      from: "",
      to: "",
      role: "",
    };
  }

  onCompanyChange = (event) => {
    this.setState({
      company: event.target.value,
    });
  };

  onTitleChange = (event) => {
    this.setState({
      title: event.target.value,
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

  onRoleChange = (event) => {
    this.setState({
      role: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <div className="section-header">
          <h2>Experience</h2>
        </div>
        <div className="form-control">
          <label>Company:</label>
          <input
            type="text"
            value={this.state.company}
            onChange={this.onCompanyChange}
          ></input>
          <br></br>
          <label>Title:</label>
          <input
            type="text"
            value={this.state.title}
            onChange={this.onTitleChange}
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
          <label>Job Role:</label>
          <textarea
            value={this.state.role}
            onChange={this.onRoleChange}
          ></textarea>
          <br></br>
        </div>
      </div>
    );
  }
}

export default Experience;

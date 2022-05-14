import React, { Component } from "react";

class GenInformation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      middleInitial: "",
      lastName: "",
      mailingAddress: "",
      phoneNumber: "",
      email: "",
      summary: "",
    };
  }
  // Input field onChange Handlers

  onFirstNameChange = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };

  onMiddleInitialHandler = (event) => {
    this.setState({
      middleInitial: event.target.value,
    });
  };

  onLastNameChange = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };

  onAddressChange = (event) => {
    this.setState({
      mailingAddress: event.target.value,
    });
  };

  onPhoneNumberChange = (event) => {
    this.setState({
      phoneNumber: event.target.value,
    });
  };

  onEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  onSummaryChange = (event) => {
    this.setState({
      summary: event.target.value,
    });
  };

  render() {
    const {
      firstName,
      middleInitial,
      lastName,
      mailingAddress,
      phoneNumber,
      email,
      summary,
    } = this.state;
    return (
      <div>
        <div className="section-header">
          <h2>Personal Information</h2>
        </div>

        <div className="form-control">
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={this.onFirstNameChange}
          ></input>
          <br></br>
          <label>Middle Initial:</label>
          <input
            type="text"
            value={middleInitial}
            onChange={this.onMiddleInitialHandler}
          ></input>
          <br></br>
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={this.onLastNameChange}
          ></input>
          <br></br>
          <label>Mailing Address:</label>
          <input
            type="text"
            value={mailingAddress}
            onChange={this.onAddressChange}
          ></input>
          <br></br>
          <label>Phone Number:</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={this.onPhoneNumberChange}
          ></input>
          <br></br>
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={this.onEmailChange}
          ></input>
          <br></br>
          <label>Professional Summary:</label>
          <textarea value={summary} onChange={this.onSummaryChange}></textarea>
        </div>
      </div>
    );
  }
}

export default GenInformation;

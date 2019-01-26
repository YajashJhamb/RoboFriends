import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addRobot } from "../actions/RobotActions";

class AddRobot extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: ""
    };
  }

  inputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { name, email } = this.state;
    const newRobot = {
      name,
      email
    };

    this.props.addRobot(newRobot);
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <h1 style={{ color: "white", fontSize: "3rem" }}>ADD ROBOT</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label
              htmlFor="name"
              style={{ color: "white", fontSize: "1rem", display: "block" }}
            >
              Name:
            </label>
            <input
              name="name"
              type="text"
              style={{ width: "200px", height: "40px" }}
              placeholder="Enter name"
              onChange={this.inputChange}
            />
            <label
              htmlFor="email"
              style={{ color: "white", fontSize: "1rem", display: "block" }}
            >
              Email:
            </label>
            <input
              name="email"
              type="email"
              style={{ width: "200px", height: "40px" }}
              placeholder="Enter email"
              onChange={this.inputChange}
            />
          </div>
          <button type="submit" className="btn btn-danger ">
            ADD ROBOT
          </button>
        </form>
      </div>
    );
  }
}

AddRobot.propTypes = {
  addRobot: PropTypes.func.isRequired
};
export default connect(
  null,
  { addRobot }
)(AddRobot);

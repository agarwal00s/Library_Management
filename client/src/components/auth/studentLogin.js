import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions.js";
import PropTypes from "prop-types";
class StudentLogin extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(user, this.props.history);
  }
  render() {
    return (
      <div>
        <form className="form-horizontal" onSubmit={this.onSubmit}>
          <div className="form-group">
            <label className="control-label col-sm-2">Email:</label>
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control"
                id="email"
                value={this.state.email}
                onChange={this.onChange}
                placeholder="Enter email"
              />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-2">Password:</label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                id="password"
                value={this.state.password}
                onChange={this.onChange}
                placeholder="Enter password"
              />
            </div>
          </div>

          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

StudentLogin.propTypes = {
  loginUser: PropTypes.func.isRequired
};

export default connect(
  null,
  { loginUser }
)(StudentLogin);

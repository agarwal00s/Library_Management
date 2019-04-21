import React, { Component } from "react";
import axios from "axios";
class StudentRegister extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      mobile: "",
      gender: "",
      password: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }
  onSubmit() {
    const newStudent = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.mobile,
      gender: this.state.gender,
      password: this.state.password,
      __v: 0
    };
    axios
      .post("/students/register", newStudent)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
    /* fetch("http://loclahost:5000/students/register", {
      method: "POST",
      headers: {
        Accept: "text/html, application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: JSON.stringify(newStudent)
    }); */
    /*
    var request = new XMLHttpRequest();
    request.open('POST', '/my/url', true);
    request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    request.send(data);
    */
  }
  render() {
    return (
      <div>
        <form className="form-horizontal" onSubmit={this.onSubmit}>
          <div className="form-group">
            <label className="control-label col-sm-2">Name:</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="name"
                value={this.state.name}
                onChange={this.onChange}
                placeholder="Enter name"
              />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-2">Email:</label>
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control"
                value={this.state.email}
                onChange={this.onChange}
                id="email"
                placeholder="Enter email"
              />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-2">Mobile No.:</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="mobile"
                value={this.state.mobile}
                onChange={this.onChange}
                placeholder="Enter Mobile Number"
              />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-2">Gender:</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="gender"
                value={this.state.gender}
                onChange={this.onChange}
                placeholder="Enter your Gender"
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
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default StudentRegister;

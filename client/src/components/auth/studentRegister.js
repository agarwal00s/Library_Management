import React, { Component } from "react";

class StudentRegister extends Component {
  render() {
    return (
      <div>
        <form className="form-horizontal" action="">
          <div className="form-group">
            <label className="control-label col-sm-2" for="student_name">
              Name:
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="student_name"
                placeholder="Enter name"
              />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-2" for="email">
              Email:
            </label>
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
              />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-2" for="mobile_no">
              Mobile No.:
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="mobile_no"
                placeholder="Enter Mobile Number"
              />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-2" for="gender">
              Gender:
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="gender"
                placeholder="Enter your Gender"
              />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-2" for="pwd">
              Password:
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                id="pwd"
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

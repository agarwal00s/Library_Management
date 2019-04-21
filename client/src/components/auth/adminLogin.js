import React, { Component } from "react";

class AdminLogin extends Component {
  render() {
    return (
      <div>
        <form className="form-horizontal" action="">
          <div className="form-group">
            <label className="control-label col-sm-2">Email:</label>
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
            <label className="control-label col-sm-2">Password:</label>
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

export default AdminLogin;

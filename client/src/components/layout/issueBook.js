import React, { Component } from "react";

class IssueBook extends Component {
  render() {
    return (
      <div>
        <form className="form-horizontal" action="">
          <div className="form-group">
            <label className="control-label col-sm-2">
              User Id:
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="user_id"
                placeholder="Enter User Id"
              />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-2">
              Book Id:
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="book_id"
                placeholder="Enter Book Id"
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
export default IssueBook;

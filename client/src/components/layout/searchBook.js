import React, { Component } from "react";

class SearchBook extends Component {
  render() {
    return (
      <div>
        <form className="form-horizontal" action="">
          <div className="form-group">
            <label className="control-label col-sm-2">ISBN No.:</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder="Enter ISBN No."
              />
            </div>
          </div>

          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="btn btn-primary">
                Search Book
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBook;

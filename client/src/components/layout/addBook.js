import React, { Component } from "react";

class AddBook extends Component {
  render() {
    return (
      <div>
        <form className="form-horizontal" action="">
          <div className="form-group">
            <label className="control-label col-sm-2" for="isbn">
              ISBN No.:
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="isbn"
                placeholder="Enter ISBN No."
              />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-2" for="title">
              Title:
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Enter Book Title"
              />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-2" for="author">
              Author:
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="author"
                placeholder="Enter Author"
              />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-2" for="genre">
              Genre:
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="genre"
                placeholder="Enter Book Genre"
              />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-2" for="copies">
              Copies:
            </label>
            <div className="col-sm-10">
              <input
                type="number"
                className="form-control"
                id="pwd"
                placeholder="Enter No. of Copies"
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

export default AddBook;

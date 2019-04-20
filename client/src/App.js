import React, { Component } from "react";
import Navbar from "./components/layout/navbar.js";
import Landing from "./components/layout/landing.js";
import StudentLogin from "./components/auth/studentLogin";
import StudentRegister from "./components/auth/studentRegister";
import AdminLogin from "./components/auth/adminLogin";
import SearchBook from "./components/layout/searchBook";
import AddBook from "./components/layout/addBook";
import IssueBook from "./components/layout/issueBook";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Route exact path="/" component={Landing} />
        <Route exact path="/studentLogin" component={StudentLogin} />
        <Route exact path="/studentRegister" component={StudentRegister} />
        <Route exact path="/adminLogin" component={AdminLogin} />
        <Route exact path="/searchBook" component={SearchBook} />
        <Route exact path="/addBook" component={AddBook} />
        <Route exact path="/issueBook" component={IssueBook} />
      </Router>
    );
  }
}

export default App;

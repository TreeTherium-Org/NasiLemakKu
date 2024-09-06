import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Navbar extends Component {
  handleSignInClick = () => {
    this.props.history.push("/signin");
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-light bg-opacity-50 shadow backdrop-blur">
          <div className="container-fluid">
            <div className="d-flex">
              <button
                onClick={this.handleSignInClick}
                className="btn btn-primary"
              >
                Sign in
              </button>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default withRouter(Navbar);
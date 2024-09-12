import React, { Component } from "react";
import Navbar from "./layouts/Navbar";

class Landingpage extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container-fluid d-flex flex-column min-vh-100 bg-light text-center pt-5">
          <h1 className="display-1 fw-bold fst-italic text-success mb-4">Nasi Lemak Ku</h1>
          <div className="col-md-8 col-lg-6 mx-auto">
            <p className="lead text-secondary mb-3">
              This is the first paragraph, introducing the app and its primary features.
            </p>
            <p className="lead text-secondary">
              This is the second paragraph, providing more details on the app’s functionality and how it benefits users.
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default Landingpage;

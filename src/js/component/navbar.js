import React from "react";
import ReactDOM from "react-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-opacity-75 ps-2">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Start boostrap</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link active float-end" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link float-end" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link float-end" href="#">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link float-end" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;

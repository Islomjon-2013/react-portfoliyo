import React from "react";

const Navbar = () => {
  return (
    <div className="header">
      <nav
        className="navbar navbar-expand-lg navbar-light bg-dark "
        id="navbar"
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item active">
                <a className="nav-link " aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#work">
                  my work
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  skills
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

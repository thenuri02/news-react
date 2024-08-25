import React from 'react';


const Navbar = ({ setCategory, handleSearch }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
        {/* <img src="news1.jpg" alt="Logo" className="navbar-logo me-2" /> */}
          <span className="badge bg-light text-dark fs-4">PulseScope</span>
        </a>
        <button
          className="navbar-toggler"
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory("boutUs")}>
                About Us
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory("home")}>
                Home
              </div>
            </li>
          
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

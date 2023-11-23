import React from "react";
import { Link } from "react-router-dom";

export default function GuestNavbar(){
    return (
        <div>
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              <Link to="/home" className="text-decoration-none">
                <a className="navbar-brand fs-4 fw-bolder">RRG</a>
              </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  {/* <li className="nav-item">
                    <Link to="/home" className="text-decoration-none">
                    <a className="nav-link active" aria-current="page">Home</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link">Portfolio</a>
                  </li> */}
                  <li className="nav-item">
                    <Link to="/login" className="text-decoration-none">
                      <a className="nav-link">Login</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
    )
}

import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/js/src/collapse.js";

function NavBar({ user, setUser }) {
  const handleLogout = () => {
    fetch("/logout", { method: "DELETE" }).then((res) => {
      if (res.ok) {
        setUser(null);
      }
    });
  };
  return (
    <header>
      <nav className="navbar navbar-light bg-light navbar-expand-lg">
        <div className="container-fluid">
          <div>
            <Link to="/" className="navbar-brand" style={{ fontSize: 28 }}>
              <img
                src="https://i.pinimg.com/originals/8a/76/96/8a7696cb9ac02d0ea26945a8e563b04b.jpg"
                width="40"
                height="40"
                class="d-inline-block align-top"
                alt=""
              />
              PhotoMoto
            </Link>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon bg-light"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="collapsibleNavbar"
          >
            <ul className="navbar-nav ml-auto">
              {user ? (
                <>
                  <li className="navbar-item">
                    <Link to="/albums" className="nav-link">
                      Albums
                    </Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/photos" className="nav-link">
                      Photos
                    </Link>
                  </li>
                  <button onClick={handleLogout}>Logout</button>
                </>
              ) : (
                <>
                  <li className="navbar-item">
                    <Link to="/signup" className="nav-link">
                      Sign Up
                    </Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/login" className="nav-link">
                      Login
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;

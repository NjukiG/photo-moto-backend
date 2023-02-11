import React from "react";
import { Link } from "react-router-dom";

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
      <nav className="navbar navbar-light bg-light navbar-expand-sm">
        <div className="container-fluid">
          <div>
            <Link to="/" className="navbar-brand">
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
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
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

//   <header>
//   <div>
//     <Link to="/">PhotoMoto</Link>
//   </div>
//   <div>
//     {user ? (
//       <>
//         <Link to="/albums">Albums</Link>
//         <Link to="/photos">Photos</Link>
//         <button onClick={handleLogout}>Logout</button>
//       </>
//     ) : (
//       <>
//         <Link to="/signup">Sign Up</Link>
//         <Link to="/login">Login</Link>
//       </>
//     )}
//   </div>

// </header>

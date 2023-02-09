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
      <div>
        <Link to="/">PhotoMoto</Link>
      </div>
      <div>
        {user ? (
          <button onClick={handleLogout}>Logout</button>
          
        ) : (
          <>
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </div>
    </header>
  );
}

export default NavBar;

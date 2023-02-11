import React, { useState } from "react";
// import { Button } from "bootstrap";

function LoginForm({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => setUser(user));
      }
    });
  };

  return (
    <div className="container">
      <div className="login-form">
        <h1>Welcome back.</h1>
        <h3>Glad to see you again!</h3>
        <br/>
        <form onSubmit={handleLogin}>
          <div className="form-group row">
            <label htmlFor="username" className="col-sm-3 col-form-label">
              Username
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                id="username"
                autoComplete="off"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>
          <br/>
          <div className="form-group row">
            <label htmlFor="password" className="col-sm-3 col-form-label ">
              Password
            </label>
            <div className="col-sm-9">
              <input
                type="password"
                className="form-control"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <br/>
          <div className="row">
            <div className="col-sm-9 offset-sm-3">
              <button className="btn btn-outline-primary" type="submit">
                Login Now
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;

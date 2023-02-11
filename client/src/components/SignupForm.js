import React, { useState } from "react";

function SignupForm({ setUser }) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-TYpe": "application/json",
      },
      body: JSON.stringify({
        name,
        username,
        email,
        password,
        passwordConfirmation: passwordConfirmation,
      }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => setUser(user));
      }
    });
  };
  return (
    <div>
      <h1>Create an Account</h1>
      <h3>to get started now!</h3>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            autoComplete="off"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          <label htmlFor="password">Password Confirmation</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            autoComplete="current-password"
          />
          <br />
          <button type="submit" className="btn btn-outline-primary">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;

import React from "react";

function Home({ user }) {
  if (user) {
    return (
      <div
        className="container-fluid home"
        style={{
          marginTop: 150,
          padding: 20,
          backgroundImage: `url(${"https://www.lifewire.com/thmb/L9Y504uqsScKT8iT3ZwFaMVCEdg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-529231383-crop-5a29aff9eb4d52003646ed43.jpg"})`,
        }}
      >
        <h1>
          Hello {user.username}.<br /> Welcome back to PhotoMoto. <br />
          Upload and browse your photos and memories here!
        </h1>
      </div>
    );
  } else {
    return (
      <div
        className="container-fluid home"
        style={{
          marginTop: 150,
          padding: 20,
          backgroundImage: `url(${"https://www.lifewire.com/thmb/L9Y504uqsScKT8iT3ZwFaMVCEdg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-529231383-crop-5a29aff9eb4d52003646ed43.jpg"})`,
        }}
      >
        <h1>
          Hello new user. Welcome to PhotoMoto. <br />
          Kindly signup or login to get the full experience of this app!
        </h1>
      </div>
    );
  }
}

export default Home;

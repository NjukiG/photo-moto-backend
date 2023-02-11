import React, { useState } from "react";

function AlbumForm({ onAddAlbum }) {
  const [title, setTitle] = useState("");

  const handleAddAlbum = (e) => {
    e.preventDefault();
    fetch("/albums", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    })
      .then((res) => res.json())
      .then((newAlbum) => onAddAlbum(newAlbum));
  };
  return (
    <div className="albums-form">
      <h1>Enter your new Album name!</h1>
      <div className="container">
        <form onSubmit={handleAddAlbum}>
          <label htmlFor="album">Album Name:</label>
          <input
            type="text"
            className="form-control"
            name="title"
            id="title"
            placeholder="Album Title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <br/>
          <button type="submit" className="btn btn-outline-primary">Add Album</button>
        </form>
      </div>
    </div>
  );
}

export default AlbumForm;

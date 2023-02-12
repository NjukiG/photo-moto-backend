import React, { useState } from "react";

function PhotosForm({ onAddPhoto }) {
  const [title, setTitle] = useState("");
  const [image_url, setImageURL] = useState("");
  const [album_id, setAlbumID] = useState("");

  const handleAddPhoto = (e) => {
    e.preventDefault();
    fetch("/photos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, image_url, album_id }),
    })
      .then((res) => res.json())
      .then((newPhoto) => onAddPhoto(newPhoto));
  };

  return (
    <div className="photos-form">
      <h1>Enter Your new photo URL here!</h1>
      <form onSubmit={handleAddPhoto}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          placeholder="Image Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="image_url">Image URL</label>
        <input
          type="text"
          className="form-control"
          id="image_url"
          name="image_url"
          placeholder="Image URL"
          value={image_url}
          onChange={(e) => setImageURL(e.target.value)}
        />
        <label htmlFor="album_id">Album</label>
        <input
          type="text"
          className="form-control"
          id="album_id"
          name="album_id"
          placeholder="Album"
          value={album_id}
          onChange={(e) => setAlbumID(e.target.value)}
        />
        <br />
        <button type="submit" className="btn btn-outline-primary">
          Add Photo
        </button>
      </form>
    </div>
  );
}

export default PhotosForm;

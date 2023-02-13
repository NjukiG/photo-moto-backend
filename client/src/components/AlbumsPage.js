import React, { useState, useEffect } from "react";
import AlbumForm from "./AlbumForm";
import AlbumList from "./AlbumList";

function AlbumsPage({ user }) {
  const [albums, setAlbums] = useState([]);
  const [showAlbumsForm, setShowAlbumsForm] = useState(false);

  useEffect(() => {
    fetch("/albums")
      .then((res) => res.json())
      .then((albumsArray) => setAlbums(albumsArray));
  }, []);

  const handleAddAlbum = (newAlbum) => {
    const updatedAlbumsArray = [newAlbum, ...albums];
    setAlbums(updatedAlbumsArray);
  };

  const handleShowAlbumForm = () => {
    setShowAlbumsForm((showAlbumsForm) => !showAlbumsForm);
  };
  return (
    <div>
      {showAlbumsForm ? (
        <AlbumForm user={user} onAddAlbum={handleAddAlbum} />
      ) : null}
      <button className="btn btn-outline-info" onClick={handleShowAlbumForm}>
        {showAlbumsForm ? "Collapse Album Form" : "Show Album Form"}
      </button>
      <br />
      <br />
      <AlbumList user={user} albums={albums} />
    </div>
  );
}

export default AlbumsPage;

import React, { useState, useEffect } from "react";
import AlbumForm from "./AlbumForm";
import AlbumList from "./AlbumList";

function AlbumsPage({ user }) {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch("/albums")
      .then((res) => res.json())
      .then((albumsArray) => setAlbums(albumsArray));
  }, []);

  const handleAddAlbum = (newAlbum) => {
    const updatedAlbumsArray = [newAlbum, ...albums];
    setAlbums(updatedAlbumsArray)
  };

  // const displayedAlbums = albums.map((album) => {
  //     return album.title
  // })

  return (
    <div>
      <AlbumForm user={user} onAddAlbum={handleAddAlbum} />
      <AlbumList user={user} albums = {albums} />
    </div>
  );
}

export default AlbumsPage;

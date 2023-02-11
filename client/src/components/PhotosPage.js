import React, { useState, useEffect } from "react";
import PhotosForm from "./PhotosForm";
import PhotosList from "./PhotosList";
import PhotoSearch from "./PhotoSearch";

function PhotosPage({ user }) {
  const [photos, setPhotos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/photos")
      .then((res) => res.json())
      .then((photosArray) => setPhotos(photosArray));
  }, []);

  const handleAddPhoto = (newPhoto) => {
    const updatedPhotosArray = [newPhoto, ...photos];
    setPhotos(updatedPhotosArray);
  };

  const handleDeletePhoto = (id) => {
    setPhotos((photos) => {
      return photos.filter((photo) => photo.id !== id);
    });
  };

  const displayedPhotos = photos.filter((photo) => {
    return photo.title.toLowerCase().includes(searchTerm.toLowerCase());
  });
  return (
    <div>
      <PhotosForm user={user} onAddPhoto={handleAddPhoto} />
      <PhotoSearch
        displayedPhotos={displayedPhotos}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
      <br />
      <PhotosList
        user={user}
        // photos={photos}
        photos={displayedPhotos}
        onDeletePhoto={handleDeletePhoto}
      />
    </div>
  );
}

export default PhotosPage;
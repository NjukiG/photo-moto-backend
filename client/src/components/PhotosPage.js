import React, { useState, useEffect } from "react";
import PhotosForm from "./PhotosForm";
import PhotosList from "./PhotosList";

function PhotosPage({user}) {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("/photos")
      .then((res) => res.json())
      .then((photosArray) => setPhotos(photosArray));
  }, []);

  const handleAddPhoto = (newPhoto) => {
      const updatedPhotosArray = [newPhoto, ...photos]
      setPhotos(updatedPhotosArray)
  };

  const handleDeletePhoto = (photoToDelete) => {
    setPhotos((photos) => {
      return photos.filter((photo) => photo.id !== photoToDelete)
    })
  }
  return (
    <div>
      <PhotosForm user={user} onAddPhoto={handleAddPhoto} />
      <PhotosList user={user} photos={photos} onDeletePhoto={handleDeletePhoto} />
    </div>
  );
}

export default PhotosPage;

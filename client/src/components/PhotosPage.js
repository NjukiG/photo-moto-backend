import React from "react";
import PhotosForm from "./PhotosForm";

function PhotosPage() {
  const handleAddPhoto = () => {};
  return (
    <div>
      <PhotosForm onAddPhoto={handleAddPhoto} />
    </div>
  );
}

export default PhotosPage;

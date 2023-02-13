import React from "react";
import PhotoCard from "./PhotoCard";

function PhotosList({ photos, onDeletePhoto, onUpdatePhoto }) {
  return (
    <div className="container">
      <h3>A list of all the photos.</h3>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {photos &&
          photos.map((photo) => {
            return (
              <>
                <PhotoCard
                  key={photo.id}
                  photo={photo}
                  onDeletePhoto={onDeletePhoto}
                  onUpdatePhoto={onUpdatePhoto}
                />
                <br />
              </>
            );
          })}
      </div>
    </div>
  );
}

export default PhotosList;

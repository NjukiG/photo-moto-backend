import React from "react";
import PhotoCard from "./PhotoCard";

function PhotosList({ photos, onDeletePhoto }) {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {photos &&
          photos.map((photo) => {
            return (
              <>
                <PhotoCard
                  key={photo.id}
                  photo={photo}
                  onDeletePhoto={onDeletePhoto}
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

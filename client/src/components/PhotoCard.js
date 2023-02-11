import React from "react";

function PhotoCard({ photo, onDeletePhoto }) {
  const { id, title, image_url } = photo;
  // console.log(typeof(photo))

  function deletePhoto() {
    fetch(`/photos/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        onDeletePhoto(photo);
      }
    });
  }

  return (
    // <div className="container">
    // <div className="row row-cols-1 row-cols-md-3 g-4">
    <div className="col">
      <div className="card h-100">
        <img class="card-img-top" alt="" src={photo?.image_url} />
        <div className="card-body">
          <h5 className="card-title">{photo?.title}</h5>
          <a href="/photos/:id" className="btn btn-outline-primary">
            See Photo
          </a>

          <button
            onClick={deletePhoto}
            className="btn btn-outline-danger"
            style={{marginLeft:10}}
          >
            Delete Spice
          </button>
        </div>
      </div>
    </div>
    // </div>
    //  </div>
  );
}

export default PhotoCard;

//  key={photo?.id}

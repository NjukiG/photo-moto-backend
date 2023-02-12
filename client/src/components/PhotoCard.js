import React from "react";
import { Link } from "react-router-dom";

function PhotoCard({ photo, onDeletePhoto, onUpdatePhoto }) {
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

  const updatePhoto = () => {
    console.log("I was clicked", id);

    const updateObj = {
      title: photo.title,
      image_url: photo.image_url,
    };

    fetch(`photos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateObj),
    })
      .then((res) => res.json())
      .then((updatedPhoto) => onUpdatePhoto(updatedPhoto));
  };

  return (
    <div className="col">
      <div className="card h-100">
        <img class="card-img-top" alt="" src={photo?.image_url} />
        <div className="card-body">
          <h5 className="card-title">{photo?.title}</h5>
          <Link to="/update">
            <button
              onClick={updatePhoto}
              className="btn btn-outline-success"
              style={{ marginLeft: 10 }}
            >
              Update
            </button>
          </Link>

          <button
            onClick={deletePhoto}
            className="btn btn-outline-danger"
            style={{ marginLeft: 10 }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default PhotoCard;

//  key={photo?.id}

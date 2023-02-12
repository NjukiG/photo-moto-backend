import React from "react";

function AlbumCard({ album }) {
  return (
    <div className="container">
      <div className="card">
        <img
          class="card-img-top"
          alt=""
          src="https://media.istockphoto.com/id/1329350253/vector/image-vector-simple-mountain-landscape-photo-adding-photos-to-the-album.jpg?s=612x612&w=0&k=20&c=3iXykf5ZQI2eBo0DaQ7W-e_8E5rhFEammFqO9XCisnI="
        />
        <div className="card-body">
          <h5 className="card-title">{album.title}</h5>
          <a href="/photos" className="btn btn-primary">
            See Photos
          </a>
        </div>
      </div>
    </div>
  );
}

export default AlbumCard;

import React from "react";

function AlbumCard({ album }) {
  return (
    <div>
      <li className="card">
        <div>
          <h1>{album.title}</h1>
          <button>Go to Photos</button>
          
        </div>
      </li>
      <br />
    </div>
  );
}

export default AlbumCard;

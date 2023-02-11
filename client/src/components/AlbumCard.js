import React from "react";

function AlbumCard({ album }) {
  return (
    <div>
      <li className="card">
        <div>
          <h1>{album.title}</h1>
          {/* <button className="btn btn-outline-primary">Go to Photos</button> */}
        </div>

        {/* <div class="card">
          <div class="card-body">{album.title}</div>
          <button>Go to Photos</button>
        </div> */}
      </li>
      <br />
    </div>
  );
}

export default AlbumCard;

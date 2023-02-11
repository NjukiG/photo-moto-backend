import React from "react";
import AlbumCard from "./AlbumCard";

function AlbumList({ albums }) {
  return (
    <div>
      <h3>A list of all the albums.</h3>
      <ul className="cards">
        {albums &&
          albums.map((album) => {
            return <AlbumCard album={album} />;
          })}
      </ul>
    </div>
  );
}

export default AlbumList;

import React from "react";

function PhotoSearch({ searchTerm, onSearchChange }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search for a photo:</label>
      <br />
      <input
        type="text"
        id="search"
        placeholder="Type a photo name to search..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}

export default PhotoSearch;

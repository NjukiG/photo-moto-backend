import React from "react";

function PhotoCard({ photo }) {
  // const {id, title, image_url} = photo
  // console.log(typeof(photo))

  return (
    <div>
      <li>
        <img src={photo?.image_url} alt="" />
        <h3>{photo?.title}</h3>
        <h4>{photo?.album_id}</h4>
      </li>
      {/* <div style="width:400px">
        <img
          className="card-img-top"
          src={photo?.image_url}
          alt="Card image"
        />
        <div className="card-body">
          <h4 className="card-title">{photo?.title}</h4>
          <p class="card-text">
            Some example text some example text. John Doe is an architect and
            engineer
          </p>
          <a href="#" className="btn btn-primary">
            See Profile
          </a>
        </div>
      </div> */}
    </div>
  );
}

export default PhotoCard;


//  key={photo?.id}

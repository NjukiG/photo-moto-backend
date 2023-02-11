import React from 'react'
import PhotoCard from './PhotoCard'

function PhotosList({photos}) {
  return (
    <div>
        <ul>
            {photos && photos.map((photo) => {
                return <PhotoCard key={photo.id} photo={photo} /> 
            })}
        </ul>
        <PhotoCard />
    </div>
  )
}

export default PhotosList
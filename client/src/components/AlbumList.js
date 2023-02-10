import React from 'react'
import AlbumCard from './AlbumCard'

function AlbumList({albums}) {
  return (
    <div>
        <ul className='cards'>
            {albums && albums.map((album) => {
                return <AlbumCard key={album.id} album = {album} />
            })}
        </ul>
    </div>
  )
}

export default AlbumList
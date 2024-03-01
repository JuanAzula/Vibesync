import React from 'react'
import { Playlist } from '../../types/data'
import './PlaylistCard.css'

type Props = {
    playlist: Playlist
}

export const PlaylistCard = ({playlist}: Props) => {
  return (
    <div className="playlist-container">
      <img src={playlist.thumbnail}  />
      <div>
        <h3>{playlist.name}</h3>
      </div>
    </div>
  )
}


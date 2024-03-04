import React from 'react'
import playlist from '../../assets/playlist-default-img.png'
import './PlaylistMiniCard.css'

type Props = {}

export const PlaylistMiniCard = (props: Props) => {
  return (
    <div className="playlist-minicard-container">
        <img className="playlist-minicard-img" src={playlist} />
        <p>Playlist</p>
    </div>
  )
}

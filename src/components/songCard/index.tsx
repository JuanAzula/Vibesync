import React from 'react'
import { type Track } from '../../types/data'
import './SongCard.css'
import { StyledLink } from '../../styledComponents/styledLink'

interface Props {
  track: Track
  isActive?: boolean
}

const SongCard = ({ track, isActive }: Props) => {
  return (
    <div className="songcard-container">
      <StyledLink to={`/tracks/${track.id}`}>
      <img className="songcard-img" src={track.thumbnail} />
      <div>
        <h3>{track.name}</h3>
        <p>{track.id}</p>
        {isActive && <p>{track.artist}</p>}
      </div>
      </StyledLink>
    </div>
  )
}

export default SongCard

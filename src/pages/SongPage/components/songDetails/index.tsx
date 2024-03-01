import { Track } from '../../../../types/data'
import './songDetails.css'

type Props = {
  song: Track
}

export const SongDetails = ({song}: Props) => {
  return (
    <div className="song-container">
      <img className='song-img' src={song.thumbnail} alt="" />
      <h1 className='song-name'>{song.name}</h1>
      <span className='song-artist'>{song.artist}</span>
    </div>
  )
}


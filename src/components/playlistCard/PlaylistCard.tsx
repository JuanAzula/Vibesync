import { type Playlist } from '../../types/data'
import './PlaylistCard.css'

type Props = {
    playlist: Playlist
    onClick ?: () => void
}

export const PlaylistCard = ({playlist, onClick}: Props) => {
  return (
    <div className="playlist-container"onClick={onClick} >
      <img className="playlist-img" src={playlist.thumbnail}  />
      <div>
        <h3>{playlist.name}</h3>
      </div>
    </div>
  )
}

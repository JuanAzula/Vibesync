import { type Album } from '../../types/data'
import './albumCard.css'

interface Props {
  album: Album
}

export const AlbumCard = ({ album }: Props) => {
  return (
    <div className="album-container">
      <img className="album-img" src={album.thumbnail} />
      <div>
        <span>{album.artist}</span>
        <h3>{album.name}</h3>
      </div>
    </div>
  )
}

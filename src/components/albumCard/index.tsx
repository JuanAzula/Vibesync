import { Album } from '../../types/data';
import './albumCard.css'

type Props = {
  album: Album;
};

export const AlbumCard = ({ album}: Props) => {
  return (
    <div className="album-container">
      <img src={album.imageUrl} />
      <div>
        <span>{album.artist}</span>
        <h3>{album.name}</h3>
      </div>
    </div>
  );
};
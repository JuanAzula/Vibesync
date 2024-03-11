import { Artist } from "../../types/data";
import './artistCard.css'

type Props = {
  artist: Artist;
};

export const ArtistCard = ({ artist}: Props) => {
  return (
    <div className="artist-container">
      <img className="artist-pic" src={artist.photoUrl} />
      <div>
        <h3>{artist.name}</h3>
      </div>
    </div>
  );
};
import React from "react";
import { Track } from "../../types/data";
import './SongCard.css'

type Props = {
  track: Track;
  isActive?: boolean;
};

const SongCard = ({ track, isActive }: Props) => {
  return (
    <div className="songcard-container">
      <img src={track.thumbnail} />
      <div>
        <h3>{track.name}</h3>
        {isActive && <p>{track.artist}</p>}
      </div>
    </div>
  );
};

export default SongCard;
